import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {TOTAL_RANKING, MY_TOTAL_RANKING, FRIENDS_RANKING, MY_FRIENDS_RANKING} from './ranking_dummy';

export default function () {
  const [tab, setTab] = useState(0);
  const [ranklist , setRanklist] = useState([]);
  const [myRank , setMyRank] = useState();

  useEffect(() => {
    if(tab === 0){
      setRanklist(TOTAL_RANKING);
      setMyRank(MY_TOTAL_RANKING);
    }
    else{
      setRanklist(FRIENDS_RANKING);
      setMyRank(MY_FRIENDS_RANKING);
    }
  }, []);

  const changeTab = () => {
    if(tab){
      setRanklist(TOTAL_RANKING);
      setMyRank(MY_TOTAL_RANKING);
      setTab(0);
    }
    else{
      setRanklist(FRIENDS_RANKING);
      setMyRank(MY_FRIENDS_RANKING);
      setTab(1);
    }
  }

  const rankParser = ['1st', '2nd', '3rd'];

  const userInfo = (rank, nickname, uid) => {
    const parsingRank = rankParser[rank] ? rankParser[rank] : `${rank + 1}th`;  

    return (
        <View key={`userInfo_${rank}`} style={styles.userInfo}>
          <View style={styles.userRank}>
            <Text>
              {parsingRank}
            </Text>
          </View>
          <View style={styles.userNicknameUid}>
            <Text>
              {nickname}
            </Text>
            <Text>
              #{uid}
            </Text>
          </View>
        </View>
    )
  }

  const myInfo = (rank, nickname, uid) => {
    return (
      <View style={styles.myInfo}>
        <View style={styles.divider}>
          <Text>내 랭킹</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.divider}>
          {userInfo(rank, nickname, uid)}
        </View>
      </View>
    )
  }

  if(tab === 0){
    return (
      <>
        <View style={styles.container}>
            <TouchableOpacity style={styles.selected}>
              <Text style={styles.selected}>전체 랭킹</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.notSeleted} onPress={changeTab}>
              <Text style={styles.notSeleted}>친구 랭킹</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.list}>
          {
            ranklist.map((v, i) => userInfo(i, v.nickname, v.uid))
          }
        </View>
        {myInfo(myRank.rank, myRank.nickname, myRank.uid)}
      </>
    )
  }
  else{
    return (
      <>
        <View style={styles.container}>
            <TouchableOpacity style={styles.notSeleted} onPress={changeTab}>
              <Text style={styles.notSeleted}>전체 랭킹</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.selected}>
              <Text style={styles.selected}>친구 랭킹</Text>
            </TouchableOpacity>      
          </View>
          <View style={styles.list}>
            {
              ranklist.map((v, i) => userInfo(i, v.nickname, v.uid))
            }
          </View>
          {myInfo(myRank.rank, myRank.nickname, myRank.uid)}
        </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selected: {
    fontSize: 30,
    backgroundColor: 'red',
  },

  notSeleted:{
    fontSize: 20 ,
    backgroundColor: 'blue'
  },

  list:{
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  userInfo:{
    flexDirection: 'row',
  },

  userRank:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userNicknameUid:{
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  divider:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  myInfo:{
    flex:1,
    flexDirection: 'column',
  },

  line:{
    borderTopColor: 'black',
    borderBottomWidth: 2,
    height:1,
    width:300
  }, 

});
