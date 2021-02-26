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
      // const counts = pc.makeCountArray(data);
      // const calculatedData = {
      //   Aces: pc.calSingle(counts, 1),
      //   Duces: pc.calSingle(counts, 2),
      //   Threes: pc.calSingle(counts, 3),
      //   Fours: pc.calSingle(counts, 4),
      //   Fives: pc.calSingle(counts, 5),
      //   Sixes: pc.calSingle(counts, 6),
      //   Choice: pc.calSum(counts),
      //   "4 Of a Kind": pc.cal4OfAKind(counts),
      //   "Full House": pc.calFullHouse(counts),
      //   "Small Straight": pc.calSmallStraight(counts),
      //   "Large Straight": pc.calLargeStraight(counts),
      //   Yacht: pc.calYatch(counts),
      // };
      // setMyScore(calculatedData);
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
        }}
      />
    );
  }
}
