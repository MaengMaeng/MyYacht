const leftPedigreeTitles = [
  "Aces",
  "Duces",
  "Threes",
  "Fours",
  "Fives",
  "Sixes",
];

const rightPedigreeTitles = [
  "Choice",
  "4 Of a Kind",
  "Full House",
  "Small Straight",
  "Large Straight",
  "Yacht",
];

const PedigreeInfos = {
  Aces: "1 이 나온 주사위 눈의 총합입니다.",
  Duces: "2 가 나온 주사위 눈의 총합입니다.",
  Threes: "3 이 나온 주사위 눈의 총합입니다.",
  Fours: "4 가 나온 주사위 눈의 총합입니다.",
  Fives: "5 가 나온 주사위 눈의 총합입니다.",
  Sixes: "6 이 나온 주사위 눈의 총합입니다.",
  Choice: "주사위 눈 5개의 총합입니다.",
  "4 Of a Kind":
    "동일한 주사위 눈이 4개 이상일 때, 주사위 눈 5개의 총합입니다.",
  "Full House":
    "동일한 주사위 눈이 각각 2개, 3개 있을 때, 주사위 눈 5개의 총합입니다.",
  "Small Straight": "연속되는 주사위 눈이 4개 이상일 때, 15점을 얻습니다.",
  "Large Straight": "연속되는 주사위 눈이 5개 일 때, 30점을 얻습니다.",
  Yacht: "모든 주사위 눈이 동일 할 때, 50점을 얻습니다.",
};

const PedigreeDiceExample = {
  Aces: ["⚀⚀⚀⚁⚅", "⚀⚀⚅⚁⚅"],
  Duces: ["⚁⚁⚀⚁⚅", "⚁⚁⚀⚀⚅"],
  Threes: ["⚂⚂⚂⚂⚀", "⚁⚅⚀⚀⚀"],
  Fours: ["⚃⚃⚂⚄⚅", "⚃⚃⚃⚃⚃"],
  Fives: ["⚁⚂⚃⚄⚄", "⚁⚄⚃⚄⚄"],
  Sixes: ["⚀⚁⚂⚃⚅", "⚅⚅⚅⚅⚅"],
  Choice: ["⚀⚁⚂⚃⚄", "⚀⚀⚀⚁⚅"],
  "4 Of a Kind": ["⚀⚀⚀⚀⚁", "⚅⚅⚅⚅⚄"],
  "Full House": ["⚁⚁⚂⚂⚂", "⚄⚄⚅⚅⚅"],
  "Small Straight": ["⚀⚁⚂⚃⚃", "⚁⚂⚃⚃⚄"],
  "Large Straight": ["⚀⚁⚂⚃⚄", "⚁⚂⚃⚄⚅"],
  Yacht: ["⚀⚀⚀⚀⚀", "⚂⚂⚂⚂⚂"],
};

const PedigreeExample = {
  Aces: ["= 3점", "= 2점"],
  Duces: ["= 6점", "= 8점"],
  Threes: ["= 3점", "= 0점"],
  Fours: ["= 8점", "= 20점"],
  Fives: ["= 10점", "= 15점"],
  Sixes: ["= 6점", "= 30점"],
  Choice: ["= 15점", "= 11점"],
  "4 Of a Kind": ["= 6점", "= 29점"],
  "Full House": ["= 15점", "= 28점"],
  "Small Straight": ["= 15점", "= 15점"],
  "Large Straight": ["= 30점", "= 40점"],
  Yacht: ["= 50점", "= 50점"],
};
export {
  leftPedigreeTitles,
  rightPedigreeTitles,
  PedigreeInfos,
  PedigreeDiceExample,
  PedigreeExample,
};
