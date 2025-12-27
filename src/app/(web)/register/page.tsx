"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserAction } from "./action";

export default function RegisterPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    setIsSubmitting(true);
    try {
      const actionResult = await createUserAction({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        password,
      });

      if (!actionResult || !actionResult.success) {
        setErrorMessage(actionResult?.message || "Failed to create account");
        return;
      }

      router.push("/login");
    } catch (error) {
      console.error("Register error:", error);
      setErrorMessage("Unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md space-y-4 border p-6 rounded"
        noValidate
      >
        <h1 className="text-xl font-bold">Create Account</h1>

        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}

        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          className="w-full border p-2"
          disabled={isSubmitting}
          required
        />

        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          className="w-full border p-2"
          disabled={isSubmitting}
          required
        />

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full border p-2"
          disabled={isSubmitting}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full border p-2"
          disabled={isSubmitting}
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-black text-white p-2 rounded ${
            isSubmitting ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Creating..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}
