import { Schema, model, Document } from 'mongoose';

export interface User extends Document {
  firebaseUid: string;
  name: string;
  email: string;
  avatar: string;
}

const userSchema = new Schema<User>(
  {
    firebaseUid: { type: String, unique: true },
    name: { type: String },
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
  },
  { timestamps: true },
);

export const UserModel = model<User>('User', userSchema);
