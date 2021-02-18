import React from "react";
import styled from "styled-components/native";

export default function ({ title, image, myScore, rivalScore }) {
  return (
    <Container>
      <DiceContainer>
        <ImageContainer>
          <Image source={image} />
        </ImageContainer>
        <TextContainer>
          <Text>{title}</Text>
        </TextContainer>
      </DiceContainer>
      <MyScore>{myScore}</MyScore>
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
`;
const RivalScore = styled.View`
  flex: 1;
  border-width: 1px;
`;
