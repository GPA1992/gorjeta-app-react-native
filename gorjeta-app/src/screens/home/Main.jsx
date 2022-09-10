import {
  View, Button, Text,
} from 'react-native';
import React, { useState } from 'react';
import CurrencyInput from 'react-native-currency-input';
import {
  Container, Title, InputContainer, Input,
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
    <View>
      <Container>

        <Title>Gorjetas</Title>
        <View>

          <Text>Digite o valor total do pedido</Text>

          <InputContainer>
            <Text>R$</Text>
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
                  TitleAlign: 'right',
                  paddingRight: 5,
                }}
              />
            </Input>
          </InputContainer>

          <Text>Quanto quer dar de gorjeta?</Text>
          <Button
            title="5%"
            onPress={() => getTipPercent(5)}
          />
          <Button
            title="10%"
            onPress={() => getTipPercent(10)}
          />

          <Button
            title="15%"
            onPress={() => getTipPercent(15)}
          />

          <Button
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
        </View>
        <Text>Quantas Pessoas irão pagar?</Text>
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
        <Text>Valor total da gorjeta</Text>
        <Text>{`R$ ${tipTotalValue}`}</Text>
        <Text>Valor que cada pessoa ira pagar de gorjeta</Text>
        <Text>{`R$ ${tipPerPeople}`}</Text>
      </Container>
    </View>
  );
}
