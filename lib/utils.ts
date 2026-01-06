import { subjectsColors } from "@/constants"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getSubjectColor = (
  subject: keyof typeof subjectsColors
) => {
  return subjectsColors[subject];
};