import { Request } from "express";

export interface TypedRequestBody<T> extends Request {
  body: T;
}

export interface TypedRequest<T, K> extends Request<K, {}, T> {
  params: K;
  body: T;
}
