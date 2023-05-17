import { authModalState } from "@/atoms/authModalAtom";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import InputFields from "./InputFields";
import OAuthButtons from "./OAuthButtons";

export default function AuthModal() {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const closeModal = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

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
              <OAuthButtons />
              <Text color={"gray.400"} fontWeight={700}>
                OR
              </Text>
              <InputFields />
              {/* <ResetPass /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
