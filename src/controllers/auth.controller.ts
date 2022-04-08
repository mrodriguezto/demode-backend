import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { compare, genSalt, hash } from "bcrypt";

import env from "../base/env";
import User from "../models/User";
import { LoginRequest, RegisterRequest } from "../interfaces";

export const login = async (req: LoginRequest, res: Response) => {
  // TODO: fields validations

  // validate against db
  const { email, password } = req.body;

  const userFound = await User.findOne({ email: email });
  if (!userFound)
    return res.status(400).json({
      error: {
        message: "Correo o contraseña no válidas. Verifique la información.",
      },
    });

  // validate password
  const passwordValid = await compare(password, userFound.password);
  if (!passwordValid)
    return res.status(400).json({
      error: {
        message: "Correo o contraseña no válidas. Verifique la información.",
      },
    });

  // jsonwebtoken
  const token = jwt.sign(
    {
      id: userFound._id,
    },
    env.ACCESS_TOKEN_SECRET
  );

  res.json({
    user: {
      id: userFound._id,
      firstname: userFound.firstname,
      lastname: userFound.lastname,
      email: userFound.email,
      createdAt: userFound.createdAt,
    },
    token: token,
  });
};

export const register = async (req: RegisterRequest, res: Response) => {
  // TODO: validations

  // validate unique against db

  const { firstname, lastname, email, password } = req.body;

  const userFound = await User.findOne({ email: email });
  if (userFound)
    return res
      .status(400)
      .json({ error: { message: "Este correo ya tiene una cuenta asociada" } });

  // create new user

  const saltRounds = await genSalt(10);

  const hashedPassword = await hash(password, saltRounds);

  const user = new User({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(400).json(error);
  }
};
