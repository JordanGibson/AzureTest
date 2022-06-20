import { Avatar, Grid } from "@nextui-org/react";
import Head from "next/head";
import { faker } from "@faker-js/faker";
import { Navbar } from "../components/Navbar";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Feed />
    </div>
  );
}
