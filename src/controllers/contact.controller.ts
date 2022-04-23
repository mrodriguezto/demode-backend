import { Request, Response } from "express";
import { NewContactRequest } from "../interfaces";
import Contact from "../models/Contact";

export const newContact = async (req: NewContactRequest, res: Response) => {
  const { email, message, name } = req.body;

  // TODO: send email

  const contact = new Contact({
    email,
    message,
    name,
  });

  try {
    const savedContact = await contact.save();
    res.json(savedContact);
  } catch (error) {
    res.status(503).json({
      error: { message: "No se logró guardar la información: " + error },
    });
  }
};

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(503).json({
      error: { message: "No se logró obtener la información: " + error },
    });
  }
};
