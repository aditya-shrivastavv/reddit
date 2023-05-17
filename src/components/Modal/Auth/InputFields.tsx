import { authModalState } from "@/atoms/authModalAtom";
import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import Login from "./Login";
import SignUp from "./SignUp";

export default function InputFields() {
  const modalState = useRecoilValue(authModalState);

  return (
    <Flex>
      {modalState.window === "login" && <Login />}
      {modalState.window === "signup" && <SignUp />}
    </Flex>
  );
}
