"use client";

import Link from "next/link";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { registerUserAction } from "@/data/actions/auth-actions";
import { useFormState } from "react-dom";
import { ZodErrors } from "../custom/zod-errors";
import { StrapiErrors } from "../custom/strapi-errors";
import { SubmitButton } from "../custom/submit-button";

const INITIAL_STAGE = {
  data: null,
  zodErrors: null,
  message: null,
};

export function SignupForm() {
  const [formState, formAction] = useFormState(
    registerUserAction,
    INITIAL_STAGE
  );

  console.log(formState, "clienteee");

  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Criar conta</CardTitle>
            <CardDescription>
              Informe os dados abaixo para criar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="username"
              />
              <ZodErrors error={formState?.zodErrors?.username} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
              />
              <ZodErrors error={formState?.zodErrors?.email} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Senha ..."
              />
              <ZodErrors error={formState?.zodErrors?.password} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <SubmitButton
              loadingText="Carregando ..."
              text="Cadatrar"
              className="w-full"
            />
            <StrapiErrors error={formState?.strapiErrors} />
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Já tem uma conta ?
          <Link className="underline ml-2" href="signin">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
