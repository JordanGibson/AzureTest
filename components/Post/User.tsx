import { faker } from "@faker-js/faker";
import { Avatar, Row, Spacer, Text } from "@nextui-org/react";

export function User() {
  return (
    <Row align="center">
      <Avatar src={faker.image.avatar()} />
      <Spacer x={0.5}></Spacer>
      <Text>{faker.internet.userName()}</Text>
    </Row>
  );
}
