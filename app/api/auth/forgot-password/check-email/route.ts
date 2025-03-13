import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectMongo from '~/lib/mongodb';
import { mailOptions, transporter } from '~/lib/nodemailer';
import User from '~/lib/models/user';

export async function POST(req: NextRequest) {
   try {
      await connectMongo();
      const { email } = await req.json();

      const user = await User.findOne({ email });
      if (!user) {
         return NextResponse.json(
            { error: 'No account found with this email address.' },
            { status: 404 }
         );
      }

      const verificationCode = Math.floor(1000 + Math.random() * 9000);
      const hashedVerificationCode = await bcrypt.hash(
         verificationCode.toString(),
         10
      );

      user.verificationHash = hashedVerificationCode;
      await user.save();

      await transporter.sendMail({
         ...mailOptions,
         to: email,
         subject: 'Your Password Reset Code',
         html: `
<table
style="
  background-color: #f1f1f1;
  font-family: Arial, sans-serif;
  border-radius: 10px;
  max-width: 400px;
  margin: 10px auto;
  padding: 50px 30px;
"
>
<tr>
  <td align="center" style="padding-bottom: 10px;">
    <img
      src="https://res.cloudinary.com/dycw73vuy/image/upload/v1734889176/arhaus_s6v9ro.png"
      style="width: 200px"
    />
  </td>
</tr>
<tr>
  <td
    style="
      border-top: 1px solid #1e372f;
      padding: 50px 15px;
      box-sizing: border-box;
      color: #1e372f;
    "
  >
    <p style="margin: 0; padding-bottom: 10px">Trouble signing in?</p>
    <p
      style="
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        margin: 0 0 20px 0;
      "
    >
      Resetting your password is easy.
      <br />
      Just copy the verification code below and follow the instructions. We’ll
      have you up and running in no time.
    </p>
  </td>
</tr>
<tr>
  <td align="center" style="padding: 10px 0">
    <p style="font-size: 40px; color: #1e372f; font-weight: bold; margin: 0">
      ${verificationCode}
    </p>
  </td>
</tr>
<tr>
  <td align="start" style="padding-top: 20px">
    <p style="font-size: 14px; color: #1e372f; margin: 0">© Arhaus. 2024</p>
  </td>
</tr>
</table>
      `,
      });

      return NextResponse.json(
         {
            message: 'Reset email sent, if the email exists.',
            email: email,
         },
         { status: 200 }
      );
   } catch (error) {
      return NextResponse.json(
         { error: 'An error occurred.' },
         { status: 500 }
      );
   }
}
