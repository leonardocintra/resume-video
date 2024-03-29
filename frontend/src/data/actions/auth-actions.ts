"use server";

import { z } from "zod";
import { registerUserService } from "../services/auth-service";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

const schemaRegister = z.object({
  username: z.string().min(3).max(20, {
    message: "Username deve ter entre 3 e 20 caracteres",
  }),
  password: z.string().min(6).max(100, {
    message: "Senha deve ter entre 6 e 20 caracteres",
  }),
  email: z.string().email({
    message: "Por favor insira um email valido",
  }),
});

export async function registerUserAction(prevStage: any, formData: FormData) {
  const validatedFields = schemaRegister.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      ...prevStage,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Dados informados com erro. Falha ao criar uma conta",
    };
  }

  const responseData = await registerUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevStage,
      strapiErrors: null,
      zodErrors: null,
      message: "Falha ao criar uma conta. Tente novamente",
    };
  }

  if (responseData.error) {
    return {
      ...prevStage,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Falha ao criar uma conta.",
    };
  }

  cookies().set("jwt", responseData.jwt, config);
  redirect("/dashboard");
}
