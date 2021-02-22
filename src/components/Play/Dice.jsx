import React from "react";
import styled from "styled-components/native";
import { dice1, dice2, dice3, dice4, dice5, dice6 } from "../../../assets/play";

const IMAGES = {
  image1: dice1,
  image2: dice2,
  image3: dice3,
  image4: dice4,
  image5: dice5,
  image6: dice6,
};

const getImage = (num) => {
  return IMAGES["image" + num];
};

export default function ({ disabled, value, hold, onPress }) {
  return (
    <Dice disabled={disabled} hold={hold} onPress={onPress}>
      <DiceImage source={getImage(value)} />
    </Dice>
  );
}

const Dice = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.hold ? "2px solid black" : "2px solid white")};
  border-radius: 8px;
`;

const DiceImage = styled.Image`
  width: 60px;
  height: 60px;
`;
