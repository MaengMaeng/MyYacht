import React, { useEffect, useState } from "react";
import { Text, BackHandler, StatusBar } from "react-native";
import styled from "styled-components/native";
import {io} from 'socket.io-client';
import * as config from '../../../config';

import {
  diamond,
  clover,
  home,
  stairs,
  stairsbox,
  pentagon,
  dice1,
  dice2,
  dice3,
  dice4,
  dice5,
  dice6,
} from "../../../assets/play";
import { Pedigree, Total } from "../../components/Play";

let socket;

export default function () {
  const [holdDices, setHoldDices] = useState([false, false, false, false, false]);

  const emitHoldDices = (number) => {
    let dices = holdDices.slice();
    dices[number] = !dices[number];

    socket.emit('hold', dices);
  }

  const backAction = () => {
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    // status bar hidden
    StatusBar.setHidden(true);

    socket = io(config.SERVER_URL);

    socket.on('hold', (data) => {
      setHoldDices(data);
    })

    // WillUnmount
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <Container>
      <PedigreeContainer>
        <PedigreeList>
          <Pedigree title="Aces" image={dice1} />
          <Pedigree title="Duces" image={dice2} />
          <Pedigree title="Threes" image={dice3} />
          <Pedigree title="Fours" image={dice4} />
          <Pedigree title="Fives" image={dice5} />
          <Pedigree title="Sixes" image={dice6} />

          <TotalContainer>
            <Total title="Bonus" myScore="2" rivalScore="50" />
          </TotalContainer>
        </PedigreeList>

        <PedigreeList>
          <Pedigree title="Choice" image={diamond} />
          <Pedigree title="4 Of a Kind" image={clover} />
          <Pedigree title="Full House" image={home} />
          <Pedigree title="Small Straight" image={stairs} />
          <Pedigree title="Large Straight" image={stairsbox} />
          <Pedigree title="Yacht" image={pentagon} />
          <TotalContainer>
            <Total title="Total" myScore="133" rivalScore="350" />
          </TotalContainer>
        </PedigreeList>
      </PedigreeContainer>
      <DiceContainer>
        <Dice hold={holdDices[0]} onPress={() => emitHoldDices(0)}>
          <DiceImage source={dice1} />
        </Dice>
        <Dice hold={holdDices[1]} onPress={() => emitHoldDices(1)}>
          <DiceImage source={dice2} />
        </Dice>
        <Dice hold={holdDices[2]}  onPress={() => emitHoldDices(2)}>
          <DiceImage source={dice3} />
        </Dice>
        <Dice hold={holdDices[3]} onPress={() => emitHoldDices(3)}>
          <DiceImage source={dice4} />
        </Dice>
        <Dice hold={holdDices[4]} onPress={() => emitHoldDices(4)}>
          <DiceImage source={dice5} />
        </Dice>
      </DiceContainer>
      <ButtonContainer>
        <Button>
          <Text>Roll</Text>
        </Button>
        <Button>
          <Text>Submit</Text>
        </Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const PedigreeContainer = styled.View`
  flex: 9;
  flex-direction: row;
  margin-vertical: 20px;
`;
const PedigreeList = styled.View`
  flex: 1;
  margin-horizontal: 10px;
`;
const TotalContainer = styled.View`
  flex: 1.5;
  margin-top: 10px;
`;
const DiceContainer = styled.View`
  flex: 2;
  flex-direction: row;
  margin-vertical: 20px;
  margin-horizontal: 10px;
  align-items: center;
  justify-content: center;
`;

const Dice = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border: ${props => props.hold ? '2px solid black' : '2px solid white'};
  border-radius: 8px;
`;

const DiceImage = styled.Image`
  width: 60px;
  height: 60px;
`;

const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-vertical: 20px;
  margin-horizontal: 10px;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 5px;
  margin-horizontal: 20px;
`;
