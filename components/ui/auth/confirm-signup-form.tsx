"use client";

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

import { confirmSignUp } from "@/lib/cognito-actions";
import { title } from "@/components/primitives";

export default function ConfirmSignUpForm() {
  const handleSubmit = async () => {
    try {
      confirmSignUp();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action={handleSubmit} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={title()}>Please confirm your account.</h1>
        <Input
          required
          id="email"
          label="Email"
          name="email"
          placeholder="Enter your email address"
          type="email"
        />
        <div className="relative">
          <Input
            required
            className="mt-4"
            id="code"
            label="Codigo"
            minLength={6}
            name="code"
            placeholder="Enter code"
            type="text"
          />
        </div>
        <Button className="mt-4 w-full">Confirm</Button>
      </div>
    </form>
  );
}
