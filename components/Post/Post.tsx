import { faker } from "@faker-js/faker";
import { Card, Image, Spacer } from "@nextui-org/react";
import { PostWithMedia } from "../../prisma/types";
import { LikesAndComments } from "./LikesAndComments";
import { User } from "./User";

export default function Post({ post }: { post: PostWithMedia }) {
  return (
    <Card isHoverable>
      <Card.Body>
        <User user={post.author} />
        <Spacer y={0.5}></Spacer>
        <Image className="rounded" src={post.media.url} alt=""></Image>
        <Spacer y={0.8}></Spacer>
        <LikesAndComments />
      </Card.Body>
    </Card>
  );
}
