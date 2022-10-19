import styled from 'styled-components/native';

export const Body = styled.View`
display: flex;
  background-color: #F2F6FF;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  font-family: Mulish-Bold;
  margin-top: 35px;
  margin-bottom: 32px;
`;

export const Form = styled.View`
  display: flex;
  align-items: center;
  border-radius: 24px;
  background-color: #FFFFFF;
  height: 487px;
  width: 327px;
  padding: 16px;
  margin-bottom: 24px;
`;

export const ValueRequest = styled.View`
  margin-bottom: 32px;
`;

export const TextBoxForm = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 295px;
  margin-bottom: 8px;
`;

export const TextBox = styled.View`
  width: 327px;
  margin-bottom: 8px;
`;
export const Label = styled.Text`
  font-family: Mulish-Regular;
  font-size: 14px;
`;

export const Warning = styled.Text`
  font-family: Mulish-Bold;
  font-size: 14px;
  color: #DF4A4A;
`;

export const InputContainer = styled.View`
  border-radius: 8px;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: row;
  background-color: #E6F6F9 ;
  margin-bottom: 8px;
  width: 295px;
  height: 42px;
`;

export const WarningInputContainer = styled.View`
  border-radius: 8px;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: row;
  background-color: #E6F6F9 ;
  border: 1px solid #DF4A4A;
  margin-bottom: 8px;
  width: 295px;
  height: 42px;
`;

export const Symbol = styled.Text`
  font-family: Mulish-Bold;
  font-size: 14px;
`;

export const Input = styled.View`
  width: 80%;
`;

export const ContainerView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const PercentageContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const SelectedPercentButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border: 1px solid #0E7182;
  background-color: #0E7182;
  height: 42px;
  width: 143px;
  margin-right: 9px;
  margin-bottom: 8px;
  border-radius: 10px;
`;

export const SelectedPercentText = styled.Text`
  color: #FFFFFF;
  font-family: Mulish-Regular;
  font-size: 14px;
`;

export const PercentButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border: 1px solid #01A7C2;
  background-color: #FFFFFF;
  height: 42px;
  width: 143px;
  margin-right: 9px;
  margin-bottom: 8px;
  border-radius: 10px;
`;

export const PercentText = styled.Text`
  color: #01A7C2;
  font-family: Mulish-Regular;
  font-size: 14px;
`;

export const CalculateButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border: 1px solid #01A7C2;
  background-color:#01A7C2;
  height: 42px;
  width: 160px;
  border-radius: 10px;
  margin-top: 29px;
`;

export const CalculateText = styled.Text`
  color: #FFFFFF;
  font-family: Mulish-Bold;
  font-size: 16px;
`;

export const Result = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
`;

export const ValueContainer = styled.View`
  border-radius: 8px;
  align-items: center;
  align-content: center;
  width: 327px;
  height: 42px;
  margin-bottom: 24px;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  background-color:  #01A7C2 ;
`;

export const ValueText = styled.Text`
  color: #FFFFFF;
  font-family: Mulish-Bold;
  font-size: 14px;
`;
