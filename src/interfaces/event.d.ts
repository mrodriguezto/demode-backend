import { TypedRequest, TypedRequestBody } from "./base";

interface Event {
  title: string;
  description: string;
  place: string;
  url: string;
  starts_at: Date;
}

// New Event

interface NewEventBody extends Event {}

export interface NewEventRequest extends TypedRequestBody<NewEventBody> {}

//Edit Event

interface EditEventBody extends Event {}

export interface EditEventRequest extends TypedRequestBody<EditEventBody> {}
