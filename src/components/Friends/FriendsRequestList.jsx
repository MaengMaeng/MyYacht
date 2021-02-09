import React from "react";
import { Dimensions } from "react-native";
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

const RightContainer = styled.View`
  flex-direction: row;
  margin-left: auto;
`;

export default function ({ friendsRequestList }) {
  return (
    <Container>
      {friendsRequestList.map((data) => (
        <ItemContainer key={data.uid}>
          <Profile name={data.name} uid={data.uid} />
          <RightContainer>
            <Button color="#10a1e2">수락</Button>
            <Button color="#d51d36">거절</Button>
          </RightContainer>
        </ItemContainer>
      ))}
    </Container>
  );
}
