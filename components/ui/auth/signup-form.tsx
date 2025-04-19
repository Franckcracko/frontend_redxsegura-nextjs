"use client";

import Link from "next/link";
import { Button } from "@heroui/button";
import { useState } from "react";
import { Input } from "@heroui/input";

import { handleSignUp } from "@/lib/cognito-actions";
import { title } from "@/components/primitives";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      await handleSignUp({ firstName, middleName, password, email });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action={handleSubmit} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={title()}>Crea tu cuenta</h1>
        <div className="w-full">
          <div>
            <Input
              required
              label="Nombre(s)"
              minLength={4}
              name="firstname"
              placeholder="Ingresa tu nombre(s)"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Input
              required
              id="middlename"
              label="Apellidos"
              name="middlename"
              placeholder="Ingresa tus apellidos"
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Input
              required
              id="email"
              label="Correo electrónico"
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
        <Button className="mt-4 w-full">Crear cuenta</Button>
        <div className="flex justify-center">
          <Link
            className="mt-2 cursor-pointer text-blue-500"
            href="/auth/login"
          >
            ¿Ya tienes cuenta? Incia sesión.
          </Link>
        </div>
      </div>
    </form>
  );
}
