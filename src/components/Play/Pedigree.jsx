import React from "react";
import styled from "styled-components/native";
import { getImage } from "../../utils/images";
import { calculate } from "../../utils/pedigreeCalculator";

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
  onLongPress,
  onPressOut,
}) {
  return (
    <Container>
      <DiceContainer onPressIn={onLongPress} onPressOut={onPressOut}>
        <ImageContainer>
          <Image source={getImage(null, title)} />
        </ImageContainer>
        <TextContainer>
          <Text>{title}</Text>
        </TextContainer>
      </DiceContainer>
      <ScoreContainer
        disabled={!holdabled}
        onPress={() => holdPedigreeHandler(null, title)}
        hold={hold && isTurn}
        yellow
      >
        {!myScore && rollCount !== 0 && isTurn ? (
          <ScoreText gray> {calculate(title, dices)} </ScoreText>
        ) : (
          <ScoreText> {myScore} </ScoreText>
        )}
      </ScoreContainer>
      <ScoreContainer disabled={true} hold={hold && !isTurn}>
        {!rivalScore && rollCount !== 0 && !isTurn ? (
          <ScoreText gray> {calculate(title, dices)} </ScoreText>
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

const DiceContainer = styled.TouchableOpacity`
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
  border-width: ${(props) => (props.hold ? "2px" : "0px")};
  background-color: ${(props) => (props.yellow ? "#ffc000" : "white")};
  justify-content: center;
  align-items: center;
`;

const ScoreText = styled.Text`
  color: ${(props) => (props.gray ? "gray" : "black")};
  font-size: 15px;
  font-weight: bold;
`;
