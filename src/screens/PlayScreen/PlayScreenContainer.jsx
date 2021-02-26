import React, { useEffect, useState } from "react";
import { BackHandler, StatusBar } from "react-native";

import { socket, connectSocket } from "../../socket";
import PlayScreenPresenter from "./PlayScreenPresenter";
import { Matching } from "../../components/Matching/Matching";
import * as pc from "../../PedigreeCalculator";

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
  const [dices, setDices] = useState([]);
  const [myScore, setMyScore] = useState({});
  const [rivalScore, setRivalScore] = useState({});
  const [rollCount, setRollCount] = useState(0);
  const [holdPedigreeTitle, setHoldPedigreeTitle] = useState("");
  const [lVisible, setLVisible] = useState(false);
  const [lPTitle, setLPTitle] = useState(null);
  const [rVisible, setRVisible] = useState(false);
  const [rPTitle, setRPTitle] = useState(null);

  const setProps = (left, visible, title) => {
    if (left) {
      setLVisible(visible);
      setLPTitle(title);
    } else {
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
    socket.emit("roll", holdDices);
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
      // 족보 계산값
    });
    socket.on("countRolls", (data) => {
      setRollCount(data);
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

    socket.on("updateScore", (score, isMine) => {
      if (isMine) {
        setMyScore(score);
      } else {
        setRivalScore(score);
      }
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
          lVisible,
          rVisible,
          lPTitle,
          rPTitle,
          setProps,
        }}
      />
    );
  }
}
