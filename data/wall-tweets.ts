export interface WallTweet {
  id: string;
  author: string;
  handle: string;
  text: string;
  highlight?: boolean;
}

export const WALL_TWEETS: WallTweet[] = [
  {
    id: "placeholder_1",
    author: "Suffer Holder",
    handle: "@sufferonsolana",
    text: "Through suffering, strength. Diamond hands forged in fire. $SUFFER",
    highlight: true,
  },
  {
    id: "placeholder_2",
    author: "Ronin",
    handle: "@ronin_sol",
    text: "The boulder rolls back. We push again. $SUFFER",
  },
  {
    id: "placeholder_3",
    author: "Bushido Capital",
    handle: "@bushido_cap",
    text: "Not selling. Not today, not tomorrow. The path is walked, not abandoned. $SUFFER",
  },
  {
    id: "placeholder_4",
    author: "Samurai Degen",
    handle: "@samurai_degen",
    text: "Red candles are just the fire that forges us. $SUFFER",
  },
  {
    id: "placeholder_5",
    author: "Musashi Fan",
    handle: "@musashi_fan",
    text: "All truly strong people are kind. This community proves it. $SUFFER",
    highlight: true,
  },
  {
    id: "placeholder_6",
    author: "SOL Warrior",
    handle: "@sol_warrior",
    text: "Day 47 of holding through the storm. The samurai does not flinch. $SUFFER",
  },
  {
    id: "placeholder_7",
    author: "Stoic Trader",
    handle: "@stoic_trader",
    text: "We suffer more in imagination than in reality. Bought more. $SUFFER",
  },
  {
    id: "placeholder_8",
    author: "Path Walker",
    handle: "@path_walker",
    text: "No one walks this path alone. See you at the top. $SUFFER",
  },
  {
    id: "placeholder_9",
    author: "Diamond Ronin",
    handle: "@diamond_ronin",
    text: "The market rewards those who wait. I have nothing but time. $SUFFER",
  },
];
