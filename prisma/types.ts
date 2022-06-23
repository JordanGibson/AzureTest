import { Prisma } from "@prisma/client";

export type PostWithMedia = Prisma.PostGetPayload<{
  include: {
    media: true;
    author: {
      include: {
        avatar: true;
      };
    };
  };
}>;
export type User = Prisma.UserGetPayload<{ include: { avatar: true } }>;
