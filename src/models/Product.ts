import { Schema, model, Types } from "mongoose";

interface Product {
  title: string;
  description: string;
  img: string;
  url: string;
  author: Types.ObjectId; // Type for the Id of referenced models
  created_at: Date;
  updated_at: Date;
}

const productSchema = new Schema<Product>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId, // Type for the Id of referenced models
      ref: "User", // references User model
    },
  },
  {
    timestamps: true,
  }
);

export default model<Product>("Product", productSchema);
