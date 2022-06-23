import { Button, Text, Checkbox, Input, Modal, Row } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { FaMailBulk, FaLock } from "react-icons/fa";
import { PostModal } from "./Post/PostModal";

export const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  return (
    <>
      <nav className='flex items-center flex-wrap bg-blue-700 p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              AzureGram
            </span>
          </a>
        </Link>
        <Button onClick={handler} className="bg-red-700">Upload</Button>
        <PostModal visible={visible} setVisible={setVisible} />
      </nav>
    </>
  );
};
