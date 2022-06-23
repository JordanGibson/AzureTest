import { faker } from "@faker-js/faker";
import axios from "axios";
import prisma from "./prisma";

const MIN_POSTS = 5;
const MAX_POSTS = 10;

export async function createUser() {
  let imageUrls = await Promise.all(getImageUrls());
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
        create: imageUrls.map((url) => ({
          caption: faker.lorem.sentence(),
          media: {
            create: {
              url: url,
            },
          },
        })),
      },
    },
  });
}

function getImageUrls(): Promise<string>[] {
  return Array.from({
    length: faker.datatype.number({ min: MIN_POSTS, max: MAX_POSTS }),
  }).map(() => getStaticFakerImageUrl(() => faker.image.image(800, 800))
  );
}

async function getStaticFakerImageUrl(fakerCallback: () => string) {
  return await axios
    .get(fakerCallback())
    .then((response) => response.request.socket._httpMessage)
    .then((message) => `${message.protocol}//${message.host}${message.path}`);
}
