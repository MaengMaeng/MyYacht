import React from "react";
import styled from "styled-components/native";
import {
  PRACTICE_ICON,
  AI_ICON,
  NORMAL_ICON,
  RANK_ICON,
} from "../../../assets/home";

export default function () {
  return (
    <ContainerView>
      <SectionView>
        <SectionText>SINGLE</SectionText>
        <PlayButton>
          <PlayButtonImage source={PRACTICE_ICON}></PlayButtonImage>
          <PlayButtonText>Practice</PlayButtonText>
        </PlayButton>
        <PlayButton>
          <PlayButtonImage source={AI_ICON}></PlayButtonImage>
          <PlayButtonText>AI</PlayButtonText>
        </PlayButton>
      </SectionView>
      <DividerView />
      <SectionView>
        <SectionText>MULTI</SectionText>
        <PlayButton>
          <PlayButtonImage source={NORMAL_ICON}></PlayButtonImage>

          <PlayButtonText>Normal</PlayButtonText>
        </PlayButton>
        <PlayButton>
          <PlayButtonImage source={RANK_ICON}></PlayButtonImage>

          <PlayButtonText>Rank</PlayButtonText>
        </PlayButton>
      </SectionView>
    </ContainerView>
  );
}

const ContainerView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: white;
`;

const SectionView = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DividerView = styled.View`
  height: 60%;
  margin: 20% 0 20% 0;
  border: 1px solid black;
`;

const SectionText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const PlayButton = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30vw;
  height: 30vw;
  margin: 5% 0 5% 0;

  border: 2px solid black;
  border-radius: 15%;
`;

const PlayButtonImage = styled.Image`
  height: 12vw;
  width: 12vw;
`;

const PlayButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
