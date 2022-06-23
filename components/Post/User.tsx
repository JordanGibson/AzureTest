import { faker } from "@faker-js/faker";
import { Avatar, Row, Spacer, Text } from "@nextui-org/react";
import { User } from "../../prisma/types";

export function User({user}: {user: User}) {
  return (
    <Row align="center">
      <Avatar src={user.avatar.url} />
      <Spacer x={0.5}></Spacer>
      <Text>{user.name}</Text>
    </Row>
  );
}
