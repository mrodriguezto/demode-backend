import { Request } from "express";

export interface TypedRequestBody<T> extends Request {
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
