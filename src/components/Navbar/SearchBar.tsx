import { auth } from "@/firebase/firebaseInit";
import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function SearchBar() {
  const [user] = useAuthState(auth);

  return (
    <Flex flexGrow={1} mr={2} align={"center"} maxW={user ? "auto" : "600px"}>
      <InputGroup>
        <InputLeftElement pointerEvents={"none"}>
          <SearchIcon color={"gray.400"} mb={1} />
        </InputLeftElement>
        <Input
          placeholder="Search Reddit"
          fontSize={"10pt"}
          h={"34px"}
          bgColor={"gray.50"}
          _hover={{
            bgColor: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
        />
      </InputGroup>
    </Flex>
  );
}
