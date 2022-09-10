import {
  Button,
} from 'react-native';
import React, { useState } from 'react';
import CurrencyInput from 'react-native-currency-input';
import {
  Title, InputContainer, Input, Header,
  Body, PercentContainer, Percent, Form,
  Paragraph, Div,
} from './Style';

export default function Main() {
  const [requestValue, setRequestValue] = useState('');
  const [tipPercent, getTipPercent] = useState('');
  const [peopleNumber, getPeopleNumber] = useState('');
  const [tipTotalValue, getTipTotalValue] = useState('');
  const [tipPerPeople, getTipPerPerson] = useState('');

  const tipSum = () => {
    const tipResult = (tipPercent / 100) * requestValue;
    getTipTotalValue(tipResult.toFixed(2).replace('.', ','));
    const tipPerPersonCalc = tipResult / peopleNumber;
    getTipPerPerson(tipPerPersonCalc.toFixed(2).replace('.', ','));
  };

  return (
    <Body>
      <Header>
        <Title>Gorjetas</Title>
      </Header>
      <Form>
        <Paragraph>Digite o valor total do pedido</Paragraph>
        <InputContainer>
          <Paragraph>R$</Paragraph>
          <Input>
            <CurrencyInput
              placeholder="0,00"
              value={requestValue}
              onChangeValue={setRequestValue}
              prefix=""
              delimiter="."
              separator=","
              precision={2}
              style={{
                textAlign: 'right',
                paddingRight: 5,
              }}
            />
          </Input>
        </InputContainer>
        <Paragraph>Quanto quer dar de gorjeta?</Paragraph>
        <PercentContainer>
          <Percent
            title="5%"
            onPress={() => getTipPercent(5)}
          />
          <Percent
            title="10%"
            onPress={() => getTipPercent(10)}
          />

          <Percent
            title="15%"
            onPress={() => getTipPercent(15)}
          />

          <Percent
            title="20%"
            onPress={() => getTipPercent(20)}
          />
          <CurrencyInput
            maxValue={100}
            placeholder="Personalize aqui"
            value={tipPercent}
            onChangeValue={getTipPercent}
            prefix=""
            separator=","
            precision={2}
            suffix=" %"
            style={{
              borderWidth: 1,
              borderColor: '#44444',
              TitleAlign: 'right',
              paddingRight: 5,
            }}
          />
        </PercentContainer>

        <Paragraph>Quantas Pessoas irão pagar?</Paragraph>
        <CurrencyInput
          placeholder="Digite o valor"
          value={peopleNumber}
          onChangeValue={getPeopleNumber}
          prefix=""
          delimiter=""
          separator=""
          precision={0}
          style={{
            borderWidth: 1,
            borderColor: '#44444',
            textAlign: 'right',
            paddingRight: 5,
          }}
        />

        <Button
          title="Calcular"
          onPress={tipSum}
        />
      </Form>
      <Div>
        <Paragraph>Valor total da gorjeta</Paragraph>
        <Paragraph>{`R$ ${tipTotalValue}`}</Paragraph>
        <Paragraph>Valor que cada pessoa ira pagar de gorjeta</Paragraph>
        <Paragraph>{`R$ ${tipPerPeople}`}</Paragraph>
      </Div>
    </Body>
  );
}
