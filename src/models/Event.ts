import { Schema, model, Types } from "mongoose";

export interface Event {
  _id: Types.ObjectId;
  title: string;
  description: string;
  place: string;
  url: string;
  starts_at: Date;
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
    place: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    starts_at: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<Event>("Event", eventSchema);
