import { Flex } from "@chakra-ui/react";
import LogSignButtons from "./LogSignButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";

export default function NavMenu() {
  return (
    <>
      <AuthModal />
      <Flex justify={"center"} align={"center"}>
        <LogSignButtons />
      </Flex>
    </>
  );
}
