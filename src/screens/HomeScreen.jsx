import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

export default function () {
  return (
    <ContainerView>
      <SectionView>
        <SectionText>single</SectionText>
        <PlayButton>
          <Text>연습</Text>
        </PlayButton>
        <PlayButton>
          <Text>AI 대전</Text>
        </PlayButton>
      </SectionView>
      <DividerView />
      <SectionView>
        <SectionText>multi</SectionText>
        <PlayButton>
          <Text>노말 게임</Text>
        </PlayButton>
        <PlayButton>
          <Text>랭크 게임</Text>
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
  justify-content: center;
`;

const PlayButton = styled.TouchableOpacity`
  width: 30vw;
  height: 30vw;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 5% 0 5% 0;
`;
