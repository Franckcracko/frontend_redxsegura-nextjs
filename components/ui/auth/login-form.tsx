"use client";

import Link from "next/link";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useState } from "react";

import { handleSignIn } from "@/lib/cognito-actions";
import { title } from "@/components/primitives";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await handleSignIn({ email, password });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <form action={handleSubmit} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={title()}>Inicia sesión</h1>
        <div className="w-full">
          <div>
            <Input
              required
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="email"
              label="Correo"
              name="email"
              placeholder="Ingresa tu correo"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Input
              required
              id="password"
              label="Contraseña"
              minLength={6}
              name="password"
              placeholder="Ingresa tu contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <Button className="mt-4 w-full">Inciar sesión</Button>
        <div className="flex justify-center">
          <Link
            className="mt-2 cursor-pointer text-blue-500"
            href="/auth/signup"
          >
            {"Don't have an account? "} Sign up.
          </Link>
        </div>
      </div>
    </form>
  );
}
