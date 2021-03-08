import React from "react";
import styled from "styled-components/native";
import { Pedigree, Total, Dice } from "@components/Play";
import { leftPedigreeTitles, rightPedigreeTitles } from "@constants/pedigree";
import PedigreeInfo from "@components/Play/PedigreeInfo";

export default function ({
  game,
  // isTurn,
  // dices,
  // rollCount,
  myScore,
  rivalScore,
  holdDices,
  holdPedigreeTitle,
  holdPedigreeHandler,
  rollHandler,
  emitHoldDices,
  submitHandler,
  lVisible,
  rVisible,
  lPTitle,
  rPTitle,
  setProps,
}) {
  return (
    <Container>
      <PedigreeContainer>
        <PedigreeList>
          {leftPedigreeTitles.map((title, index) => (
            <Pedigree
              key={index}
              isTurn={game.isTurn}
              title={title}
              myScore={myScore[title]}
              rivalScore={rivalScore[title]}
              holdabled={game.isTurn && game.rollCount !== 0 && !myScore[title]}
              holdPedigreeHandler={holdPedigreeHandler}
              hold={title === holdPedigreeTitle}
              // dices={dices}
              rollCount={game.rollCount}
              onLongPress={() => setProps(false, true, title)}
              onPressOut={() => setProps(false, false, null)}
            />
          ))}
          <TotalContainer>
            <Total title="Bonus" myScore="2" rivalScore="50" />
          </TotalContainer>
          <PedigreeInfo
            {...{ visible: lVisible, title: lPTitle }}
          ></PedigreeInfo>
        </PedigreeList>

        <PedigreeList>
          {rightPedigreeTitles.map((title, index) => (
            <Pedigree
              key={index}
              isTurn={game.isTurn}
              title={title}
              myScore={myScore[title]}
              rivalScore={rivalScore[title]}
              holdabled={game.isTurn && game.rollCount !== 0 && !myScore[title]}
              holdPedigreeHandler={holdPedigreeHandler}
              hold={title === holdPedigreeTitle}
              rollCount={game.rollCount}
              // dices={dices}
              onLongPress={() => setProps(true, true, title)}
              onPressOut={() => setProps(true, false, null)}
            />
          ))}
          <TotalContainer>
            <Total title="Total" myScore="133" rivalScore="350" />
          </TotalContainer>

          <PedigreeInfo
            {...{ visible: rVisible, title: rPTitle }}
          ></PedigreeInfo>
        </PedigreeList>
      </PedigreeContainer>
      <TextContainer>
        <TurnText> {game.isTurn ? "내 차례" : "상대 차례"} </TurnText>
        <RollCountText> {3 - game.rollCount} remains </RollCountText>
      </TextContainer>
      <DiceContainer>
        {game.rollCount === 0 ? (
          <>
            <DiceText>
              {game.isTurn ? "주사위를 굴려주세요" : "상대 차례입니다"}
            </DiceText>
          </>
        ) : (
          <>
            {game.dices.map((value, index) => (
              <Dice
                disabled={!game.isTurn || game.rollCount === 0}
                key={index}
                hold={holdDices[index]}
                value={value}
                onPress={() => emitHoldDices(index)}
              />
            ))}
          </>
        )}
      </DiceContainer>
      <ButtonContainer>
        <Button
          disabled={!game.isTurn || game.rollCount === 3}
          onPress={rollHandler}
        >
          <ButtonText>Roll</ButtonText>
        </Button>
        {game.rollCount !== 0 ? (
          <Button
            disabled={!game.isTurn || holdPedigreeTitle === ""}
            onPress={submitHandler}
          >
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

const DiceText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const TextContainer = styled.View`
  flex-direction: row;
  flex: 0.5;
  justify-content: space-between;
  margin-horizontal: 10px;
`;

const TurnText = styled.Text``;

const RollCountText = styled.Text``;

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
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: ${(props) => (props.disabled ? "#cccccc" : "#F9F9F9")};
`;

const ButtonText = styled.Text``;
