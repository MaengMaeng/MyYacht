import React from "react";
import styled from "styled-components/native";
import { getImage } from "@utils/images";

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
