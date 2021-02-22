import React, { useEffect, useState } from "react";
import { BackHandler, StatusBar } from "react-native";
import { io } from "socket.io-client";
import * as config from "../../../config";

import PlayScreenPresenter from "./PlayScreenPresenter";
let socket;

export default function () {
  console.log(socket);
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

  const emitHoldDices = (number) => {
    let dices = holdDices.slice();
    dices[number] = !dices[number];

    console.log("hold", dices);

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

    socket = io(config.SERVER_URL);

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

    socket.on("hold", (data) => {
      setHoldDices(data);
    });

    // WillUnmount
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
      StatusBar.setHidden(false);
    };
  }, []);

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
      }}
    />
  );
}
