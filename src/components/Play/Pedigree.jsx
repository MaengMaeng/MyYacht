import React from "react";
import styled from "styled-components/native";

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
} from "../../../assets/play";

const IMAGES = {
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

const getImage = (title) => {
  return IMAGES[title];
};

export default function ({ title, myScore, rivalScore }) {
  return (
    <Container>
      <DiceContainer>
        <ImageContainer>
          <Image source={getImage(title)} />
        </ImageContainer>
        <TextContainer>
          <Text>{title}</Text>
        </TextContainer>
      </DiceContainer>
      <MyScore>
        <MyScoreText>{myScore}</MyScoreText>
      </MyScore>
      <RivalScore>{rivalScore}</RivalScore>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  margin-vertical: 1px;
`;
const DiceContainer = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: flex-start;
  border-width: 1px;
`;
const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
`;
const Image = styled.Image`
  width: 20px;
  height: 20px;
`;
const TextContainer = styled.View`
  flex: 1;
  flex-grow: 1;
  justify-content: center;
`;
const Text = styled.Text`
  font-size: 13px;
`;
const MyScore = styled.View`
  flex: 1;
  border-width: 1px;
  background-color: #ffc000;
  justify-content: center;
  align-items: center;
`;

const MyScoreText = styled.Text`
  color: gray;

  font-size: 15px;
  font-weight: bold;
`;

const RivalScore = styled.View`
  flex: 1;
  border-width: 1px;
`;
