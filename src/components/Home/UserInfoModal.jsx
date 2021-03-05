import React from "react";
import styled from "styled-components/native";
import { Modal, Dimensions } from "react-native";

import USER_ICON from "../../../assets/user.png";
import Info from "./Info";

const { width } = Dimensions.get("window");

export default function ({
  userInfo,
  modalVisible,
  setModalVisible,
  addToFriend,
}) {
  const addFriendButton = () => {
    return (
      <CustomButton onPress={addFriend}>
        <ButtonText>친구 추가</ButtonText>
      </CustomButton>
    );
  };

  const addFriend = () => {
    /*
     * 친구 추가 코드
     */
  };

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
    >
      <ContainerView>
        <ProfileView>
          <ProfileImage source={USER_ICON}></ProfileImage>
          <ProfileNicknameText>
            {userInfo ? userInfo.nickname : ""}
          </ProfileNicknameText>
          <ProfileUidText>#{userInfo ? userInfo.uid : ""}</ProfileUidText>
        </ProfileView>
        <InfoContainerView>
          {userInfo ? Info("통합", userInfo.total) : null}
          {userInfo ? Info("랭크", userInfo.rank) : null}
          {userInfo ? Info("노말", userInfo.normal) : null}
        </InfoContainerView>
        <ButtonView>
          <ButtonContainerView>
            {addToFriend ? addFriendButton() : null}
            <CustomButton dark onPress={() => setModalVisible(false)}>
              <ButtonText dark>확인</ButtonText>
            </CustomButton>
          </ButtonContainerView>
        </ButtonView>
      </ContainerView>
    </Modal>
  );
}

const ContainerView = styled.View`
  flex-direction: column;
  margin: 20% 5% 0 5%;
  height: 80%;
  background: white;
  padding: 15px;
  border-radius: 15px;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
`;

const ProfileView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.Image`
  height: ${Math.floor(width * (12 / 100))}px;
  width: ${Math.floor(width * (12 / 100))}px;
`;

const ProfileNicknameText = styled.Text`
  font-size: 30px;
  color: black;
  margin: 0 10px 0 10px;
`;

const ProfileUidText = styled.Text`
  font-size: 20px;
  color: #1877f2;
`;

const InfoContainerView = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5%;
`;

const ButtonView = styled.View`
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonContainerView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CustomButton = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 50px;
  min-width: 100px;
  margin: 0 2% 0 2%;
  border: 2px solid black;
  border-radius: 15px;
  background: ${(props) => (props.dark ? "black" : "white")};
`;

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.dark ? "white" : "black")};
`;
