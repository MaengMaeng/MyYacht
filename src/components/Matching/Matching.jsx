import React, { useEffect } from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { socket, connectSocket } from "../../socket";

export const Matching = () => {
  const navigation = useNavigation();

  const matchingCancel = () => {
    socket.emit("matchingCancel");
    navigation.goBack();
  };

  return (
    <ContainerView>
      <ActivityIndicator size="large" color="#fff"></ActivityIndicator>
      <MatchingText>게임을 찾는 중입니다.</MatchingText>
      <CustomButton onPress={matchingCancel}>
        <ButtonText>취소</ButtonText>
      </CustomButton>
    </ContainerView>
  );
};

const ContainerView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.9);

  position: absolute;
`;

const MatchingText = styled.Text`
  font-size: 30px;
  font-weight: bold;

  margin: 10px 0 0 0;

  color: white;
`;

const CustomButton = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 8px;
  height: 50px;
  min-width: 100px;

  margin: 40px 0 0 0;
  border: 2px solid black;
  border-radius: 15px;

  background: ${(props) => (props.dark ? "black" : "white")};
`;

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;

  color: ${(props) => (props.dark ? "white" : "black")};
`;
