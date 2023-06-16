import { Community } from "@/atoms/communitiesAtom";
import Header from "@/components/Community/Header";
import CommunityNotFound from "@/components/Community/NotFound";
import { firestore } from "@/firebase/firebaseInit";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";
import safeJsonStringify from "safe-json-stringify";

type Props = {
  communityData: Community;
};

const CommunityPage = ({ communityData }: Props) => {
  if (!communityData) {
    return <CommunityNotFound />;
  }
  return (
    <>
      <Header communityData={communityData} />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Get Community data and pass it to the client.
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);
    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    console.log("====================================");
    console.log("Error getting community data: ", error);
    console.log("====================================");
  }
}

export default CommunityPage;
