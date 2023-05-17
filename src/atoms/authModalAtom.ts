import { atom } from "recoil";

export interface AuthModalStateProps {
  open: boolean;
  window: "login" | "signup" | "resetpass";
}

const defaultModalState: AuthModalStateProps = {
  open: false,
  window: "login",
};

export const authModalState = atom<AuthModalStateProps>({
  key: "authModalState",
  default: defaultModalState,
});
