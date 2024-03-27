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

export function SigninForm() {
  return (
    <div className="w-full max-w-md">
      <form>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Entrar</CardTitle>
            <CardDescription>
              Informe os dados abaixo para acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="username ou email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Senha ..."
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button className="w-full">Entrar</button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Não tem uma conta ?
          <Link className="underline ml-2" href="signup">
            Criar cadastro
          </Link>
        </div>
      </form>
    </div>
  );
}
