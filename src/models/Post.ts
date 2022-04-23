import { Schema, model, Types } from "mongoose";

export interface Post {
    _id: Types.ObjectId;
    title: string;
    content: string;
    img: string;
    author: Types.ObjectId;
    created_at: Date;
    updated_at: Date;
}

const postSchema =  new Schema<Post>(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        img: {
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

export default model<Post>("Post", postSchema);