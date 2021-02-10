import React from "react";
import { useState, useEffect } from "react";
import { RankingScreen } from "./RankingScreen";

import {
  TOTAL_RANKING,
  MY_TOTAL_RANKING,
  FRIENDS_RANKING,
  MY_FRIENDS_RANKING,
} from "./ranking_dummy";

export const RankingScreenContainer = () => {
  const [tab, setTab] = useState(0);
  const [ranklist, setRanklist] = useState([]);
  const defaultMyRank = {
    rank: 0,
    nickname: "-",
    uid: 0,
  };

  const [myRank, setMyRank] = useState(defaultMyRank);

  useEffect(() => {
    if (!tab) {
      setRanklist(TOTAL_RANKING);
      setMyRank(MY_TOTAL_RANKING);
    } else {
      setRanklist(FRIENDS_RANKING);
      setMyRank(MY_FRIENDS_RANKING);
    }
  }, []);

  const changeTab = () => {
    if (tab) {
      setRanklist(TOTAL_RANKING);
      setMyRank(MY_TOTAL_RANKING);
      setTab(0);
    } else {
      setRanklist(FRIENDS_RANKING);
      setMyRank(MY_FRIENDS_RANKING);
      setTab(1);
    }
  };

  return <RankingScreen {...{ tab, ranklist, myRank, changeTab }} />;
};
