import { authModalState } from "@/atoms/authModalAtom";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import InputFields from "./InputFields";
import OAuthButtons from "./OAuthButtons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseInit";
import { useEffect } from "react";
import ResetPass from "./ResetPass";

export default function AuthModal() {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const [user, loading, error] = useAuthState(auth);

  const closeModal = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  useEffect(() => {
    if (user) closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <Modal isOpen={modalState.open} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            {modalState.window === "login" && "Log In"}
            {modalState.window === "signup" && "Sign Up"}
            {modalState.window === "resetpass" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            pb={6}
          >
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              w={"70%"}
            >
              {modalState.window === "login" ||
              modalState.window === "signup" ? (
                <>
                  <OAuthButtons />
                  <Text color={"gray.400"} fontWeight={700}>
                    OR
                  </Text>
                  <InputFields />
                </>
              ) : (
                <ResetPass />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
