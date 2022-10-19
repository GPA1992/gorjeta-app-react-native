import React, { useContext } from 'react';
import CurrencyInput from 'react-native-currency-input';
import { Ionicons } from '@expo/vector-icons';
import context from '../contexts/ContextTips';
import { InputContainer, Input } from '../utils/Style';

const PeopleNumber = () => {
  const { peopleNumber, setPeopleNumber } = useContext(context);
  return (
    <InputContainer>
      <Ionicons name="person-outline" size={ 16 } color="#01A7C2" />
      <Input>
        <CurrencyInput
          placeholder="Digite o valor"
          value={ peopleNumber }
          onChangeValue={ setPeopleNumber }
          prefix=""
          delimiter=""
          separator=""
          precision={ 0 }
          style={ {
            textAlign: 'right',
            fontFamily: 'Mulish-Regular',
          } }
        />
      </Input>
    </InputContainer>
  );
}

export default PeopleNumber;
