import React, { FC, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Image,
} from "@chakra-ui/react";
import { TiHome } from "react-icons/ti";

const CommunityDropMenu: FC = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  // const { directoryState, toggleMenuOpen } = useDirectory();

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        p={"0px 6px"}
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex
          align="center"
          justify="space-between"
          w={{ base: "auto", lg: "200px" }}
        >
          <Flex align="center">
            <Icon as={TiHome} fontSize={24} mr={{ base: 1, md: 2 }} />
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={600} fontSize={"10pt"}>
                Home
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList maxHeight="300px" overflow="scroll" overflowX="hidden">
        {/* CommunitesList */}
        Communities List
      </MenuList>
    </Menu>
  );
};
export default CommunityDropMenu;
