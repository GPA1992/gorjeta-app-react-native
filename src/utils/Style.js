import styled from "styled-components/native";

export const Body = styled.View`
  display: flex;
  background-color: #f2f6ff;
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
  background-color: #ffffff;
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
  color: #df4a4a;
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
  background-color: #e6f6f9;
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
  background-color: #e6f6f9;
  border: 1px solid #df4a4a;
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
  flex-wrap: wrap;
  margin-bottom: 8px;
  justify-content: space-between;
`;

export const PercentageContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const CalculateButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border: 1px solid #01a7c2;
  background-color: #01a7c2;
  height: 42px;
  width: 160px;
  border-radius: 10px;
  margin-top: 29px;
`;

export const CalculateText = styled.Text`
  color: #ffffff;
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
  background-color: #01a7c2;
`;

export const ValueText = styled.Text`
  color: #ffffff;
  font-family: Mulish-Bold;
  font-size: 14px;
`;
