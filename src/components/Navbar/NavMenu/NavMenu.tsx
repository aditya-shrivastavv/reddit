import { Button, Flex } from "@chakra-ui/react";
import LogSignButtons from "./LogSignButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseInit";
import { signOut } from "firebase/auth";
import Icons from "./Icons";

export default function NavMenu() {
  const [user] = useAuthState(auth);

  return (
    <>
      <AuthModal />
      <Flex justify={"center"} align={"center"}>
        {user ? <Icons /> : <LogSignButtons />}
        {/* <DropMenu /> */}
      </Flex>
    </>
  );
}
