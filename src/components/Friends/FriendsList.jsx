import React from "react";
import { View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import Button from "./Button";
import Profile from "./Profile";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
// 200 = 고정값 (Header + TopTab + BottomTab)
const newHeight = HEIGHT - 200;

export default function ({ friendsList, tabNumber }) {
  const navigation = useNavigation();

  const FriendsButton = () => {
    return (
      <>
        <Button color="#10a1e2" onClick={navigatePlay}>
          도전
        </Button>
        <Button color="#d51d36">삭제</Button>
      </>
    );
  };

  const FriendsRequestButton = () => {
    return (
      <>
        <Button color="#10a1e2">수락</Button>
        <Button color="#d51d36">거절</Button>
      </>
    );
  };

  const navigatePlay = () => {
    console.log("::L");
    navigation.navigate("Play");
  };
  return (
    <Container>
      {friendsList ? (
        friendsList.map((data) => (
          <ItemContainer key={data.uid}>
            <LeftContainer>
              <Profile name={data.name} uid={data.uid} />
            </LeftContainer>
            <RightContainer>
              {tabNumber ? <FriendsRequestButton /> : <FriendsButton />}
            </RightContainer>
          </ItemContainer>
        ))
      ) : (
        <></>
      )}
    </Container>
  );
}

const Container = styled.ScrollView`
  height: ${newHeight};
`;
const ItemContainer = styled.View`
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  height: 60px;
`;
const LeftContainer = styled.View`
  flex: 4;
`;

const RightContainer = styled.View`
  flex-direction: row;
  margin-left: auto;
`;
