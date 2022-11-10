import React, { useContext } from "react";
import CurrencyInput from "react-native-currency-input";
import context from "../contexts/ContextTips";
import { Input, Symbol, InputContainer } from "../utils/Style";

const InputPercentage = () => {
  const {
    setCustomTipPercent,
    setTipPercent,
    customTipPercent,
    setSelectedPercent,
    selectedPercent,
  } = useContext(context);

  const setAllButtonFalse = () => {
    setSelectedPercent({
      fivePercent: false,
      tenPercent: false,
      fifteenPercent: false,
      twentyPercent: false,
    });
  };

  const customPercentage = (percentValue) => {
    setTipPercent(percentValue);
    setCustomTipPercent(percentValue);
  };

  return (
    <InputContainer>
      <Symbol>%</Symbol>
      <Input>
        <CurrencyInput
          maxValue={100}
          placeholder="Personalize aqui"
          value={selectedPercent > 0 ? selectedPercent : customTipPercent}
          onChangeValue={(value) => customPercentage(value)}
          onChange={setAllButtonFalse}
          prefix=""
          separator=","
          precision={0}
          suffix=""
          style={{
            textAlign: "right",
            fontFamily: "Mulish-Regular",
          }}
        />
      </Input>
    </InputContainer>
  );
};

export default InputPercentage;
