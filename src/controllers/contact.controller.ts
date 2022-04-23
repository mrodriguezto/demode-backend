import { Request, Response } from "express";
import { NewContactRequest } from "../interfaces";
import Contact from "../models/Contact";
import { sendEmail } from "../utils/sendEmail";

export const newContact = async (req: NewContactRequest, res: Response) => {
  const { email, message, name } = req.body;

  try {
    await sendEmail(email, message, name);
  } catch (error) {
    return res.status(503).json({
      error: { message: "No se logró enviar la información: " + error },
    });
  }

  const contact = new Contact({
    email,
    message,
    name,
  });

  try {
    const savedContact = await contact.save();
    return res.json(savedContact);
  } catch (error) {
    return res.status(503).json({
      error: { message: "No se logró guardar la información: " + error },
    });
  }
};

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find();
    return res.json(contacts);
  } catch (error) {
    return res.status(503).json({
      error: { message: "No se logró obtener la información: " + error },
    });
  }
};
