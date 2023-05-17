import { authModalState } from "@/atoms/authModalAtom";
import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

export default function LogSignButtons() {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <>
      <Button
        variant={"outline"}
        h={"28px"}
        display={{ base: "none", sm: "flex" }}
        w={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, window: "login" })}
      >
        Log In
      </Button>
      <Button
        h={"28px"}
        display={{ base: "none", sm: "flex" }}
        w={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, window: "signup" })}
      >
        Sign Up
      </Button>
    </>
  );
}
