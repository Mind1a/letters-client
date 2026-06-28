import { z } from "zod";

export const dearFutureMeSchema = z
  .object({
    receiveAt: z.enum(["", "graduation", "customDate"]),
    semester: z.string().optional(),

    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    title: z.string().min(1, "Title is required"),
    message: z.string().min(1, "Message is required"),

    terms: z.boolean().refine((value) => value === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.receiveAt === "graduation" && !data.semester) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["semester"],
        message: "Select your current semester",
      });
    }
  });

export type DearFutureMeFormValues = z.infer<typeof dearFutureMeSchema>;
