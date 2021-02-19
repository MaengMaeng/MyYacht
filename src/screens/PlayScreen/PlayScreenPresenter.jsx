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
  myScore,
  submitHandler,
}) {
  return (
    <Container>
      <PedigreeContainer>
        <PedigreeList>
          {leftPedigreeTitles.map((title) => (
            <Pedigree title={title} myScore={myScore[title]} />
          ))}
          <TotalContainer>
            <Total title="Bonus" myScore="2" rivalScore="50" />
          </TotalContainer>
        </PedigreeList>

        <PedigreeList>
          {rightPedigreeTitles.map((title) => (
            <>
              {console.log(myScore[title])}
              <Pedigree title={title} myScore={myScore[title]} />
            </>
          ))}
          <TotalContainer>
            <Total title="Total" myScore="133" rivalScore="350" />
          </TotalContainer>
        </PedigreeList>
      </PedigreeContainer>
      <DiceContainer>
        {dices.map((value, index) => (
          <Dice
            key={index}
            hold={holdDices[index]}
            value={value}
            isTurn={isTurn}
            onPress={() => emitHoldDices(index)}
          />
        ))}
      </DiceContainer>
      <ButtonContainer>
        <Button disabled={!isTurn} onPress={rollHandler}>
          <ButtonText>Roll</ButtonText>
        </Button>
        <Button disabled={!isTurn} onPress={submitHandler}>
          <ButtonText>Submit</ButtonText>
        </Button>
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
const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-vertical: 20px;
  margin-horizontal: 10px;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 5px;
  margin-horizontal: 20px;
`;

const ButtonText = styled.Text``;
