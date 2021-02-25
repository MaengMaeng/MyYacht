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
  "Aces" : '1 이 나온 주사위 눈의 총합입니다.',
  "Duces" : '2 가 나온 주사위 눈의 총합입니다.',
  "Threes" : '3 이 나온 주사위 눈의 총합입니다.',
  "Fours" : '4 가 나온 주사위 눈의 총합입니다.',
  "Fives" : '5 가 나온 주사위 눈의 총합입니다.',
  "Sixes" : '6 이 나온 주사위 눈의 총합입니다.',
  "Choice" : '주사위 눈 5개의 총합입니다.',
  "4 Of a Kind"  : '동일한 주사위 눈이 4개 이상일 때, 주사위 눈 5개의 총합입니다.',
  "Full House" : '동일한 주사위 눈이 각각 2개, 3개 있을 때, 주사위 눈 5개의 총합입니다.',
  "Small Straight" : '연속되는 주사위 눈이 4개 이상일 때, 15점을 얻습니다.',
  "Large Straight" : '연속되는 주사위 눈이 5개 일 때, 30점을 얻습니다.',
  "Yacht" : '모든 주사위 눈이 동일 할 때, 50점을 얻습니다.',
}

export { leftPedigreeTitles, rightPedigreeTitles, PedigreeInfos };
