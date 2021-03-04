import React from "react";
import styled from "styled-components/native";

export default function (label, info) {
  return (
    <InfoContainerView>
      <DividerView>
        <DividerText>{label}</DividerText>
        <DividerLineView></DividerLineView>
      </DividerView>
      <InfoView>
        <InfoLineView>
          <InfoTextView>
            <InfoLineText>승 / 패</InfoLineText>
          </InfoTextView>
          <InfoTextView>
            <InfoLineText>
              {info.win} / {info.lose}
            </InfoLineText>
          </InfoTextView>
        </InfoLineView>
        <InfoLineView>
          <InfoTextView>
            <InfoLineText>최고 족보 점수</InfoLineText>
          </InfoTextView>
          <InfoTextView>
            <InfoLineText>{info.bestTableScore}</InfoLineText>
          </InfoTextView>
        </InfoLineView>
        {info.rankScore ? (
          <InfoLineView>
            <InfoTextView>
              <InfoLineText>랭크 점수</InfoLineText>
            </InfoTextView>
            <InfoTextView>
              <InfoLineText>{info.rankScore}</InfoLineText>
            </InfoTextView>
          </InfoLineView>
        ) : null}
      </InfoView>
    </InfoContainerView>
  );
}

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
