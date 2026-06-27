import { z } from "zod";

export const dearFutureMeSchema = z.object({
  receiveAt: z.string().min(1, "Select when you want to receive your letter"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  title: z.string().min(1, "Title is required"),
  message: z.string().min(1, "Message is required"),
  terms: z.boolean(),
});
