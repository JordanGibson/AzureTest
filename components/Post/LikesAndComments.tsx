import { faker } from "@faker-js/faker";
import { Row, Text } from "@nextui-org/react";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

export function LikesAndComments() {
  return (
    <Row className="text-gray-700 outline-gray-700" gap={0.7}>
      <FaRegHeart size={"1.8em"} />
      <Text>{faker.datatype.number()}</Text>
      <FaRegComment size={"1.8em"} />
      <Text>{faker.datatype.number()}</Text>
    </Row>
  );
}
