import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CurrencyInput from 'react-native-currency-input';
import {
  Title, InputContainer, Input, Header,
  Body, PercentContainer, PercentButton, Form,
  Symbol, Div, Container, Footer, TextBox,
  CalculateButton, PercentText, CalculateText,
  ValueContainer, ValueText, TextBoxForm, SelectedPercentButton,
  SelectedPercentText, Label,
} from './Style';

export default function Main() {
  const [requestValue, setRequestValue] = useState('');
  const [tipPercent, getTipPercent] = useState('');
  const [customTipPercent, getcustomTipPercent] = useState('');
  const [peopleNumber, getPeopleNumber] = useState('');
  const [tipTotalValue, getTipTotalValue] = useState('');
  const [tipPerPeople, getTipPerPerson] = useState('');
  const [fivePercent, getfivePercent] = useState(false);
  const [tenPercent, getTenPercent] = useState(false);
  const [fifteenPercent, getfifteenPercent] = useState(false);
  const [Percent, gettwentyPercent] = useState(false);

  const tipSum = () => {
    const tipResult = (tipPercent / 100) * requestValue;
    getTipTotalValue(tipResult.toFixed(2).replace('.', ','));
    const tipPerPersonCalc = tipResult / peopleNumber;
    getTipPerPerson(tipPerPersonCalc.toFixed(2).replace('.', ','));
  };

  const customTipSum = () => {
    const tipResult = (customTipPercent / 100) * requestValue;
    getTipTotalValue(tipResult.toFixed(2).replace('.', ','));
    const tipPerPersonCalc = tipResult / peopleNumber;
    getTipPerPerson(tipPerPersonCalc.toFixed(2).replace('.', ','));
  };

  const getAllButtonFlase = () => {
    getfivePercent(false);
    getTenPercent(false);
    getfifteenPercent(false);
    gettwentyPercent(false);
  };

  const handlePress = (percentValue) => {
    getTipPercent(percentValue);
    getcustomTipPercent(null);
    getAllButtonFlase();
    switch (percentValue) {
      case 5:
        getfivePercent(true);
        break;
      case 10:
        getTenPercent(true);
        break;
      case 15:
        getfifteenPercent(true);
        break;
      case 20:
        gettwentyPercent(true);
        break;
      default:
        getfivePercent(false);
    }
  };

  const calculatePress = () => {
    if (customTipPercent > 0) {
      return customTipSum();
    }
    return tipSum();
  };

  return (
    <Body>
      <Container>
        <Header>
          <Title>Gorjetas</Title>
        </Header>
        <Form>
          <TextBoxForm>
            <Label>Digite o valor total do pedido</Label>
          </TextBoxForm>
          <InputContainer>
            <Symbol>R$</Symbol>
            <Input>
              <CurrencyInput
                placeholder="Digite o valor aqui"
                value={requestValue}
                onChangeValue={setRequestValue}
                prefix=""
                delimiter="."
                separator=","
                precision={2}
                style={{
                  textAlign: 'right',
                }}
              />
            </Input>
          </InputContainer>
          <TextBoxForm>
            <Label>Quanto quer dar de gorjeta?</Label>
          </TextBoxForm>
          <PercentContainer>
            <Div>

              { fivePercent ? (
                <SelectedPercentButton
                  onPress={() => handlePress(5)}
                >
                  <SelectedPercentText>5%</SelectedPercentText>
                </SelectedPercentButton>
              ) : (
                <PercentButton
                  onPress={() => handlePress(5)}
                >
                  <PercentText>5%</PercentText>
                </PercentButton>
              ) }

              { tenPercent ? (
                <SelectedPercentButton
                  onPress={() => handlePress(10)}
                >
                  <SelectedPercentText>10%</SelectedPercentText>
                </SelectedPercentButton>
              ) : (
                <PercentButton
                  onPress={() => handlePress(10)}
                >
                  <PercentText>10%</PercentText>
                </PercentButton>
              ) }
            </Div>

            <Div>
              { fifteenPercent ? (
                <SelectedPercentButton
                  onPress={() => handlePress(15)}
                >
                  <SelectedPercentText>15%</SelectedPercentText>
                </SelectedPercentButton>
              ) : (
                <PercentButton
                  onPress={() => handlePress(15)}
                >
                  <PercentText>15%</PercentText>
                </PercentButton>
              )}

              { Percent ? (
                <SelectedPercentButton
                  onPress={() => handlePress(20)}
                >
                  <SelectedPercentText>20%</SelectedPercentText>
                </SelectedPercentButton>
              ) : (
                <PercentButton
                  onPress={() => handlePress(20)}
                >
                  <PercentText>20%</PercentText>
                </PercentButton>
              )}

            </Div>
            <InputContainer>
              <Symbol>%</Symbol>
              <Input>
                <CurrencyInput
                  maxValue={100}
                  placeholder="Personalize aqui"
                  value={customTipPercent}
                  onChangeValue={getcustomTipPercent}
                  onChange={getAllButtonFlase}
                  prefix=""
                  separator=","
                  precision={0}
                  suffix=""
                  style={{ textAlign: 'right' }}
                />
              </Input>
            </InputContainer>
          </PercentContainer>
          <TextBoxForm>
            <Label>Quantas Pessoas irão pagar?</Label>
          </TextBoxForm>
          <InputContainer>
            <Ionicons name="person-outline" size={16} color="#01A7C2" />
            <Input>
              <CurrencyInput
                placeholder="Digite o valor"
                value={peopleNumber}
                onChangeValue={getPeopleNumber}
                prefix=""
                delimiter=""
                separator=""
                precision={0}
                style={{ textAlign: 'right' }}
              />
            </Input>
          </InputContainer>
          <CalculateButton
            onPress={calculatePress}
          >
            <CalculateText>Calcular</CalculateText>
          </CalculateButton>
        </Form>
        <Footer>

          <TextBox>
            <Label>Valor total da gorjeta</Label>
          </TextBox>
          <ValueContainer>
            <ValueText>R$</ValueText>
            <ValueText>{tipTotalValue}</ValueText>
          </ValueContainer>

          <TextBox>
            <Label>Valor que cada pessoa ira pagar de gorjeta</Label>
          </TextBox>
          <ValueContainer>
            <ValueText>R$</ValueText>
            <ValueText>{tipPerPeople}</ValueText>
          </ValueContainer>

        </Footer>
      </Container>
    </Body>
  );
}
