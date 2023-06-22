import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Center,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import { FC } from "react";

import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { auth } from "@/firebase/firebaseInit";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import { truncate } from "fs";
import { communitiesStateAtom } from "@/atoms/communitiesAtom";

interface DropMenuProps {
  user?: User | null;
}

const DropMenu: FC<DropMenuProps> = ({ user }) => {
  const resetCommunityState = useResetRecoilState(communitiesStateAtom);
  const setAuthModalState = useSetRecoilState(authModalState);

  async function logout() {
    await signOut(auth);
    resetCommunityState();
  }

  return (
    <Menu>
      <MenuButton
        px={"6px"}
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Center>
          {user ? (
            <>
              <Icon
                as={FaRedditSquare}
                fontSize={24}
                mr={1}
                color={"gray.300"}
              />
              <Flex
                direction={"column"}
                display={{ base: "none", lg: "flex" }}
                fontSize={"8pt"}
                align={"flex-start"}
                mr={8}
              >
                <Text fontWeight={700}>
                  {user?.displayName || user.email?.split("@")[0]}
                </Text>
                <Flex>
                  <Icon as={IoSparkles} color={"brand.reddit"} mr={1} />
                  <Text color={"gray.400"}>1 karma</Text>
                </Flex>
              </Flex>
            </>
          ) : (
            <Icon as={VscAccount} fontSize={24} color={"gray.400"} mr={1} />
          )}
          <ChevronDownIcon />
        </Center>
      </MenuButton>
      <MenuList>
        {user ? (
          <>
            <MenuItem
              fontSize={"10pt"}
              fontWeight={700}
              _hover={{ color: "white", bgColor: "blue.500" }}
            >
              <Flex align={"center"}>
                <Icon as={CgProfile} fontSize={20} mr={2} />
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize={"10pt"}
              fontWeight={700}
              _hover={{ color: "white", bgColor: "blue.500" }}
              onClick={logout}
            >
              <Flex align={"center"}>
                <Icon as={MdOutlineLogin} fontSize={20} mr={2} />
                Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontSize={"10pt"}
              fontWeight={700}
              _hover={{ color: "white", bgColor: "blue.500" }}
              onClick={() => setAuthModalState({ open: true, window: "login" })}
            >
              <Flex align={"center"}>
                <Icon as={MdOutlineLogin} fontSize={20} mr={2} />
                Log In / Sign Up
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

export default DropMenu;
