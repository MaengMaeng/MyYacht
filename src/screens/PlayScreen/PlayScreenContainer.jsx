import React, { useEffect, useState } from "react";
import { BackHandler, StatusBar } from "react-native";

import { socket, connectSocket } from "../../socket";
import PlayScreenPresenter from "./PlayScreenPresenter";
import { Matching } from "../../components/Matching/Matching";

export default function () {
  const [isMatched, setIsMatched] = useState(false);
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
  const [rivalScore, setRivalScore] = useState({});
  const [rollCount, setRollCount] = useState(0);
  const [holdPedigreeTitle, setHoldPedigreeTitle] = useState("");

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

  const holdPedigreeHandler = (title) => {
    socket.emit("holdPedigree", title);
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

    socket.on("matched", (data) => {
      setIsMatched(true);
    });

    // roll
    socket.on("rollDices", (data) => {
      setDices(data);
    });
    socket.on("countRolls", (data) => {
      setRollCount(data);
    });
    socket.on("preCalculateMyScore", (data) => {
      setMyScore(data);
    });
    socket.on("preCalculateRivalScore", (data) => {
      setRivalScore(data);
    });

    socket.on("hold", (data) => {
      setHoldDices(data);
    });
    socket.on("holdPedigree", (data) => {
      setHoldPedigreeTitle(data);
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
          rollCount,
          myScore,
          rivalScore,
          holdDices,
          holdPedigreeTitle,
          holdPedigreeHandler,
          rollHandler,
          emitHoldDices,
          submitHandler,
        }}
      />
    );
  }
}
