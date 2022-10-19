import React, { useContext } from 'react';
import { Keyboard } from 'react-native';
import context from '../../contexts/ContextTips';
import {
  Title, Body, PercentageContainer, Form, Result, TextBox,
  CalculateButton, CalculateText, ValueContainer, ValueText, TextBoxForm, Label, ValueRequest, Warning,
} from '../../utils/Style';
import WarningInputOrderValue from '../../components/WarningInputOrderValue';
import WarningInputPercentage from '../../components/WarningInputPercentage';
import InputOrderValue from '../../components/InputOrderValue';
import InputPercentage from '../../components/PercentageContainer';
import FixPercentageContainer from '../../components/FixPercentageContainer';
import PeopleNumber from '../../components/PeopleNumber';
import WarningPeopleNumber from '../../components/WarningPeopleNumber';

const Main = () => {
  const { orderValue, tipPercent, peopleNumber, tipTotalValue, setTipTotalValue,
    tipPerPeople, setTipPerPerson, ifOrderIsValid, setIfOrderIsValid, ifPercentageIsValid,
    setIfPercentageIsValid, ifNumberOfPeopleIsValid, setIfNumberOfPeopleIsValid,
  } = useContext(context);

  const tipSum = () => {
    const tipResult = (tipPercent / 100) * orderValue;
    setTipTotalValue(tipResult.toFixed(2).replace('.', ','));
    const tipPerPersonCalc = tipResult / peopleNumber;
    setTipPerPerson(tipPerPersonCalc.toFixed(2).replace('.', ','));
    chill();
  };

  const warning = () => {
    if (orderValue === '' || orderValue === null) {
      setIfOrderIsValid(false);
    } else {
      setIfOrderIsValid(true);
    }
    if (tipPercent === '' || tipPercent === null) {
      setIfPercentageIsValid(false);
    } else {
      setIfPercentageIsValid(true);
    }
    if (peopleNumber === '' || peopleNumber === null) {
      setIfNumberOfPeopleIsValid(false);
    } else {
      setIfNumberOfPeopleIsValid(true);
    }
  };

  const chill = () => {
    setIfOrderIsValid(true);
    setIfPercentageIsValid(true);
    setIfNumberOfPeopleIsValid(true);
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
    Keyboard.dismiss();
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

          {ifOrderIsValid ? (
            <InputOrderValue />
          ) : (
            <WarningInputOrderValue />
          )}

        </ValueRequest>

        <TextBoxForm>
          <Label>Quanto quer dar de gorjeta?</Label>
          <Warning>*</Warning>
        </TextBoxForm>

        <PercentageContainer>
          <FixPercentageContainer />
          {ifPercentageIsValid ? (
            <InputPercentage />
          ) : (
            <WarningInputPercentage />
          )}
        </PercentageContainer>

        <TextBoxForm>
          <Label>Quantas Pessoas irão pagar?</Label>
          <Warning>*</Warning>
        </TextBoxForm>

        {ifNumberOfPeopleIsValid ? (
          <PeopleNumber />
        ) : (
          <WarningPeopleNumber />
        )}

        <CalculateButton onPress={ calculatePress }>
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

export default Main;
