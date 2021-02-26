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
import * as pc from "../../PedigreeCalculator";

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

export default function ({
  title,
  myScore,
  rivalScore,
  isTurn,
  holdabled,
  holdPedigreeHandler,
  hold,
  dices,
  rollCount,
}) {
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
      <ScoreContainer
        disabled={!holdabled}
        onPress={() => holdPedigreeHandler(title)}
        hold={hold && isTurn}
        yellow
      >
        {!myScore && rollCount !== 0 && isTurn ? (
          <>
            {console.log(rollCount)}
            <ScoreText gray> {pc.calculate(title, dices)} </ScoreText>
          </>
        ) : (
          <ScoreText> {myScore} </ScoreText>
        )}
      </ScoreContainer>
      <ScoreContainer disabled={true} hold={hold && !isTurn}>
        {!rivalScore && rollCount !== 0 && !isTurn ? (
          <ScoreText gray> {pc.calculate(title, dices)} </ScoreText>
        ) : (
          <ScoreText> {rivalScore} </ScoreText>
        )}
      </ScoreContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  margin-vertical: 1px;
  border-width: 1px;
`;
const DiceContainer = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: flex-start;
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
const ScoreContainer = styled.TouchableOpacity`
  flex: 1;
  border-width: ${(props) => (props.hold ? "2px" : "")};
  background-color: ${(props) => (props.yellow ? "#ffc000" : "")};
  justify-content: center;
  align-items: center;
`;

const ScoreText = styled.Text`
  color: ${(props) => (props.gray ? "gray" : "")};
  font-size: 15px;
  font-weight: bold;
`;
