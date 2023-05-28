import { auth, firestore } from "@/firebase/firebaseInit";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function OAuthButtons() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, "users", user?.uid);
    const userSynthesized = JSON.parse(JSON.stringify(user));
    await setDoc(userDocRef, userSynthesized);
  };

  return (
    <Flex direction={"column"} w={"100%"} mb={4}>
      <Button
        variant={"oauth"}
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/googlelogo.png" h={"20px"} mr={4} alt="" />
        Continue with Google
      </Button>
      <Button variant={"oauth"} mb={2}>
        Some other Provider
      </Button>
      {error && <Text>{error?.message}</Text>}
    </Flex>
  );
}
