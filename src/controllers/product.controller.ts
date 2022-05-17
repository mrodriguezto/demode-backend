import { Request, Response } from "express";
import Product from "../models/Product";
import { EditProductRequest, NewProductRequest } from "../interfaces";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(503).json({
      error: { message: "No se logró obtener la información: " + error },
    });
  }
};

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
    res.status(503).json({
      error: { message: "No se logró guardar la información: " + error },
    });
  }
};

export const editProduct = async (req: EditProductRequest, res: Response) => {
  const { productId } = req.params;
  const { categories, description, title, url } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        categories,
        description,
        title,
        url,
      },
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error) {
    res.status(503).json({
      error: { message: "No se logró modificar la información: " + error },
    });
  }
};

export const deleteProduct = async (req: EditProductRequest, res: Response) => {
  const { productId } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndRemove(productId);
    res.json(deletedProduct);
  } catch (error) {
    res.status(503).json({
      error: { message: "No se logró eliminar el registro: " + error },
    });
  }
};
