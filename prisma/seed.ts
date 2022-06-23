import { createUser } from "./createUser";
import prisma from "./prisma";
import { allProgress, updateProgressBar } from "./utils";

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
