import { Community } from "@/atoms/communitiesAtom";
import useCommunityData from "@/hooks/useCommunityData";
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaReddit } from "react-icons/fa";

type Props = {
  communityData: Community;
};

const Header = ({ communityData }: Props) => {
  const { communityStateValue, onJoinOrLeaveCommunity, loading } =
    useCommunityData();
  const isJoined = !!communityStateValue.links.find(
    (item) => item.communityId === communityData.id
  );

  return (
    <Flex direction={"column"} w={"100%"} h={"146px"}>
      <Box h={"50%"} bgColor={"blue.400"} />
      <Flex justify={"center"} bgColor={"white"} flexGrow={1}>
        <Flex w={"95%"} maxW={"860px"}>
          {communityData.imageUrl ? (
            <Image alt="" />
          ) : (
            <Icon
              as={FaReddit}
              fontSize={64}
              position={"relative"}
              top={-3}
              color={"blue.500"}
              border={"4px solid white"}
              borderRadius={"full"}
            />
          )}
          <Flex p={"10px 16px"}>
            <Flex direction={"column"} mr={6}>
              <Text fontWeight={800} fontSize={"16pt"}>
                {communityData.id}
              </Text>
              <Text fontWeight={600} fontSize={"10pt"} color={"gray.400"}>
                r/{communityData.id}
              </Text>
            </Flex>
            <Button
              variant={isJoined ? "outline" : "solid"}
              h={"30px"}
              px={6}
              isLoading={loading}
              onClick={() => onJoinOrLeaveCommunity(communityData, isJoined)}
            >
              {isJoined ? "Joined" : "Join"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
