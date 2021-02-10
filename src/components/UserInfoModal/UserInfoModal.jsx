import React from "react";
import styled from "styled-components/native";
import { Modal, Text, Dimensions } from "react-native";
import USER_ICON from "../../../assets/user.png";

const { width } = Dimensions.get("window");

export const UserInfoModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
    >
      <ContainerView>
        <ProfileView>
          <ProfileImage source={USER_ICON}></ProfileImage>
          <ProfileNicknameText>닉네임</ProfileNicknameText>
          <ProfileUidText>#1234</ProfileUidText>

        </ProfileView>
        <InfoContainerView>
          <DividerView>
            <DividerText>종합</DividerText>
            <DividerLineView></DividerLineView>
          </DividerView>
          <InfoView>
            <InfoLineView>
              <InfoTextView>
                <InfoLineText>승 / 패</InfoLineText>
              </InfoTextView>
              <InfoTextView>
                <InfoLineText>123 / 32</InfoLineText>
              </InfoTextView>
            </InfoLineView>
            <InfoLineView>
              <InfoTextView>
                <InfoLineText>최고 족보 점수</InfoLineText>
              </InfoTextView>
              <InfoTextView>
                <InfoLineText>232</InfoLineText>
              </InfoTextView>
            </InfoLineView>
          </InfoView>
        </InfoContainerView>
        <InfoContainerView>
          <DividerView>
            <DividerText>랭크</DividerText>
            <DividerLineView></DividerLineView>
          </DividerView>
          <InfoView>
            <InfoLineView>
              <InfoTextView>
                <InfoLineText>승 / 패</InfoLineText>
              </InfoTextView>
              <InfoTextView>
                <InfoLineText>123 / 32</InfoLineText>
              </InfoTextView>
            </InfoLineView>
            <InfoLineView>
              <InfoTextView>
                <InfoLineText>최고 족보 점수</InfoLineText>
              </InfoTextView>
              <InfoTextView>
                <InfoLineText>232</InfoLineText>
              </InfoTextView>
            </InfoLineView>
            <InfoLineView>
              <InfoTextView>
                <InfoLineText>랭크 점수</InfoLineText>
              </InfoTextView>
              <InfoTextView>
                <InfoLineText>1523</InfoLineText>
              </InfoTextView>
            </InfoLineView>
          </InfoView>
        </InfoContainerView>
        <InfoContainerView>
          <DividerView>
            <DividerText>노말</DividerText>
            <DividerLineView></DividerLineView>
          </DividerView>
          <InfoView>
            <InfoLineView>
              <InfoTextView>
                <InfoLineText>승 / 패</InfoLineText>
              </InfoTextView>
              <InfoTextView>
                <InfoLineText>123 / 32</InfoLineText>
              </InfoTextView>
            </InfoLineView>
            <InfoLineView>
              <InfoTextView>
                <InfoLineText>최고 족보 점수</InfoLineText>
              </InfoTextView>
              <InfoTextView>
                <InfoLineText>232</InfoLineText>
              </InfoTextView>
            </InfoLineView>
          </InfoView>
        </InfoContainerView>
        <ButtonView>
          <ButtonContainerView>
          <CustomButton>
              <ButtonText onPress={() => setModalVisible(false)}>
                친구 추가
              </ButtonText>
            </CustomButton>
            <CustomButton dark>
              <ButtonText dark onPress={() => setModalVisible(false)}>
                확인
              </ButtonText>
            </CustomButton>
          </ButtonContainerView>
        </ButtonView>
      </ContainerView>
    </Modal>
  );
};

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

const DividerView = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

const DividerText = styled.Text`
  font-size: 16px;
`;

const DividerLineView = styled.View`
  border: 1px solid grey;
  width: 95%;
  margin: 0 0 0 5%;
  height: 1px;
`;

const InfoView = styled.View`
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const InfoLineView = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

const InfoTextView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  margin: 3% 0 3% 0;
`;

const InfoLineText = styled.Text`
  font-size: 16px;
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

  background:${props => props.dark ? "black" : "white"};
`;

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;

  color:${props => props.dark ? "white" : "black"};

`;
