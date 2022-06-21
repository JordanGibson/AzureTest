import { faker } from "@faker-js/faker";
import { Avatar, Card, Grid } from "@nextui-org/react";
import Post from "./Post/Post";

export default function Feed() {
  return (
    <>
      <Grid.Container gap={2} justify="center">
        {Array.from({ length: 30 }).map((_, i) => (
          <Grid xs={4} key={i}>
            <Post />
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}
