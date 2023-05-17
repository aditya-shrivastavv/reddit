import { Button } from "@chakra-ui/react";

export default function LogSignButtons() {
  return (
    <>
      <Button
        variant={"outline"}
        h={"28px"}
        display={{ base: "none", sm: "flex" }}
        w={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => console.log("Log In")}
      >
        Log In
      </Button>
      <Button
        h={"28px"}
        display={{ base: "none", sm: "flex" }}
        w={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => console.log("Sign Up")}
      >
        Sign Up
      </Button>
    </>
  );
}
