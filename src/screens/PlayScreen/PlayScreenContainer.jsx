import React, { useEffect, useState } from "react";
import { BackHandler, StatusBar } from "react-native";

import { socket, connectSocket } from "../../socket";
import PlayScreenPresenter from "./PlayScreenPresenter";
import { Matching } from "../../components/Matching/Matching";

export default function () {
  const [isMatched, setIsMatched] = useState(true);
  const [isTurn, setIsTurn] = useState(false);
  const [holdDices, setHoldDices] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [dices, setDices] = useState([1, 2, 3, 4, 5]);
  const [myScore, setMyScore] = useState({});
  const [rollCount, setRollCount] = useState(0);
  const [lVisible, setLVisible] = useState(false);
  const [lPTitle, setLPTitle] = useState(null);
  const [rVisible, setRVisible] = useState(false);
  const [rPTitle, setRPTitle] = useState(null);

  const setProps = (left, visible, title) => {
    if(left){
      setLVisible(visible);
      setLPTitle(title);
    }
    else{
      setRVisible(visible);
      setRPTitle(title);
    }
  };

  const emitHoldDices = (number) => {
    let dices = holdDices.slice();
    dices[number] = !dices[number];

    socket.emit("hold", dices);
  };

  const rollHandler = () => {
    const data = new Object();
    data.dices = dices;
    data.holddDices = holdDices;
    data.rollCount = rollCount;
    socket.emit("roll", data);
  };

  const submitHandler = () => {
    socket.emit("submit");
  };

  const backAction = () => {
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    // status bar hidden
    StatusBar.setHidden(true);

    if (!socket) {
      connectSocket();
    }

    socket.emit("matching");

    socket.on("hold", (data) => {
      setHoldDices(data);
    });

    socket.on("matched", (data) => {
      setIsMatched(true);
    });

    socket.on("pre_calcurate", (data) => {
      setMyScore(data);
    });

    // roll dices
    socket.on("roll", (data) => {
      setDices(data);
    });

    socket.on("roll_count", (data) => {
      setRollCount(data);
    });

    socket.on("submit", (data) => {
      setIsTurn(data);
    });

    // WillUnmount
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
      StatusBar.setHidden(false);
    };
  }, []);

  if (!isMatched) {
    return <Matching />;
  } else {
    return (
      <PlayScreenPresenter
        {...{
          isTurn,
          dices,
          holdDices,
          emitHoldDices,
          rollHandler,
          rollCount,
          myScore,
          submitHandler,
          lVisible,
          rVisible,
          lPTitle,
          rPTitle,
          setProps
        }}
      />
    );
  }
}
