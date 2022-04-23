import { Request } from "express";
import { User } from "../models/User";

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

// Products

// GetProducts

interface GetProductsBody {
  user: User;
}

export interface GetProductsRequest extends TypedRequestBody<GetProductsBody> {
  body: GetProductsBody;
}

// NewProduct

interface NewProductBody {
  title: string;
  description: string;
  img: string;
  url: string;
  categories: string;
  user: User;
}

export interface NewProductRequest extends TypedRequestBody<NewProductBody> {
  body: NewProductBody;
}


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