import { useRouter } from "next/router";
import { FC } from "react";

const Id:FC = (props) => {
    const router = useRouter();
    const { id } = router.query;
  
    return <p>Post ID: {id}</p>;
};

export default Id;