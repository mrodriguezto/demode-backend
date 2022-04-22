import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "../base/env";
import User from "../models/User";

const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Getting the token from headers and validating
  const authHeader = req.headers["authorization"];

  const token = authHeader?.split(" ")[1];

  if (!token)
    return res.status(401).json({
      error: { message: "Sin autorización: Token inexistente" },
    });

  try {
    const identifiedUser = jwt.verify(token, env.ACCESS_TOKEN_SECRET);
    req.body = { ...req.body, user: identifiedUser };
  } catch (error) {
    return res
      .status(401)
      .json({ error: { message: "Sin autorización: Token inválido" } });
  }

  // Validate existing user in database

  try {
    const userFound = await User.findById(req.body.user.id);

    if (!userFound)
      return res.status(400).json({
        error: { message: "Usuario no encontrado" },
      });

    req.body = { ...req.body, user: userFound };

    next();
  } catch (error) {
    res.status(500).json(error);
  }
};

export default validateUser;
