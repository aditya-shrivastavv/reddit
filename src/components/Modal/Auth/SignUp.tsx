import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseInit";
import { FIREBASE_ERRORS } from "@/firebase/firebaseErrors";

export default function Login() {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [err, setErr] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    setErr("");
    evt.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErr("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(formData.email, formData.password);
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
      <Input
        required
        name="confirmPassword"
        placeholder="confirm password"
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
      <Text textAlign={"center"} color={"red"} fontSize={"10pt"}>
        {err || FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>
      <Button
        type="submit"
        w={"100%"}
        h={"36px"}
        marginY={2}
        isLoading={loading}
      >
        Sign Up
      </Button>
      <Flex fontSize={"9pt"} justify={"center"} align={"center"}>
        <Text mr={2}>Already a redditor?</Text>
        <Button
          variant={"unstyled"}
          color={"blue.500"}
          fontWeight={700}
          h={"fit-content"}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              window: "login",
            }))
          }
        >
          LOG IN
        </Button>
      </Flex>
    </form>
  );
}
