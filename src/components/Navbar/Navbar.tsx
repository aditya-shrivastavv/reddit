import { Flex, Image } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu/NavMenu";
import CommunityDropMenu from "./CommunityDropMenu/CommunityDropMenu";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseInit";

export default function Navbar() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Flex
        bgColor={"white"}
        h={"44px"}
        p={"6px 12px"}
        justify={{ md: "space-between" }}
      >
        <Flex
          align={"center"}
          w={{ base: "40px", md: "auto" }}
          mr={{ base: 0, md: 2 }}
        >
          <Image src="/images/redditFace.svg" alt="" h={"30px"} />
          <Image
            src="/images/redditText.svg"
            alt=""
            h={"46px"}
            display={{ base: "none", md: "unset" }}
          />
        </Flex>
        {user && <CommunityDropMenu />}
        <SearchBar />
        <NavMenu />
      </Flex>
    </div>
  );
}
