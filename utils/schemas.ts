import * as z from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "first name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "last name must be at least 2 characters" }),
  username: z
    .string()
    .min(2, { message: "username must be at least 2 characters" }),
});

export function validateWithZodSchema<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
}

const validateFile = () => {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];

  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "File size must be less than 1 MB")
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
};

export const imageSchema = z.object({ image: validateFile() });
