import { authModalState } from "@/atoms/authModalAtom";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

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
          <ModalHeader>
            {modalState.window === "login" && "Log In"}
            {modalState.window === "signup" && "Sign Up"}
            {modalState.window === "resetpass" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>body</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
