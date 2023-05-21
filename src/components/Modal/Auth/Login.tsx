import { authModalState } from "@/atoms/authModalAtom";
import { FIREBASE_ERRORS } from "@/firebase/firebaseErrors";
import { auth } from "@/firebase/firebaseInit";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

export default function Login() {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    signInWithEmailAndPassword(formData.email, formData.password);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={handleChange}
        fontSize={"10pt"}
        bgColor={"gray.50"}
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bgColor: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bgColor: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        onChange={handleChange}
        fontSize={"10pt"}
        bgColor={"gray.50"}
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bgColor: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bgColor: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Text textAlign={"center"} fontSize={"10pt"} color={"red"}>
        {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>
      <Button type="submit" w={"100%"} h={"36px"} marginY={2}>
        Log In
      </Button>
      <Flex fontSize={"9pt"} justify={"center"} align={"center"}>
        <Text mr={2}>New here?</Text>
        <Button
          variant={"unstyled"}
          color={"blue.500"}
          fontWeight={700}
          h={"fit-content"}
          isLoading={loading}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              window: "signup",
            }))
          }
        >
          SIGN UP
        </Button>
      </Flex>
    </form>
  );
}
