import { faker } from "@faker-js/faker";
import { prisma } from "./seed";

const MIN_POSTS = 5;
const MAX_POSTS = 10;

export async function createUser() {
  await prisma.user.create({
    data: {
      email: faker.internet.email(),
      name: faker.name.findName(),
      avatar: {
        create: {
          url: faker.image.avatar(),
        },
      },
      posts: {
        create: Array.from({
          length: faker.datatype.number({ min: MIN_POSTS, max: MAX_POSTS }),
        }).map(() => ({
          caption: faker.lorem.sentence(),
          media: {
            create: {
              url: faker.image.imageUrl(800, 800, undefined, true),
            },
          },
        })),
      },
    },
  });
}
