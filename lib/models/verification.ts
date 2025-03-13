import mongoose, { Schema, Document, Model } from 'mongoose';

interface IVerification extends Document {
  email: string;
  hashedCode: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  oauthProvider?: string;
}

const verificationSchema: Schema<IVerification> = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    hashedCode: { type: String, required: true }, 
    password: { type: String, required: true }, 
    firstName: { type: String, required: true},
      lastName: { type: String, required: false },
      oauthProvider: { type: String, required: false },
    createdAt: { type: Date, default: Date.now, expires: '1h' }, 
  },
  { timestamps: true }
);

const verification: Model<IVerification> =
  mongoose.models.Verification || mongoose.model<IVerification>('Verification', verificationSchema);

export default verification;
export type { IVerification };
