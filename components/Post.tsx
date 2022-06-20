import { faker } from "@faker-js/faker";
import {
  Avatar,
  Card,
  Container,
  Image,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";

export default function Post() {
  return (
    <Card isHoverable>
      <Card.Body>
        <Row align="center">
          <Avatar src={faker.image.avatar()} />
          <Spacer x={0.5}></Spacer>
          <Text>{faker.internet.userName()}</Text>
        </Row>
        <Spacer y={0.5}></Spacer>
        <Image src={faker.image.image(800, 800, true)}></Image>
      </Card.Body>
    </Card>
  );
}
