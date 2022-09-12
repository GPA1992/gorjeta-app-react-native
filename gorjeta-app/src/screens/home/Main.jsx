import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CurrencyInput from 'react-native-currency-input';
import {
  Title, InputContainer, Input,
  Body, PercentageContainer, PercentButton, Form,
  Symbol, Div, Result, TextBox,
  CalculateButton, PercentText, CalculateText,
  ValueContainer, ValueText, TextBoxForm, SelectedPercentButton,
  SelectedPercentText, Label, ValueRequest, Warning, WarningInputContainer,
} from './Style';

export default function Main() {
  const [orderValue, setOrderValue] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [customTipPercent, setcustomTipPercent] = useState('');
  const [peopleNumber, setPeopleNumber] = useState('');
  const [tipTotalValue, setTipTotalValue] = useState('');
  const [tipPerPeople, setTipPerPerson] = useState('');
  const [fivePercent, setfivePercent] = useState(false);
  const [tenPercent, setTenPercent] = useState(false);
  const [fifteenPercent, setfifteenPercent] = useState(false);
  const [twentyPercent, settwentyPercent] = useState(false);
  const [ifOrderIsValid, setIfOrderIsValid] = useState(true);
  const [ifPercentageIsValid, setIfPercentageIsValid] = useState(true);
  const [ifNumberOfPeopleIsValid, setifNumberOfPeopleIsValid] = useState(true);

  const tipSum = () => {
    const tipResult = (tipPercent / 100) * orderValue;
    setTipTotalValue(tipResult.toFixed(2).replace('.', ','));
    const tipPerPersonCalc = tipResult / peopleNumber;
    setTipPerPerson(tipPerPersonCalc.toFixed(2).replace('.', ','));
    chill();
  };

  const setAllButtonFalse = () => {
    setfivePercent(false);
    setTenPercent(false);
    setfifteenPercent(false);
    settwentyPercent(false);
  };

  const percentPress = (percentValue) => {
    setTipPercent(percentValue);
    setcustomTipPercent(null);
    setAllButtonFalse();
    switch (percentValue) {
      case 5:
        setfivePercent(true);
        break;
      case 10:
        setTenPercent(true);
        break;
      case 15:
        setfifteenPercent(true);
        break;
      case 20:
        settwentyPercent(true);
        break;
      default:
        setAllButtonFalse();
    }
  };

  const customPercentage = (percentValue) => {
    setTipPercent(percentValue);
    setcustomTipPercent(percentValue);
  };

  const warning = () => {
    if (orderValue === '' || orderValue === null) setIfOrderIsValid(false);
    if (tipPercent === '' || tipPercent === null) setIfPercentageIsValid(false);
    if (peopleNumber === '' || peopleNumber === null) setifNumberOfPeopleIsValid(false);
  };

  const chill = () => {
    setIfOrderIsValid(true);
    setIfPercentageIsValid(true);
    setifNumberOfPeopleIsValid(true);
  };

  const calculatePress = () => {
    const errors = [
      orderValue > 0,
      tipPercent > 0,
      peopleNumber > 0,
    ];
    const ifIsValid = errors.every((error) => error === true);
    switch (ifIsValid) {
      case false:
        warning();
        break;
      default:
        tipSum();
    }
  };

  return (
    <Body>
      <Title>Gorjetas</Title>
      <Form>
        <ValueRequest>
          <TextBoxForm>
            <Label>Digite o valor total do pedido</Label>
            <Warning>*</Warning>
          </TextBoxForm>

          { ifOrderIsValid ? (
            <InputContainer>
              <Symbol>R$</Symbol>
              <Input>
                <CurrencyInput
                  placeholder="Digite o valor aqui"
                  value={orderValue}
                  onChangeValue={setOrderValue}
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
          ) : (
            <WarningInputContainer>
              <Symbol>R$</Symbol>
              <Input>
                <CurrencyInput
                  placeholder="Digite o valor aqui"
                  value={orderValue}
                  onChangeValue={setOrderValue}
                  prefix=""
                  delimiter="."
                  separator=","
                  precision={2}
                  style={{
                    textAlign: 'right',
                  }}
                />
              </Input>
            </WarningInputContainer>
          ) }
        </ValueRequest>
        <TextBoxForm>
          <Label>Quanto quer dar de gorjeta?</Label>
          <Warning>*</Warning>
        </TextBoxForm>
        <PercentageContainer>
          <Div>
            { fivePercent ? (
              <SelectedPercentButton
                onPress={() => percentPress(5)}
              >
                <SelectedPercentText>5%</SelectedPercentText>
              </SelectedPercentButton>
            ) : (
              <PercentButton
                onPress={() => percentPress(5)}
              >
                <PercentText>5%</PercentText>
              </PercentButton>
            ) }
            { tenPercent ? (
              <SelectedPercentButton
                onPress={() => percentPress(10)}
              >
                <SelectedPercentText>10%</SelectedPercentText>
              </SelectedPercentButton>
            ) : (
              <PercentButton
                onPress={() => percentPress(10)}
              >
                <PercentText>10%</PercentText>
              </PercentButton>
            ) }
          </Div>
          <Div>
            { fifteenPercent ? (
              <SelectedPercentButton
                onPress={() => percentPress(15)}
              >
                <SelectedPercentText>15%</SelectedPercentText>
              </SelectedPercentButton>
            ) : (
              <PercentButton
                onPress={() => percentPress(15)}
              >
                <PercentText>15%</PercentText>
              </PercentButton>
            )}

            { twentyPercent ? (
              <SelectedPercentButton
                onPress={() => percentPress(20)}
              >
                <SelectedPercentText>20%</SelectedPercentText>
              </SelectedPercentButton>
            ) : (
              <PercentButton
                onPress={() => percentPress(20)}
              >
                <PercentText>20%</PercentText>
              </PercentButton>
            )}
          </Div>

          { ifPercentageIsValid ? (
            <InputContainer>
              <Symbol>%</Symbol>
              <Input>
                <CurrencyInput
                  maxValue={100}
                  placeholder="Personalize aqui"
                  value={customTipPercent}
                  onChangeValue={(value) => customPercentage(value)}
                  onChange={setAllButtonFalse}
                  prefix=""
                  separator=","
                  precision={0}
                  suffix=""
                  style={{ textAlign: 'right' }}
                />
              </Input>
            </InputContainer>
          ) : (
            <WarningInputContainer>
              <Symbol>%</Symbol>
              <Input>
                <CurrencyInput
                  maxValue={100}
                  placeholder="Personalize aqui"
                  value={customTipPercent}
                  onChangeValue={(value) => customPercentage(value)}
                  onChange={setAllButtonFalse}
                  prefix=""
                  separator=","
                  precision={0}
                  suffix=""
                  style={{ textAlign: 'right' }}
                />
              </Input>
            </WarningInputContainer>
          )}
        </PercentageContainer>
        <TextBoxForm>
          <Label>Quantas Pessoas irão pagar?</Label>
          <Warning>*</Warning>
        </TextBoxForm>
        { ifNumberOfPeopleIsValid ? (
          <InputContainer>
            <Ionicons name="person-outline" size={16} color="#01A7C2" />
            <Input>
              <CurrencyInput
                placeholder="Digite o valor"
                value={peopleNumber}
                onChangeValue={setPeopleNumber}
                prefix=""
                delimiter=""
                separator=""
                precision={0}
                style={{ textAlign: 'right' }}
              />
            </Input>
          </InputContainer>
        ) : (
          <WarningInputContainer>
            <Ionicons name="person-outline" size={16} color="#01A7C2" />
            <Input>
              <CurrencyInput
                placeholder="Digite o valor"
                value={peopleNumber}
                onChangeValue={setPeopleNumber}
                prefix=""
                delimiter=""
                separator=""
                precision={0}
                style={{ textAlign: 'right' }}
              />
            </Input>
          </WarningInputContainer>
        )}
        <CalculateButton
          onPress={calculatePress}
        >
          <CalculateText>Calcular</CalculateText>
        </CalculateButton>
      </Form>
      <Result>
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
      </Result>
    </Body>
  );
}
