import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const CommunityNotFound = () => {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      minHeight={"60vh"}
    >
      Sorry, that Community does not exist or may have been banned.
      <Link href={"/"}>
        <Button mt={4}>GO HOME</Button>
      </Link>
    </Flex>
  );
};

export default CommunityNotFound;
