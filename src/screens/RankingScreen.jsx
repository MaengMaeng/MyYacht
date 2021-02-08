import React from "react";
import { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import {TOTAL_RANKING, MY_TOTAL_RANKING, FRIENDS_RANKING, MY_FRIENDS_RANKING} from './ranking_dummy';

export default function () {
  const [tab, setTab] = useState(0);
  const [ranklist , setRanklist] = useState([]);
  const defaultMyRank = {
    rank:0,
    nickname:'-',
    uid:0
  }
  const [myRank , setMyRank] = useState(defaultMyRank);

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
          <View style={styles.userRankView}>
            <Text style={styles.userRankText}>
              {parsingRank}
            </Text>
          </View>
          <View style={styles.userNicknameUidView}>
            <Text style={styles.userNicknameText}>
              {nickname}
            </Text>
            <Text style={styles.userUidText}>
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
            <TouchableOpacity style={[styles.tabButton, styles.selected]}>
              <Text style={styles.selected}>전체 랭킹</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.tabButton, styles.notSeleted]} onPress={changeTab}>
              <Text style={styles.notSeleted}>친구 랭킹</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.list}>
          {
            ranklist.map((v, i) => userInfo(i, v.nickname, v.uid))
          }
        </ScrollView>
        {myInfo(myRank.rank, myRank.nickname, myRank.uid)}
      </>
    )
  }
  else{
    return (
      <>
        <View style={styles.container}>
            <TouchableOpacity style={[styles.tabButton, styles.notSeleted]} onPress={changeTab}>
              <Text style={styles.notSeleted}>전체 랭킹</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.tabButton, styles.selected]}>
              <Text style={styles.selected}>친구 랭킹</Text>
            </TouchableOpacity>      
          </View>
          <ScrollView style={styles.list}>
            {
              ranklist.map((v, i) => userInfo(i, v.nickname, v.uid))
            }
          </ScrollView>
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

  tabButton:{
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    margin: 4,
    padding: 4
  },

  selected: {
    fontSize: 30,
    backgroundColor: 'black',
    color:'white'
  },

  notSeleted:{
    fontSize: 20 ,
    backgroundColor: 'white',
    color:'black'
  },

  list:{
    flex: 5,
    flexGrow: 5,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },

  userInfo:{
    flexDirection: 'row',
  },

  userRankView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userRankText:{
    borderColor:'black',
    borderRadius: 16,
    borderWidth:2,
    padding: 4,
    margin: 4,
    // width: 60,
    textAlign:'center',
  },

  userNicknameUidView:{
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userNicknameText:{
    fontSize:20,
  },

  userUidText:{
    fontSize:16,
    color:'grey'
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
