import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const contactFormSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters").max(50),
  company: z.string().min(5, "Last name must be at least 5 characters").max(50),
  contact: z
    .string()
    .length(10, "Contact must be exactly 10 digits")
    .regex(/^\d+$/, "Contact must contain only numbers"),
  email: z
    .string()
    .min(8, { message: "Email must be at least 8 characters." })
    .email({ message: "Invalid email address" })
    .trim(),
  message: z
    .string()
    .min(50, { message: "Message should be at least 50 characters." })
    .max(500, { message: "Message should not exceed 500 characters." }),
});
