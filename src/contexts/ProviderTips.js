import React from 'react';
import PropTypes from 'prop-types';
import ContextRecipe from './ContextTips';
import useContextHook from '../hooks/useContextHook';

function Provider({ children }) {
  const {
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
    fivePercent,
    setFivePercent,
    tenPercent,
    setTenPercent,
    fifteenPercent,
    setFifteenPercent,
    twentyPercent,
    setTwentyPercent,
    ifOrderIsValid,
    setIfOrderIsValid,
    ifPercentageIsValid,
    setIfPercentageIsValid,
    ifNumberOfPeopleIsValid,
    setIfNumberOfPeopleIsValid,
    selectedPercent,
    setSelectedPercent,
  } = useContextHook();

  const value = {
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
    fivePercent,
    setFivePercent,
    tenPercent,
    setTenPercent,
    fifteenPercent,
    setFifteenPercent,
    twentyPercent,
    setTwentyPercent,
    ifOrderIsValid,
    setIfOrderIsValid,
    ifPercentageIsValid,
    setIfPercentageIsValid,
    ifNumberOfPeopleIsValid,
    setIfNumberOfPeopleIsValid,
    selectedPercent,
    setSelectedPercent,
  };

  return (
    <ContextRecipe.Provider value={ value }>
      {children}
    </ContextRecipe.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
