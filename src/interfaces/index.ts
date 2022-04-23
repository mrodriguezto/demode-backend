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

export interface RegisterRequest extends TypedRequestBody<RegisterBody> {}

// Login

interface LoginBody {
  email: string;
  password: string;
}

export interface LoginRequest extends TypedRequestBody<LoginBody> {}

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

// Contact
interface Contact {
  name: string;
  email: string;
  message: string;
}

interface NewContactBody extends Contact {}

export interface NewContactRequest extends TypedRequestBody<NewContactBody> {}
