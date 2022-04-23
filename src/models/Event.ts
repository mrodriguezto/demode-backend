import { Schema, model, Types } from "mongoose";

export interface Event {
  _id: Types.ObjectId;
  title: string;
  description: string;
  img: string;
  starts_at: Date;
  author: Types.ObjectId; // Type for the Id of referenced models
  created_at: Date;
  updated_at: Date;
}

const eventSchema = new Schema<Event>(
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
    starts_at:{
        type: Date,
        required: true
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

export default model<Event>("Event", eventSchema);
