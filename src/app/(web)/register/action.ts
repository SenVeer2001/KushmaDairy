"use server";

import  prismaClient  from "../../../lib/prisma";
import { hash } from "bcryptjs";

interface CreateUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function createUserAction(userInput: CreateUserInput) {
  const { firstName, lastName, email, password } = userInput;

  if (!firstName || !lastName || !email || !password) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  const existingUser = await prismaClient.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      success: false,
      message: "User already exists with this email",
    };
  }

  const hashedPassword = await hash(password, 10);

  const createdUser = await prismaClient.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  return {
    success: true,
    userId: createdUser.id,
  };
}
