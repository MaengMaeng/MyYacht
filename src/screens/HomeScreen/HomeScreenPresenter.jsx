import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import {
  PRACTICE_ICON,
  AI_ICON,
  NORMAL_ICON,
  RANK_ICON,
} from "@assets/home";
import { UserInfoModal } from "@components/Home";

const { width } = Dimensions.get("window");

export default function ({
  userInfo,
  modalVisible,
  setModalVisible,
  navigateMatching,
}) {
  return (
    <ContainerView>
      <UserInfoModal
        addToFriend
        {...{ userInfo, modalVisible, setModalVisible }}
      ></UserInfoModal>
      <SectionView>
        <SectionText>SINGLE</SectionText>
        <PlayButton onPress={() => setModalVisible(true)}>
          <PlayButtonImage source={PRACTICE_ICON}></PlayButtonImage>
          <PlayButtonText>Practice</PlayButtonText>
        </PlayButton>
        <PlayButton onPress={navigateMatching}>
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

  width: ${Math.floor(width * (30 / 100))}px;
  height: ${Math.floor(width * (30 / 100))}px;
  margin: 5% 0 5% 0;

  border: 2px solid black;
  border-radius: 15px;
`;

const PlayButtonImage = styled.Image`
  height: ${Math.floor(width * (12 / 100))}px;
  width: ${Math.floor(width * (12 / 100))}px;
`;

const PlayButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
