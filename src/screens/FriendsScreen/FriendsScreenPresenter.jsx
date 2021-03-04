import React from "react";
import styled from "styled-components/native";

import FriendsList from "../../components/Friends/FriendsList";
import Tab from "../../components/Friends/Tab";

export default function ({
  tabNumber,
  onClickLeftTab,
  onClickRightTab,
  friendsList,
  friendsRequestList,
}) {
  return (
    <Container>
      <Tab
        tabNumber={tabNumber}
        onClickLeftTab={onClickLeftTab}
        onClickRightTab={onClickRightTab}
      />
      <ListContainer>
        {tabNumber ? (
          <FriendsList friendsList={friendsRequestList} tabNumber={tabNumber} />
        ) : (
          <FriendsList friendsList={friendsList} tabNumber={tabNumber} />
        )}
      </ListContainer>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const ListContainer = styled.View`
  margin-horizontal: 10px;
  background-color: white;

  border-width: 4px;
  border-color: black;
  border-radius: 5px;
`;
