import React from "react";
import { useState, useEffect } from "react";
import styled from 'styled-components/native';

import { Text } from "react-native";
import { TOTAL_RANKING, MY_TOTAL_RANKING, FRIENDS_RANKING, MY_FRIENDS_RANKING } from './ranking_dummy';

export default function () {
  const [tab, setTab] = useState(0);
  const [ranklist, setRanklist] = useState([]);
  const defaultMyRank = {
    rank: 0,
    nickname: '-',
    uid: 0
  }
  
  const [myRank, setMyRank] = useState(defaultMyRank);

  useEffect(() => {
    if (tab === 0) {
      setRanklist(TOTAL_RANKING);
      setMyRank(MY_TOTAL_RANKING);
    }
    else {
      setRanklist(FRIENDS_RANKING);
      setMyRank(MY_FRIENDS_RANKING);
    }
  }, []);

  const changeTab = () => {
    if (tab) {
      setRanklist(TOTAL_RANKING);
      setMyRank(MY_TOTAL_RANKING);
      setTab(0);
    }
    else {
      setRanklist(FRIENDS_RANKING);
      setMyRank(MY_FRIENDS_RANKING);
      setTab(1);
    }
  }

  const rankParser = ['1st', '2nd', '3rd'];

  const userInfo = (rank, nickname, uid) => {
    const parsingRank = rankParser[rank] ? rankParser[rank] : `${rank + 1}th`;

    return (
      <RankingElementView key={`userInfo_${rank}`}>
        <RankView>
          <RankText>
            {parsingRank}
          </RankText>
        </RankView>
        <NicknameUidView>
          <NicknameText>
            {nickname}
          </NicknameText>
          <UidText>
            #{uid}
          </UidText>
        </NicknameUidView>
      </RankingElementView>
    )
  }

  if (tab === 0) {
    return (
      <>
        <Container direction='row'>
          <TabButton selected={true}>
            <TabText selected={true}>전체 랭킹</TabText>
          </TabButton>

          <TabButton onPress={changeTab}>
            <TabText>친구 랭킹</TabText>
          </TabButton>
        </Container>
        <RankingListView>
          {
            ranklist.map((v, i) => userInfo(i, v.nickname, v.uid))
          }
        </RankingListView>
        <Container direction='column'>
          <DividerView>
            <Text>내 랭킹</Text>
            <DividerLineView/>
          </DividerView>
          {userInfo(myRank.rank, myRank.nickname, myRank.uid)}
        </Container>
      </>
    )
  }
  else {
    return (
      <>
        <Container direction='row'>
          <TabButton onPress={changeTab}>
            <TabText>전체 랭킹</TabText>
          </TabButton>

          <TabButton selected={true}>
            <TabText selected={true}>친구 랭킹</TabText>
          </TabButton>
        </Container>
        <RankingListView>
          {
            ranklist.map((v, i) => userInfo(i, v.nickname, v.uid))
          }
        </RankingListView>
        <Container direction='column'>
          <DividerView>
            <Text>내 랭킹</Text>
            <DividerLineView/>
          </DividerView>
          {userInfo(myRank.rank, myRank.nickname, myRank.uid)}
        </Container>
      </>
    );
  }
}

const Container = styled.View`
  flex: 1;
  flex-direction: ${props => props.direction};
  justify-content: center;
  align-items: center;
`;

const TabButton = styled.TouchableOpacity`
  border: 2px solid black;
  border-radius: 5px;
  margin: 4px;
  padding: 4px;

  background-color: ${props => props.selected ? 'black' : 'white'};
`;

const TabText = styled.Text`
  font-size: ${props => props.selected ? '30px' : '20px'};
  color: ${props => props.selected ? 'white' : 'black'};
`;

const RankingListView = styled.ScrollView`
  flex: 5;
  flex-grow: 5;
  flex-direction: column;
  background-color: white;
`;

const RankingElementView = styled.View`
  flex-direction: row;
`;

const RankView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RankText = styled.Text`
  border: 2px solid black;
  border-radius: 16px;
  padding: 4px;
  margin: 4px;
  text-align: center;
`;

const NicknameUidView = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NicknameText = styled.Text`
  font-size: 20px;
`;

const UidText = styled.Text`
  font-size: 16px;
  color: grey;
`;

const DividerView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DividerLineView = styled.View`
  border: 1px solid black;
  height: 1px;
  width: 300px;
`;

