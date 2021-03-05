import React, { useState, useEffect } from "react";
import FriendsScreenPresenter from "./FriendsScreenPresenter";
import { dummy } from "@dummies/friendsDummy";

export default function () {
  const [tabNumber, setTabNumber] = useState(0);
  const [friendsList, setFriendsList] = useState(null);
  const [friendsRequestList, setFriendsRequestList] = useState(null);

  const onClickLeftTab = () => {
    setTabNumber(0);
  };

  const onClickRightTab = () => {
    setTabNumber(1);
  };

  const saveDatas = () => {
    setFriendsList(dummy);
    setFriendsRequestList(dummy);
  };

  useEffect(() => {
    saveDatas();
  }, []);

  return (
    <FriendsScreenPresenter
      tabNumber={tabNumber}
      onClickLeftTab={onClickLeftTab}
      onClickRightTab={onClickRightTab}
      friendsList={friendsList}
      friendsRequestList={friendsRequestList}
    />
  );
}
