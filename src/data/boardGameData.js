const boardGames = [
  {
    name: "Blood Rage",
    url: "https://www.cmon.com/products/blood-rage/",
    notes: [
      "Mystics of Midgard expansion is worth it. The Kickstarter Exclusive expansion is expensive and in limited supply, but I personally think it's worth it if you enjoy the game.",
      "A digital version is available on Board Game Arena. There is also a official digital version on steam which has a low player count.",

    ],
    youtube: ["https://youtu.be/EkvmTFUGiyQ?si=lFsU9ZMBV-XDj1FV"],
    ratings: [5.0, 4.0, 4.0, 3.5, 4.0, 3.5, 5.0]
  },
  {
    name: "Root",
    url: "https://ledergames.com/products/root-a-game-of-woodland-might-and-right",
    notes: [
      "One of the best asymmetric board games on the market.",
      "Very steep learning curve. Difficult for new players to learn.",
      "I would recommend every expansion with the exception of the Clockwork expansion.",
      "A digital version is available on IOS, Android, and Steam which I highly recommend when learning the game.",

    ],
    youtube: ["https://youtu.be/U9zFqRQ11qI?si=DZAcEuz_2SqytU1d"],
    ratings: [5.0, 5.0, 2.0, 3.0, 4.0, 3.5, 5.0]
  },
  {
    name: "Overboss",
    url: "https://www.brotherwisegames.com/overboss",
    notes: [
      "Winning requires some degree of luck.",
      "Strategizing does improve your chances of winning.",
      "Tallying final score is time consuming and could be difficult for some players.",

    ],
    youtube: ["https://www.youtube.com/watch?v=k3aLaVfnfxw"],
    ratings: [5.0, 3.5, 4.5, 3.0, 3.5, 4.5, 2.5]
  },
  {
    name: "Air, Land, & Sea",
    url: "https://www.arcanewonders.com/product/air-land-sea/",
    notes: [
      "Amazing portable card game! My go-to road trip or pub game.",
      "2 players only",
      "Both games share the same core mechanics and can be mixed together.",
      "Check out the Critters at War  versions before you buy. It's a cute cartoon version of the game with identical rules.",

    ],
    youtube: ["https://youtu.be/OrnKNBuH_Z8?si=n2odlnfR58dVQSaU"],
    ratings: [4.5, 3.7, 4.5, 5.0, 2.0, 5.0, 3.0]
  },
  {
    name: "Boss Monster",
    url: "https://www.brotherwisegames.com/boss-monster",
    notes: [
      "My Nieces and Nephews' all-time favorite board game.",
      "All of the expansions are worth it, but may not be used in every game.",
      "Slightly difficult to learn/execute the turn order.",

    ],
    youtube: ["https://youtu.be/d9FR-Z3ExWs?si=pg4FvhVyMGZO-JaK"],
    ratings: [3.6, 3.5, 3.5, 3.7, 4.2, 4.5, 5.0]
  },
  {
    name: "Here to Slay",
    url: "",
    notes: [
      "My Nieces and Nephews' 2nd favorite board game.",
      "You can create your own custom Party Leader on the website",

    ],
    youtube: ["https://youtu.be/38DkmTankr8?si=tpouKqvwr23XX3IR"],
    ratings: [3.0, 2.5, 3.8, 4.0, 3.0, 3.5, 3.0]
  },
  {
    name: "Star Realms",
    url: "https://www.starrealms.com/",
    notes: [
      "Both games share the core mechanics, but have different themes.",
      "In my view, the digital version of this game, available on both iOS and Android, offers a superior gameplay experience.",
      "Star Realms YouTube Overview",
      "Hero Realms YouTube Overview"
    ],
    youtube: ["https://youtu.be/_KUO7jRICX0?si=Zb79ZStOM6JMgzdF", "https://youtu.be/aDdmA_zLeBY?si=BGJfYM2ETnAGiOZ2"],
    ratings: [3.0, 2.5, 3.8, 3.8, 3.0, 3.0, 2.7]
  },
  {
    name: "Minecraft Builders & Biomes",
    url: "https://www.ravensburger.us/discover/games/minecraft/index.html",
    notes: [
      "Piece heavy, with a long setup time",
      "Farmer's Market Expansion is worth it, but increases the amount of pieces and setup time",

    ],
    youtube: ["https://youtu.be/OnblaPBorjY?si=sjo8w3RzdLEALqXO"],
    ratings: [3.7, 4.2, 3.8, 3.0, 3.0, 4.0, 5.0]
  },
  {
    name: "Dumb Ways to Die",
    url: "https://dwtd.spinmaster.com/",
    notes: [

    ],
    youtube: ["https://youtu.be/S_SLdDcr30Q?si=JPb5artoeMi9bGYM"],
    ratings: [2.0, 1.7, 3.6, 4.0, 0.1, 4.0, 2.0]
  },
  {
    name: "Doomlings",
    url: "https://doomlings.com/",
    notes: [
      "Tallying final score is time consuming and could be difficult for some players.",

    ],
    youtube: [],
    ratings: [3.2, 3.0, 3.9, 4.1, 2.2, 4.0, 2.0]
  },
  {
    name: "Unstable Unicorns",
    url: "https://www.unstablegames.com/products/unstable-unicorns?variant=19577791466279",
    notes: [

    ],
    youtube: ["https://youtu.be/vt3D41UiGlI?si=CH3hAvtXBURpRzVc"],
    ratings: [2.5, 2.0, 3.0, 4.0, 2.5, 3.5, 2.0]
  },
  {
    name: "One Night Ultimate Werewolf",
    url: "https://beziergames.com/products/one-night-ultimate-werewolf",
    notes: [
      "Great social deduction game. Similar to the party game and psychology experiment Mafia",
      "I've played the Alien, Daybreak, and Vampire variants. They all are very similar.",
      "Requires at least 4 players.",

    ],
    youtube: ["https://youtu.be/XsP6LvZQpLk?si=txkK2mN37srKux5F"],
    ratings: [2.7, 4.0, 4.0, 4.0, 2.0, 1.5, 2.0]
  },
  {
    name: "Battle of the Bards",
    url: "https://impsandmonsters.com/shop/merch/games/battle-of-the-bards/",
    notes: [
      "Doesn't have expansions, but doesn't necessarily need it.",

    ],
    youtube: ["https://youtu.be/YTLKqOQTcY4?si=F4UPGrNZIi6uEf8b"],
    ratings: [3.5, 3.5, 3.2, 3.0, 2.0, 1.5, 2.0]
  },
  {
    name: "Kabuto Sumo",
    url: "https://www.allplay.com/board-games/kabuto-sumo/",
    notes: [
      "Very little strategizing or planning required.",
      "The most \"physical\" board game I own :D",

    ],
    youtube: ["https://youtu.be/eLRy3HHg8vE?si=bG_PKoRBt70arjla"],
    ratings: [2.3, 2.5, 5.0, 4.2, 3.0, 2.0, 3.0]
  },
  {
    name: "Hive",
    url: "https://www.gen42.com/games/hive",
    notes: [
      "My second favorite road trip game.",
      "I would suggest getting the pocket version, as it is more portable and includes the expansions.",
      "I don't know what the advantage of buying the regular version would be.",

    ],
    youtube: ["https://youtu.be/szmcsO9ZCpo?si=bTJ3mtIzB1U1TPb9"],
    ratings: [3.8, 3.8, 4.5, 4.5, 3.0, 3.5, 3.0]
  },
  {
    name: "Happy Little Dinosaurs",
    url: "https://www.unstablegames.com/products/happy-little-dinosaurs-base-game?variant=19577791500278",
    notes: [
      "I haven't played the expansions, but the base game wasn't attractive enough for me to want to buy more of this game.",

    ],
    youtube: ["https://youtu.be/fYzXBvblWtg?si=b6JOYMtRKEu_8aCP"],
    ratings: [2.3, 2.4, 3.4, 4.0, 3.0, 2.5, 2.0]
  },
  {
    name: "Unearth",
    url: "https://www.brotherwisegames.com/unearth",
    notes: [

    ],
    youtube: ["https://youtu.be/J5dGEmh3aaY?si=xwrewJVeqYzVqytI"],
    ratings: [3.3, 4.0, 4.0, 3.3, 1.0, 3.8, 3.0]
  },
  {
    name: "Summoner Wars",
    url: "https://www.plaidhatgames.com/board-games/summoner-wars/",
    notes: [
      "2 player duel deck builder",
      "I haven't played all the available classes/expansions, but I want to!",
      "There is a digital version. I am unaware if it maintains a player base.",
      "I personally enjoyed the physical version over the digital version.",

    ],
    youtube: ["https://youtu.be/_9wYcvNnLPQ?si=XaJQfGA39FDZd5ld"],
    ratings: [3.6, 3.7, 4.0, 3.2, 3.9, 3.8, 4.0]
  },
  {
    name: "Tigris & Euphrates",
    url: "https://boardgamegeek.com/boardgame/42/tigris-euphrates",
    notes: [
      "I've only played the digital version on BGA",
      "The physical game (or expansions) is currently not in print. There are rumors of a reprint in the near future.",
      "My affordabiity score many rise when the reprint occurs.",
      "I personally don't think the game needs additional expansions.",

    ],
    youtube: ["https://youtu.be/p2c7y-AbdOc?si=ZL3EmoVHS3kSICcI"],
    ratings: [4.4, 4.3, 3.2, 3.2, 4.0, 2.0, 2.0]
  },
  {
    name: "Tsuro",
    url: "https://boardgamegeek.com/boardgame/16992/tsuro",
    notes: [
      "Simple to learn yet rich in replay value, this game captivates players from the very first round."
    ],
    youtube: [],
    ratings: [3.0, 3.0, 4.0, 4.0, 3.5, 3.0, 3.0]
  },
  {
    name: "Command of Nature",
    url: "https://boardgamegeek.com/boardgame/390422/command-of-nature",
    notes: [
      "A deckbuilder that holds its own among the top games in the genre.",
      "While games with four players can feel busy. Having all experienced players would be great."
    ],
    youtube: [],
    ratings: [4.2, 3.8, 4.0, 3.8, 3.0, 3.0, 3.0]
  },
  {
    name: "Hideous Abominations",
    url: "https://tettixgames.com/products/hideous-abomination-2nd-edition",
    notes: [
      "Tile-laying game for 2-6 people",
      "Games can be shorter than expected",
      "Scoring can be tedious",
      "Quick and easy"
    ],
    youtube: [],
    ratings: [3.0, 2.8, 4.0, 4.0, 2.5, 4.5, 3.8]
  },
  {
    name: "Matcha",
    url: "https://boardgamegeek.com/boardgame/166107/matcha",
    notes: [
      "A light card game for two players that lasts 15-20 minutes",
      "Can be solved/counted?",
      "Limited strategies",
    ],
    youtube: [],
    ratings: [2.7, 2.8, 4.0, 4.5, 2.5, 4.5, 2.0]
  },
  {
    name: "The Fox in the Forest",
    url: "https://boardgamegeek.com/boardgame/221965/the-fox-in-the-forest",
    notes: [
      "Lightweight and quick",
      "Trick-Taking, Hand Management",
      "Pick up and play",
    ],
    youtube: [],
    ratings: [2.7, 2.8, 4.0, 4.5, 2.5, 4.5, 3.5]
  },
  {
    name: "Nova Luna",
    url: "https://pegasusna.com/products/board-games/16564/nova-luna",
    notes: [
      "Abstract Strategy, Pattern Building, Spatial Puzzle",
      "Replayability is great",
      "Easy to learn and inviting",
    ],
    youtube: [],
    ratings: [3.6, 3.3, 3.8, 3.2, 2.5, 3.3, 3.0]
  },
    {
    name: "Forbidden Island",
    url: "https://boardgamegeek.com/boardgame/65244/forbidden-island",
    notes: [
      "Cooperative!",
      "Forbidden Desert, Jungle & Sky are very similar",
      "Great for all ages",
    ],
    youtube: [],
    ratings: [2.7, 2.5, 2.5, 3.2, 2.5, 3.4, 2.5]
  },
];

// Auto-calculate score
boardGames.forEach(game => {
  const avg = game.ratings.slice(0, 6).reduce((sum, val) => sum + val, 0) / 6;
  game.score = Number(avg.toFixed(1));
});

export { boardGames };