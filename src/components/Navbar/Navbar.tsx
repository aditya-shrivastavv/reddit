import { Flex, Image } from "@chakra-ui/react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div>
      <Flex bgColor={"white"} h={"44px"} p={"6px 12px"}>
        <Flex align={"center"}>
          <Image src="/images/redditFace.svg" alt="" h={"30px"} />
          <Image
            src="/images/redditText.svg"
            alt=""
            h={"46px"}
            display={{ base: "none", md: "unset" }}
          />
        </Flex>
        {/* <Directory /> */}
        <SearchBar />
        {/* <RightContent /> */}
      </Flex>
    </div>
  );
}
