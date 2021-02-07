import React, { useState } from "react";
import FriendsPresenter from "./FriendsPresenter";

export default function () {
  const [isReqSelected, setIsReqSelected] = useState(false);

  const onClickLeftTab = () => {
    setIsReqSelected(false);
  };
  const onClickRightTab = () => {
    setIsReqSelected(true);
  };
  return (
    <FriendsPresenter
      isReqSelected={isReqSelected}
      onClickLeftTab={onClickLeftTab}
      onClickRightTab={onClickRightTab}
    />
  );
}
