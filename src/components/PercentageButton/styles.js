import styled from "styled-components/native";

export const PercentButton = styled.TouchableOpacity`
  width: 48%;
  height: 42px;
  border: 1px solid ${({ selected }) => (selected ? "#0e7182" : "#01a7c2")};
  background-color: ${(props) => (props.selected ? "#0e7182" : "#ffffff")};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const PercentText = styled.Text`
  color: ${({ selected }) => (selected ? "#ffffff" : "#01a7c2")};
  font-family: Mulish-Regular;
  font-size: 14px;
`;
