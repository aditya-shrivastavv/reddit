import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "public" | "private" | "restricted";
  createdAt?: Timestamp;
  imageUrl?: string;
}

interface CommunityLink {
  communityId: string;
  isModerator?: boolean;
  imageURL?: string;
}

interface CommunityState {
  links: CommunityLink[];
  // visitedCommunities for caching.
}

export const communitiesStateAtom = atom<CommunityState>({
  key: "communitiesState",
  default: {
    links: [],
  },
});
