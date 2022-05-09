import { TypedRequest, TypedRequestBody } from "./base";

interface Product {
  title: string;
  description: string;
  img: string;
  url: string;
  categories: string;
}

// New Product
interface NewProductBody extends Product {
  user: User;
}

export interface NewProductRequest extends TypedRequestBody<NewProductBody> {}

// Edit Product
interface EditProductBody extends Omit<Product, "img"> {
  user: User;
}

export interface EditProductRequest
  extends TypedRequest<EditProductBody, { productId: string }> {}

// Delete Product

export interface DeleteProductRequest
  extends TypedRequest<{}, { productId: string }> {}
