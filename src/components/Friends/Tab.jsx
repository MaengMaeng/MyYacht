import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const TabContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-vertical: 10px;
`;

const LeftButton = styled.TouchableOpacity`
  padding-horizontal: 50px;
  padding-vertical: 10px;
  opacity: ${(props) => (props.isReqSelected ? 0.5 : 1)};
  border-bottom-color: ${(props) => (props.isReqSelected ? "white" : "black")};
  border-bottom-width: 4px;
`;

const RightButton = styled.TouchableOpacity`
  padding-horizontal: 50px;
  padding-vertical: 10px;
  opacity: ${(props) => (props.isReqSelected ? 1 : 0.5)};
  border-bottom-color: ${(props) => (props.isReqSelected ? "black" : "white")};
  border-bottom-width: 4px;
`;

export default function ({ isReqSelected, onClickLeftTab, onClickRightTab }) {
  return (
    <TabContainer>
      <LeftButton isReqSelected={isReqSelected} onPress={onClickLeftTab}>
        <Text>목록</Text>
      </LeftButton>
      <RightButton isReqSelected={isReqSelected} onPress={onClickRightTab}>
        <Text>신청</Text>
      </RightButton>
    </TabContainer>
  );
}
