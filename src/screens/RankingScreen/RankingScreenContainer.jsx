import React from "react";
import { useState, useEffect } from "react";
import RankingScreenPresenter from "./RankingScreenPresenter";

import {
  TOTAL_RANKING,
  MY_TOTAL_RANKING,
  FRIENDS_RANKING,
  MY_FRIENDS_RANKING,
} from "@dummies/rankingDummy";

export default function () {
  const [tabNumber, setTabNumber] = useState(0);
  const [ranklist, setRanklist] = useState([]);
  const defaultMyRank = {
    rank: 0,
    nickname: "-",
    uid: 0,
  };

  const [myRank, setMyRank] = useState(defaultMyRank);

  useEffect(() => {
    if (!tabNumber) {
      setRanklist(TOTAL_RANKING);
      setMyRank(MY_TOTAL_RANKING);
    } else {
      setRanklist(FRIENDS_RANKING);
      setMyRank(MY_FRIENDS_RANKING);
    }
  }, []);

  const changeTab = () => {
    if (tabNumber) {
      setRanklist(TOTAL_RANKING);
      setMyRank(MY_TOTAL_RANKING);
      setTabNumber(0);
    } else {
      setRanklist(FRIENDS_RANKING);
      setMyRank(MY_FRIENDS_RANKING);
      setTabNumber(1);
    }
  };

  return (
    <RankingScreenPresenter {...{ tabNumber, ranklist, myRank, changeTab }} />
  );
}
