import { TypedRequest, TypedRequestBody } from "./base";

interface Post {
  title: string;
  content: string;
  img: string;
  created_at: Date;
  updated_at: Date;
}

//New Post

interface NewPostBody extends Post {
  user: User;
}

export interface NewPostRequest extends TypedRequestBody<NewPostBody> {}

// Edit Post
interface EditPostBody extends Omit<Post, "img"> {
  user: User;
}

export interface EditPostRequest
  extends TypedRequest<EditPostBody, { postId: string }> {}

// Delete Post

export interface DeletePostRequest
  extends TypedRequest<{}, { postId: string }> {}
