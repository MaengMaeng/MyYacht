import React, { useEffect, useState } from "react";
import { BackHandler, StatusBar } from "react-native";
import { io } from "socket.io-client";

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

  const emitHoldDices = (number) => {
    let dices = holdDices.slice();
    dices[number] = !dices[number];

    console.log("hold", dices);

    socket.emit("hold", dices);
  };

  const rollHandler = () => {
    socket.emit("roll", holdDices);
  };

  const submitHandler = () => {
    socket.emit("next_turn");
  };

  const backAction = () => {
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    // status bar hidden
    StatusBar.setHidden(true);

    socket = io("http://172.23.208.1:8080");

    socket.on("roll", (data) => {
      setDices(data);
    });

    socket.on("next_turn", (data) => {
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
        submitHandler,
      }}
    />
  );
}
