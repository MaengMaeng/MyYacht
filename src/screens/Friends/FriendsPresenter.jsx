import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const TabContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-vertical: 10;
`;

const LeftButton = styled.View`
  padding-horizontal: 50;
  padding-vertical: 10;
  opacity: ${(props) => (props.isReqSelected ? 0.5 : 1)};
  border-bottom-color: ${(props) => (props.isReqSelected ? "white" : "black")};
  border-bottom-width: 4;
`;

const RightButton = styled.View`
  padding-horizontal: 50;
  padding-vertical: 10;
  opacity: ${(props) => (props.isReqSelected ? 1 : 0.5)};
  border-bottom-color: ${(props) => (props.isReqSelected ? "black" : "white")};
  border-bottom-width: 4;
`;

const ListContainer = styled.View`
  margin-horizontal: 10;
  height: HEIGHT * (2 / 3);
  background-color: white;
`;

export default function ({ isReqSelected, onClickLeftTab, onClickRightTab }) {
  return (
    <Container>
      <TabContainer>
        <TouchableOpacity onPress={onClickLeftTab}>
          <LeftButton isReqSelected={isReqSelected}>
            <Text>목록</Text>
          </LeftButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClickRightTab}>
          <RightButton isReqSelected={isReqSelected}>
            <Text>신청</Text>
          </RightButton>
        </TouchableOpacity>
      </TabContainer>
      <ListContainer>
        {isReqSelected ? <FriendsRequestList /> : <FriendsList />}
      </ListContainer>
    </Container>
  );
}

const FriendsList = () => {
  return (
    <View>
      <Text> Friends List </Text>
    </View>
  );
};

const FriendsRequestList = () => {
  return (
    <View>
      <Text> FriendRequsetList</Text>
    </View>
  );
};
