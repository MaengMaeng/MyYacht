import React from "react";
import { View, Dimensions } from "react-native";
import styled from "styled-components/native";

import Button from "./Button";
import Profile from "./Profile";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
// 200 = 고정값 (Header + TopTab + BottomTab)
const newHeight = HEIGHT - 200;

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

export default function ({ friendsList, isReqSelected }) {
  return (
    <Container>
      {friendsList ? (
        friendsList.map((data) => (
          <ItemContainer key={data.uid}>
            <LeftContainer>
              <Profile name={data.name} uid={data.uid} />
            </LeftContainer>
            <RightContainer>
              {isReqSelected ? <FriendsRequestButton /> : <FriendsButton />}
            </RightContainer>
          </ItemContainer>
        ))
      ) : (
        <></>
      )}
    </Container>
  );
}

const FriendsButton = () => {
  return (
    <>
      <Button color="#10a1e2">도전</Button>
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
