import { authModalState } from "@/atoms/authModalAtom";
import {
  Community,
  communitiesStateAtom,
  CommunityLink as TypeCommunityLink,
  CommunityLink,
} from "@/atoms/communitiesAtom";
import { auth, firestore } from "@/firebase/firebaseInit";
import {
  collection,
  doc,
  getDocs,
  increment,
  writeBatch,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useSetRecoilState } from "recoil";

const useCommunityData = () => {
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communitiesStateAtom);
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user] = useAuthState(auth);

  function onJoinOrLeaveCommunity(communityData: Community, isJoined: boolean) {
    if (!user) {
      // open modal
      setAuthModalState({ open: true, window: "login" });
    }

    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData);
  }

  async function joinCommunity(communityData: Community) {
    try {
      const batch = writeBatch(firestore);

      // creating a new community link
      const newLink: CommunityLink = {
        communityId: communityData.id,
        imageURL: communityData.imageUrl || "",
      };

      batch.set(doc(firestore, `users/${user?.uid}/communityLink`), newLink);

      // increasing the community member count (1)
      batch.update(doc(firestore, "communities", communityData.id), {
        numberOfMembers: increment(1),
      });

      await batch.commit();

      // update recoil state
      setCommunityStateValue((prev) => ({
        ...prev,
        links: [...prev.links, newLink],
      }));
    } catch (error: any) {
      console.log("joinCommunity error: ", error);
      setError(error.message);
    }
    setLoading(false);
  }
  async function leaveCommunity(communityId: string) {
    // delete the community link for the user
    // increasing the community member count (-1)
    // update recoil state
  }

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
    } catch (error: any) {
      console.log(error);
      setError(error.message);
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
