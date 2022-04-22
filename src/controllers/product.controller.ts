import { Response } from "express";
import { GetProductsRequest } from "../interfaces";
import Product from "../models/Product";
import { NewProductRequest } from "../interfaces/index";

export const getProducts = async (req: GetProductsRequest, res: Response) => {};

export const newProduct = async (req: NewProductRequest, res: Response) => {
  const {
    categories,
    description,
    img,
    title,
    url,
    user: { _id },
  } = req.body;

  const product = new Product({
    author: _id,
    categories,
    description,
    img,
    title,
    url,
  });

  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    res
      .status(503)
      .json({
        error: { message: "No se logró guardar la información: " + error },
      });
  }
};
