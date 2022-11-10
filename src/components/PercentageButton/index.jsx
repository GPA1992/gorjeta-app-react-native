import { useContext } from "react";
import context from "../../contexts/ContextTips";
import { PercentButton, PercentText } from "./styles";

export default function PercentageButton({ percentage }) {
  const {
    selectedPercent,
    setSelectedPercent,
    setTipPercent,
    setCustomTipPercent,
  } = useContext(context);

  const setAllButtonFalse = () => {
    setSelectedPercent(0);
  };

  const selected = selectedPercent === percentage;

  const percentPress = (percentValue) => {
    setTipPercent(percentValue);
    setCustomTipPercent(null);
    setAllButtonFalse();
    setSelectedPercent(percentValue);
  };

  return (
    <PercentButton onPress={() => percentPress(percentage)} selected={selected}>
      <PercentText selected={selected}>{percentage}%</PercentText>
    </PercentButton>
  );
}
