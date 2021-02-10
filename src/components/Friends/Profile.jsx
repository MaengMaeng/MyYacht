import React from "react";
import styled from "styled-components/native";

export default function ({ name, uid }) {
  return (
    <Container>
      <NickNameText> {name} </NickNameText>
      <IdCodeText> #{uid} </IdCodeText>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
`;

const IdCodeText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #10a1e2;
`;
const NickNameText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
