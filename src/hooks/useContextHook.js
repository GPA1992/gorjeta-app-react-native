import { useState } from 'react';

const useContextHook = () => {
  const [orderValue, setOrderValue] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [customTipPercent, setCustomTipPercent] = useState('');
  const [peopleNumber, setPeopleNumber] = useState('');
  const [tipTotalValue, setTipTotalValue] = useState('');
  const [tipPerPeople, setTipPerPerson] = useState('');
  const [selectedPercent, setSelectedPercent] = useState({
    fivePercent: false,
    tenPercent: false,
    fifteenPercent: false,
    twentyPercent: false,
  });
  const [ifOrderIsValid, setIfOrderIsValid] = useState(true);
  const [ifPercentageIsValid, setIfPercentageIsValid] = useState(true);
  const [ifNumberOfPeopleIsValid, setIfNumberOfPeopleIsValid] = useState(true);

  return {
    orderValue,
    setOrderValue,
    tipPercent,
    setTipPercent,
    customTipPercent,
    setCustomTipPercent,
    peopleNumber,
    setPeopleNumber,
    tipTotalValue,
    setTipTotalValue,
    tipPerPeople,
    setTipPerPerson,
    ifOrderIsValid,
    setIfOrderIsValid,
    ifPercentageIsValid,
    setIfPercentageIsValid,
    ifNumberOfPeopleIsValid,
    setIfNumberOfPeopleIsValid,
    selectedPercent,
    setSelectedPercent,
  };
};

export default useContextHook;
