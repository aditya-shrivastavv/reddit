import {
  Community,
  communitiesStateAtom,
  CommunityLink as TypeCommunityLink,
} from "@/atoms/communitiesAtom";
import { auth, firestore } from "@/firebase/firebaseInit";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

const useCommunityData = () => {
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communitiesStateAtom);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user] = useAuthState(auth);

  function onJoinOrLeaveCommunity(communityData: Community, isJoined: boolean) {
    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData);
  }
  function joinCommunity(communityData: Community) {}
  function leaveCommunity(communityId: string) {}

  async function getCommunityLinks() {
    setLoading(true);
    try {
      const communityLinkDocs = await getDocs(
        collection(firestore, `users/${user?.uid}/communityLink`)
      );
      const communityLinks = communityLinkDocs.docs.map((doc) => ({
        ...doc.data(),
      }));
      setCommunityStateValue((prev) => ({
        ...prev,
        links: communityLinks as TypeCommunityLink[],
      }));
      console.log(communityLinks);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (!user) return;
    getCommunityLinks();
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    communityStateValue,
    onJoinOrLeaveCommunity,
    loading,
  };
};

export default useCommunityData;
