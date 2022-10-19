import React, { useContext } from 'react';
import CurrencyInput from 'react-native-currency-input';
import context from '../contexts/ContextTips';
import { Input, Symbol, WarningInputContainer } from '../utils/Style';

const WarningInputOrderValue = () => {
  const { orderValue, setOrderValue } = useContext(context);

  return (
    <WarningInputContainer>
      <Symbol>R$</Symbol>
      <Input>
        <CurrencyInput
          placeholder="Digite o valor aqui"
          value={ orderValue }
          onChangeValue={ setOrderValue }
          prefix=""
          delimiter="."
          separator=","
          precision={ 2 }
          style={ {
            textAlign: 'right',
            fontFamily: 'Mulish-Regular',
          } }
        />
      </Input>
    </WarningInputContainer>
  );
}

export default WarningInputOrderValue;
