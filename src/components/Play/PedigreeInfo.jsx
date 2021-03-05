import React from "react";
import styled from "styled-components/native";
import { getImage } from "../../utils/images";

import {
  PedigreeInfos,
  PedigreeDiceExample,
  PedigreeExample,
} from "../../constants/pedigree";

const Example = (index, title) => {
  return (
    <ExamView>
      <ExamTitleView>
        <ExamTitleText>예시{index + 1})</ExamTitleText>
      </ExamTitleView>
      <ExamDiceText>{PedigreeDiceExample[title][index]}</ExamDiceText>
      <ExamText>{PedigreeExample[title][index]}</ExamText>
    </ExamView>
  );
};

export default function ({ visible, title }) {
  if (visible && title) {
    return (
      <Container>
        <TitleView>
          <ImageContainer>
            <Image source={getImage(null, title)} />
          </ImageContainer>
          <TextContainer>
            <Text>{title}</Text>
          </TextContainer>
        </TitleView>
        <InfoView>
          <InfoText>{PedigreeInfos[title]}</InfoText>
        </InfoView>
        {Example(0, title)}
        {Example(1, title)}
      </Container>
    );
  } else {
    return null;
  }
}

const Container = styled.View`
  position: absolute;

  width: 100%;
  height: 100%;

  border: 2px solid black;

  border-radius: 4px;
  background: #ffc000;
`;

const TitleView = styled.View`
  width: 100%;
  flex-direction: row;

  margin: 6px 0 6px 0;
  align-items: center;
  justify-content: center;
`;

const InfoView = styled.View`
  flex-grow: 1;
  width: 100%;

  align-items: center;
`;

const ExamView = styled.View`
  margin: 10px;

  align-items: center;
  justify-content: center;

  border: 1px solid black;
  border-radius: 10px;

  background: white;
`;
const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
`;
const Image = styled.Image`
  width: 28px;
  height: 28px;
`;
const TextContainer = styled.View`
  flex: 1;
  flex-grow: 1;
  margin: 10px 0 10px 0;
  justify-content: center;
`;
const Text = styled.Text`
  font-size: 18px;
`;

const InfoText = styled.Text`
  font-size: 14px;
  margin: 4px;
`;

const ExamTitleView = styled.View`
  justify-content: flex-start;

  align-items: flex-start;
`;

const ExamTitleText = styled.Text`
  font-size: 14px;
`;

const ExamDiceText = styled.Text`
  font-size: 30px;
  margin: 4px;
`;

const ExamText = styled.Text`
  font-size: 14px;
  margin: 4px;
`;
