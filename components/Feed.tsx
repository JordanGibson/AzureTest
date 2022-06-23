import { Grid } from "@nextui-org/react";
import { PostWithMedia } from "../prisma/types";
import Post from "./Post/Post";

export default function Feed({ posts }: { posts?: PostWithMedia[] }) {
  return (
    <>
      <Grid.Container gap={2} justify="center">
        {posts
          ? posts.slice(0, 31).map((post, i) => (
            <Grid xs={4} key={i}>
              <Post post={post} />
            </Grid>
          ))
          : "Loading..."}
      </Grid.Container>
    </>
  );
}
