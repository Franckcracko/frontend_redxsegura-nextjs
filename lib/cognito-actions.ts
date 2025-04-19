import { signUp, resendSignUpCode } from "@aws-amplify/auth";
import { redirect } from "next/navigation";

export async function handleSignUp({
  firstName,
  middleName,
  password,
  email,
}: {
  firstName: string;
  middleName: string;
  password: string;
  email: string;
}) {
  try {
    const {} = await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
          email,
          given_name: firstName,
          middle_name: middleName,
        },
        autoSignIn: true,
      },
    });
  } catch (error) {
    return "Error signing up";
  }
  redirect("/auth/config-signup");
}

export async function handleSendEmailVerification({
  email,
}: {
  email: string;
}) {
  try {
    await resendSignUpCode({
      username: email,
    });

    return {
      message: "Verification code sent",
    };
  } catch (error) {
    return {
      message: "Error sending verification code",
    };
  }
}

export async function confirmSignUp() {
  console.log("confirming sign up");

  return "Invalid code";
}

export async function handleSignIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  console.log("signing in");

  return "Error logging in";
}

export async function handleSignOut() {
  console.log("signing out");
}
