import { signUp } from "@aws-amplify/auth";
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
  } catch (error) {}
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
