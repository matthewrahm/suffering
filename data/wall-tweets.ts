export interface WallTweet {
  id: string;
  author: string;
  handle: string;
  text: string;
  highlight?: boolean;
}

export const WALL_TWEETS: WallTweet[] = [];
