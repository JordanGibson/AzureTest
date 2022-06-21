import { useResize } from "@nextui-org/react";
import { MediaType, Post, PrismaClient, User } from "@prisma/client";
import { data } from "autoprefixer";
import { time } from "console";
import _ from "lodash";
import { allProgress, updateProgressBar } from "./utils";
import { createUser } from "./createUser";

export const prisma = new PrismaClient();
const USER_COUNT = 15;

async function seed() {
  await clearDatabase();
  await allProgress(
    Array.from({ length: USER_COUNT }).map(createUser),
    updateProgressBar()
  );
}

async function clearDatabase() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  await prisma.media.deleteMany();
  console.log("Cleared database");
}

seed()
  .then(() => {
    console.log(`\nFinished seeding database`);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
