import React from "react";
import styled from "styled-components/native";
import { Pedigree, Total, Dice } from "../../components/Play";
import { leftPedigreeTitles, rightPedigreeTitles } from "./PedigreeTitle";
export default function ({
  isTurn,
  dices,
  holdDices,
  emitHoldDices,
  rollHandler,
  rollCount,
  myScore,
  submitHandler,
}) {
  return (
    <Container>
      <PedigreeContainer>
        <PedigreeList>
          {leftPedigreeTitles.map((title, index) => (
            <Pedigree key={index} title={title} myScore={myScore[title]} />
          ))}
          <TotalContainer>
            <Total title="Bonus" myScore="2" rivalScore="50" />
          </TotalContainer>
        </PedigreeList>

        <PedigreeList>
          {rightPedigreeTitles.map((title, index) => (
            <Pedigree key={index} title={title} myScore={myScore[title]} />
          ))}
          <TotalContainer>
            <Total title="Total" myScore="133" rivalScore="350" />
          </TotalContainer>
        </PedigreeList>
      </PedigreeContainer>
      <RollCountContainer>
        <RollCountText> {3 - rollCount} remains </RollCountText>
      </RollCountContainer>
      <DiceContainer>
        {dices.map((value, index) => (
          <Dice
            disabled={!isTurn || rollCount === 0}
            key={index}
            hold={holdDices[index]}
            value={value}
            onPress={() => emitHoldDices(index)}
          />
        ))}
      </DiceContainer>
      <ButtonContainer>
        <Button disabled={!isTurn || rollCount === 3} onPress={rollHandler}>
          <ButtonText>Roll</ButtonText>
        </Button>
        {rollCount !== 0 ? (
          <Button disabled={!isTurn} onPress={submitHandler}>
            <ButtonText>Submit</ButtonText>
          </Button>
        ) : (
          <></>
        )}
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const PedigreeContainer = styled.View`
  flex: 9;
  flex-direction: row;
  margin-vertical: 20px;
`;
const PedigreeList = styled.View`
  flex: 1;
  margin-horizontal: 10px;
`;
const TotalContainer = styled.View`
  flex: 1.5;
  margin-top: 10px;
`;
const DiceContainer = styled.View`
  flex: 2;
  flex-direction: row;
  margin-vertical: 20px;
  margin-horizontal: 10px;
  align-items: center;
  justify-content: center;
`;

const RollCountContainer = styled.View`
  flex: 0.5;
  margin-horizontal: 10px;
`;

const RollCountText = styled.Text`
  text-align: right;
`;

const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-vertical: 20px;
  margin-horizontal: 10px;
`;
// visibility: ${(props) => (props.isTurn ? "visible " : "hidden")};

const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 5px;
  margin-horizontal: 20px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: ${(props) => (props.disabled ? "#cccccc" : "#F9F9F9")};
`;

const ButtonText = styled.Text``;
// background-color: white;
