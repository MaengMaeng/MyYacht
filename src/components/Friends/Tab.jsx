import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

export default function ({ tabNumber, onClickLeftTab, onClickRightTab }) {
  return (
    <TabContainer>
      <LeftButton tabNumber={tabNumber} onPress={onClickLeftTab}>
        <Text>목록</Text>
      </LeftButton>
      <RightButton tabNumber={tabNumber} onPress={onClickRightTab}>
        <Text>신청</Text>
      </RightButton>
    </TabContainer>
  );
}

const TabContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-vertical: 10px;
`;

const LeftButton = styled.TouchableOpacity`
  padding-horizontal: 50px;
  padding-vertical: 10px;
  opacity: ${(props) => (props.tabNumber ? 0.5 : 1)};
  border-bottom-color: ${(props) => (props.tabNumber ? "white" : "black")};
  border-bottom-width: 4px;
`;

const RightButton = styled.TouchableOpacity`
  padding-horizontal: 50px;
  padding-vertical: 10px;
  opacity: ${(props) => (props.tabNumber ? 1 : 0.5)};
  border-bottom-color: ${(props) => (props.tabNumber ? "black" : "white")};
  border-bottom-width: 4px;
`;
