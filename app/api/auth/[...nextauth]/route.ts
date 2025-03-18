import NextAuth, { AuthOptions, NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import User from '~/lib/models/user';
import connectMongo from '~/lib/mongodb';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const authOptions: NextAuthOptions = {
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID as string,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
   ],
   callbacks: {
      async jwt({ token, account, user }: any) {
         if (account && user) {
            await connectMongo();

            let existingUser = await User.findOne({ email: user.email });
            if (!existingUser) {
               existingUser = await User.create({
                  email: user.email,
                  firstName: user.name.split(' ')[0],
                  lastName: user.name.split(' ')[1] || '',
                  profile: user.image || '',
                  oauthProvider: 'google',
                  isAdmin: false,
               });
            }

            token.id = existingUser._id;
            token.email = existingUser.email;
            token.oauthProvider = existingUser.oauthProvider;
            token.name = `${existingUser.firstName} ${existingUser.lastName}`;
            token.isAdmin = existingUser.isAdmin;
         }

         return token;
      },

      session({ session, token }: any) {
         if (token) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.name = token.name;
            session.user.isAdmin = token.isAdmin;
         }

         return session;
      },
   },

   secret: JWT_SECRET,

   session: {
      strategy: 'jwt',
   },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
