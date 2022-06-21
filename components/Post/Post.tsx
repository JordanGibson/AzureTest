import { faker } from "@faker-js/faker";
import { Card, Image, Spacer } from "@nextui-org/react";
import { LikesAndComments } from "./LikesAndComments";
import { User } from "./User";

export default function Post() {
  return (
    <Card isHoverable>
      <Card.Body>
        <User />
        <Spacer y={0.5}></Spacer>
        <Image
          className="rounded"
          src={faker.image.image(800, 800, true)}
        ></Image>
        <Spacer y={0.8}></Spacer>
        <LikesAndComments />
      </Card.Body>
    </Card>
  );
}
