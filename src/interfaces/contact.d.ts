import { TypedRequestBody } from "./base";

interface Contact {
  name: string;
  email: string;
  message: string;
}

// New Contact

interface NewContactBody extends Contact {}

export interface NewContactRequest extends TypedRequestBody<NewContactBody> {}
