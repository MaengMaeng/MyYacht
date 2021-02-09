import React, { useState, useEffect } from "react";
import FriendsPresenter from "./FriendsPresenter";

import dummy from "./dummy1";
export default function () {
  const [isReqSelected, setIsReqSelected] = useState(false);
  const [friendsList, setFriendsList] = useState(null);
  const [friendsRequestList, setFriendsRequestList] = useState(null);

  const onClickLeftTab = () => {
    setIsReqSelected(false);
  };
  const onClickRightTab = () => {
    setIsReqSelected(true);
  };
  const saveDatas = () => {
    setFriendsList(dummy);
    setFriendsRequestList(dummy);
  };
  useEffect(() => {
    saveDatas();
  }, []);
  return (
    <FriendsPresenter
      isReqSelected={isReqSelected}
      onClickLeftTab={onClickLeftTab}
      onClickRightTab={onClickRightTab}
      friendsList={friendsList}
      friendsRequestList={friendsRequestList}
    />
  );
}
