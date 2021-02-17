import React from "react";
import styled from "styled-components/native";

export default function ({ children, color, onClick }) {
  return (
    <Button color={color} onPress={onClick}>
      <Text color={color}> {children} </Text>
    </Button>
  );
}

const Button = styled.TouchableOpacity`
  padding-vertical: 5px;
  padding-horizontal: 10px;
  border-width: 4px;
  border-color: ${(props) => props.color};
  border-radius: 5px;
  margin: 5px;
`;
// border-color:;
const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color};
`;
