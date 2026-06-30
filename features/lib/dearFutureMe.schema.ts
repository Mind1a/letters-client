import { z } from "zod";

export const dearFutureMeSchema = z
  .object({
    receiveAt: z.string().min(1, "error"),
    semester: z.string().optional(),
    customDate: z.string().optional(),

    firstName: z.string().min(1, "error"),
    lastName: z.string().min(1, "error"),
    title: z.string().min(1, "error"),
    message: z.string().min(1, "error"),

    terms: z.boolean().refine((value) => value === true, {
      message: "error",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.receiveAt === "graduation" && !data.semester) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["semester"],
        message: "error",
      });
    }

    if (data.receiveAt === "customDate" && !data.customDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["customDate"],
        message: "error",
      });
    }
  });

export type DearFutureMeFormValues = z.infer<typeof dearFutureMeSchema>;
