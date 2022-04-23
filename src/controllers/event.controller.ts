import { Response, Request } from "express";
import { NewEventRequest, EditEventRequest } from "../interfaces";
import Event from "../models/Event";

export const getEvents = async (req: Request, res: Response) => {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (error) {
      res.status(503).json({
        error: { message: "No se logró obtener la información: " + error },
      });
    }
  };

export const newEvent = async (req: NewEventRequest, res: Response) => {
  const {
    title,
    description,
    img,
    starts_at,
    user: { _id },
  } = req.body;

  const event = new Event({
    author: _id,
    title,
    description,
    img,
    starts_at
  });

  try {
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (error) {
    res
      .status(503)
      .json({
        error: { message: "No se logró guardar la información: " + error },
      });
  }
};

export const editEvent = async (req: EditEventRequest, res: Response) => {
    
    const { eventId } = req.params

    const {
        title,
        description,
        starts_at,
        user: { _id },
    } = req.body;
    
    const event = new Event({
        author: _id,
        title,
        description,
        starts_at
        });

    try {
        const updatedEvent = await Event.findByIdAndUpdate(eventId, {
            author: _id,
            title,
            description,
            starts_at
        },
        {
            new:true //Options: new => parámetro para que devuelva el modificado y no el original
        }
        );
        res.json(updatedEvent);
    } catch (error) {
        res.status(503).json({
            error: { message: "No se logró modificar la información: " + error },
          });
    }
};

export const deleteEvent = async (req: Request, res: Response) => {
    const { eventId } = req.params;
  
    try {
      const deletedEvent = await Event.findByIdAndRemove(eventId);
      res.json(deletedEvent);
    } catch (error) {
      res.status(503).json({
        error: { message: "No se logró eliminar el registro: " + error },
      });
    }
  };
