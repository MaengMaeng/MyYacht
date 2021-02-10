import React from "react";
import styled from "styled-components/native";

import FriendsList from "../../components/Friends/FriendsList";
import Tab from "../../components/Friends/Tab";

export default function ({
  isReqSelected,
  onClickLeftTab,
  onClickRightTab,
  friendsList,
  friendsRequestList,
}) {
  return (
    <Container>
      <Tab
        isReqSelected={isReqSelected}
        onClickLeftTab={onClickLeftTab}
        onClickRightTab={onClickRightTab}
      />
      <ListContainer>
        {isReqSelected ? (
          // 신청받은 목록
          <FriendsList
            friendsList={friendsRequestList}
            isReqSelected={isReqSelected}
          />
        ) : (
          // 친구 목록
          <FriendsList
            friendsList={friendsList}
            isReqSelected={isReqSelected}
          />
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
