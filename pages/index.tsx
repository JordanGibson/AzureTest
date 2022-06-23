import { Navbar } from "../components/Navbar";
import Feed from "../components/Feed";
import { GetServerSideProps } from "next";
import { PostWithMedia } from "../prisma/types";
import prisma from "../prisma/prisma";

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await prisma.post.findMany({
    select: {
      createdAt: false,
      media: {
        select: {
          createdAt: false,
          url: true,
        },
      },
      author: {
        select: {
          createdAt: false,
          name: true,
          avatar: {
            select: {
              createdAt: false,
              url: true,
            },
          },
        },
      },
    },
  });
  return { props: { posts } };
};

export default function Home({ posts }: { posts: PostWithMedia[] }) {
  return (
    <div>
      <Navbar />
      <Feed posts={posts} />
    </div>
  );
}
