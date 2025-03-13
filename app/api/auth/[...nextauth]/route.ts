import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "~/lib/models/user";
import connectMongo from "~/lib/mongodb";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const authOptions: any = {
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
            firstName: user.name.split(" ")[0],
            lastName: user.name.split(" ")[1] || "",
            profile: user.image || "",
            oauthProvider: "google",
            isAdmin: false,
          });
        } else {
          console.log("Existing User Found");
        }

        token.id = existingUser._id;
        token.email = existingUser.email;
        token.oauthProvider = existingUser.oauthProvider;
        token.name = `${existingUser.firstName} ${existingUser.lastName}`;
        token.isAdmin = existingUser.isAdmin;
      }

      // console.log("Updated Token:", token);
      return token;
    },

    async session({ session, token }: any) {
      // console.log("Session Callback Triggered");
      // console.log("Incoming Token:", token);
      // console.log("Session Before Update:", session);
    
      if (token) {
        
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.isAdmin = token.isAdmin; 
    
        // console.log("Session After Update:", session);
      } else {
        console.log("No token available in session callback");
      }
    
      return session;
    }
  },

  secret: JWT_SECRET,

  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
