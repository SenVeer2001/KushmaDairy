import { PrismaClient } from "@prisma/client";

// Add PrismaClient to global scope (TypeScript-safe)
const globalForPrisma = globalThis as unknown as {
  prismaClient: PrismaClient | undefined;
};

// Create or reuse PrismaClient instance
const prismaClient =
  globalForPrisma.prismaClient ?? new PrismaClient();

// Save instance in development to prevent hot-reload issues
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prismaClient = prismaClient;
}

export default prismaClient;
