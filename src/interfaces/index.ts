import { Request } from "express";
import { User } from "../models/User";

export interface TypedRequestBody<T> extends Request {
  body: T;
}

export interface TypedRequest<T, K> extends Request<K, {}, T> {
  params: K;
  body: T;
}

// Register

interface RegisterBody {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface RegisterRequest extends TypedRequestBody<RegisterBody> {
  body: RegisterBody;
}

// Login

interface LoginBody {
  email: string;
  password: string;
}

export interface LoginRequest extends TypedRequestBody<LoginBody> {
  body: LoginBody;
}

// Products

interface Product {
  title: string;
  description: string;
  img: string;
  url: string;
  categories: string;
}

// NewProduct
interface NewProductBody extends Product {
  user: User;
}

export interface NewProductRequest extends TypedRequestBody<NewProductBody> {}

// EditProduct
interface EditProductBody extends Omit<Product, "img"> {
  user: User;
}

export interface EditProductRequest
  extends TypedRequest<EditProductBody, { productId: string }> {}

export interface DeleteProductRequest
  extends TypedRequest<{}, { productId: string }> {}

//Events

interface Event{
  title: string;
  description: string;
  img: string;
  starts_at: Date;
  user: User;
}

interface NewEventBody extends Event {
  user: User;
}

export interface NewEventRequest extends TypedRequestBody<NewEventBody> {
  body: NewEventBody;
}

//EditEvent

interface EditEventBody extends Omit<Event, "img"> {
  user: User;
}

export interface EditEventRequest extends TypedRequestBody<EditEventBody> {
  body: EditEventBody;
}

export interface EditProductRequest
  extends TypedRequest<EditProductBody, { productId: string }> {}

export interface DeleteProductRequest
  extends TypedRequest<{}, { productId: string }> {}

//Post (Noticias)   ////////////

interface Post {
  title: string;
  content: string;
  img: string;
  author: User;
  created_at: Date;
  updated_at: Date;
}

//NewPost

interface NewPostBody extends Post{
  user:User;
}

export interface NewPostRequest extends TypedRequestBody<NewPostBody> {}

// EditPost
interface EditPostBody extends Omit<Post, "img"> {
  user: User;
}

export interface EditPostRequest
  extends TypedRequest<EditPostBody, { postId: string }> {}

export interface DeletePostRequest
  extends TypedRequest<{}, { postId: string }> {}

  /*
export interface GetPostsRequest extends TypedRequestBody<GetPostBody> {
  body: GetPostBody;
}
*/
