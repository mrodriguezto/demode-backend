import { Schema, model } from "mongoose";

interface Contact {
  name: string;
  email: string;
  message: string;
  sended_at: Date;
}

const contactSchema = new Schema<Contact>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sended_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default model<Contact>("Contact", contactSchema);
