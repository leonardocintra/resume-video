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

export function SignupForm() {
  return (
    <div className="w-full max-w-md">
      <form>
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
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
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
            <button className="w-full">Cadatrar</button>
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