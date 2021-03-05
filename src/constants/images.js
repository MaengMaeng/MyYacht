import {
  diamond,
  clover,
  home,
  stairs,
  stairsbox,
  pentagon,
  dice1,
  dice2,
  dice3,
  dice4,
  dice5,
  dice6,
} from "../../assets/play";

const IMAGES = {
  image1: dice1,
  image2: dice2,
  image3: dice3,
  image4: dice4,
  image5: dice5,
  image6: dice6,

  Aces: dice1,
  Duces: dice2,
  Threes: dice3,
  Fours: dice4,
  Fives: dice5,
  Sixes: dice6,

  Choice: diamond,
  "4 Of a Kind": clover,
  "Full House": home,
  "Small Straight": stairs,
  "Large Straight": stairsbox,
  Yacht: pentagon,
};

export { IMAGES };
