import CreateCommunityModal from "@/components/Modal/CreateCommunity/CreateCommunityModal";
import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import { FC, useState } from "react";
import { GrAdd } from "react-icons/gr";

const CommunitesList: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        w={"100%"}
        fontSize={"10pt"}
        onClick={() => setOpen(true)}
        _hover={{ bg: "gray.100" }}
      >
        <Flex align={"center"}>
          <Icon as={GrAdd} fontSize={20} mr={2} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};

export default CommunitesList;
