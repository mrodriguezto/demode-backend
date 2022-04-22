import { Schema, model, Types } from "mongoose";

export interface User {
  _id: Types.ObjectId;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<User>(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
      min: 1,
      max: 50,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      min: 1,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      min: 5,
      max: 150,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 255,
    },
  },
  { timestamps: true }
);

export default model<User>("User", userSchema);
