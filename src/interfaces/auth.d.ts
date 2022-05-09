import { TypedRequestBody } from "./base";

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
