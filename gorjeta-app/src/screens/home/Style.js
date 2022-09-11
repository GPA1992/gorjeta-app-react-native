import styled from 'styled-components/native';

export const Body = styled.View`
margin-top: 25px;
  font-family: Mulish-Regular;
  width: 100%;
`;

export const Container = styled.View`
  display: flex;
  background-color: #F2F6FF;
  flex-direction: column;
  align-items: center;

`;

export const Header = styled.View`
  display: flex;
  justify-content: center;
  height: 90px;
  margin-top: 28px;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  font-family: Mulish-Bold;
`;

export const Form = styled.View`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #FFFFFF;
  height: 487px;
  width: 327px;
  padding: 16px;
`;

export const InputContainer = styled.View`
  border-radius: 8px;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  background-color: #E6F6F9 ;
  width: 295px;
  height: 42px;
`;

export const InvalidInputContainer = styled.View`
  border-radius: 8px;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  background-color: #E6F6F9 ;
  border: 1px solid #DF4A4A;
  width: 295px;
  height: 42px;
`;

export const Input = styled.View`
  width: 80%;
`;

export const PercentContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const PercentButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border: 1px solid #01A7C2;
  background-color: #FFFFFF;
  height: 42px;
  width: 143px;
  margin: 9px;
  border-radius: 10px;
`;

export const PercentText = styled.Text`
  color: #01A7C2;
  font-family: Mulish-Regular;
  font-size: 14px;
`;

export const SelectedPercentButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border: 1px solid #0E7182;
  background-color: #0E7182;
  height: 42px;
  width: 143px;
  margin: 9px;
  border-radius: 10px;
`;

export const SelectedPercentText = styled.Text`
  color: #FFFFFF;
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
  margin: 37px;
  margin-bottom: 32px;
`;

export const CalculateText = styled.Text`
  color: #FFFFFF;
  font-family: Mulish-Bold;
  font-size: 16px;
`;

export const Footer = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 32px;
`;

export const ValueContainer = styled.View`
  border-radius: 8px;
  align-items: center;
  align-content: center;
  width: 327px;
  height: 42px;
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

export const Symbol = styled.Text`
  margin: 5px;
  font-family: Mulish-Bold;
  font-size: 14px;
`;

export const Label = styled.Text`
  margin: 5px;
  font-family: Mulish-Regular;
  font-size: 14px;
`;
export const Div = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TextBoxForm = styled.View`
width: 295px;;
margin: 5px;
`;

export const TextBox = styled.View`
width: 327px;;
margin-top: 24px;
`;
