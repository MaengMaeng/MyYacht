import React from "react";
import styled from "styled-components/native";

export default function ({ title, myScore, rivalScore }) {
  return (
    <>
      {title == "Total" ? (
        <Container>
          <TitleContainer>
            <TitleText>{title}</TitleText>
          </TitleContainer>
          <MyScore>
            <ScoreText>{myScore}</ScoreText>
          </MyScore>
          <RivalScore>
            <ScoreText>{rivalScore}</ScoreText>
          </RivalScore>
        </Container>
      ) : (
        // Bonus
        <Container>
          <TitleContainer>
            <TitleText>{title}</TitleText>
            <TitleText>+35</TitleText>
          </TitleContainer>

          <MyScore>
            <ScoreText> {myScore} </ScoreText>
            <ScoreText>/63</ScoreText>
          </MyScore>

          <RivalScore>
            <ScoreText>{rivalScore}</ScoreText>
            <ScoreText>/63</ScoreText>
          </RivalScore>
        </Container>
      )}
    </>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;
const TitleContainer = styled.View`
  flex: 2;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  background-color: black;
`;
const TitleText = styled.Text`
  font-weight: bold;
  color: white;
`;
const ScoreText = styled.Text`
  font-weight: bold;
`;
const MyScore = styled.View`
  flex: 1;
  border-width: 1px;
  background-color: #ffc000;
  align-items: center;
  justify-content: center;
`;
const RivalScore = styled.View`
  flex: 1;
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;
