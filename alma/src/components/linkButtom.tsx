import { Button } from "@chakra-ui/react";
import Link from "next/link";

export const LinkButton = (props: any) => {
  const { link } = props;
  return (
    <>
      <Link href={link === "main" ? "/" : link}>
        <Button
          bg={"#000"}
          color={"#fff"}
          fontFamily={"bungee, sans-serif"}
          fontWeight={"400"}
          w={"200px"}
          h={"70px"}
          m={"0 2px"}
          fontSize={"30px"}
          _hover={{
            color: "#000",
            bg: "#fff",
          }}
        >
          {link}
        </Button>
      </Link>
    </>
  );
};
