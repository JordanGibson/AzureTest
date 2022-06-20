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
import { BsChat, BsHeart } from "react-icons/bs";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";

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
        <Image
          className="rounded"
          src={faker.image.image(800, 800, true)}
        ></Image>
        <Spacer y={0.8}></Spacer>
        <Row className="text-gray-700 outline-gray-700" gap={0.7}>
          <FaRegHeart size={"1.8em"} />
          <Text>{faker.datatype.number()}</Text>
          <FaRegComment size={"1.8em"} />
          <Text>{faker.datatype.number()}</Text>
        </Row>
      </Card.Body>
    </Card>
  );
}
