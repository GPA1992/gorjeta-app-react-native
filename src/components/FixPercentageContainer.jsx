import React, { useContext } from 'react';
import { View } from 'react-native';
import context from '../contexts/ContextTips';
import { PercentButton, ContainerView, PercentText, SelectedPercentButton, SelectedPercentText,
} from '../utils/Style';
const FixPercentageContainer = () => {
  const { setTipPercent, setCustomTipPercent,
    selectedPercent, setSelectedPercent } = useContext(context);
  const setAllButtonFalse = () => {
    setSelectedPercent({
      fivePercent: false,
      tenPercent: false,
      fifteenPercent: false,
      twentyPercent: false,
    });
  };

  const percentPress = (percentValue) => {
    setTipPercent(percentValue);
    setCustomTipPercent(null);
    setAllButtonFalse();
    switch (percentValue) {
    case 5:
      setSelectedPercent((previousValue) => ({
        ...previousValue,
        fivePercent: true,
      }));
      break;
    case 10:
      setSelectedPercent((previousValue) => ({
        ...previousValue,
        tenPercent: true,
      }));
      break;
    case 15:
      setSelectedPercent((previousValue) => ({
        ...previousValue,
        fifteenPercent: true,
      }));
      break;
    case 20:
      setSelectedPercent((previousValue) => ({
        ...previousValue,
        twentyPercent: true,
      }));
      break;
    default:
      setAllButtonFalse();
    }
  };

  const { fivePercent, tenPercent, fifteenPercent, twentyPercent } = selectedPercent;
  return (
    <View>
      <ContainerView>
        { fivePercent ? (
          <SelectedPercentButton
            onPress={ () => percentPress(5) }
          >
            <SelectedPercentText>5%</SelectedPercentText>
          </SelectedPercentButton>
        ) : (
          <PercentButton
            onPress={ () => percentPress(5) }
          >
            <PercentText>5%</PercentText>
          </PercentButton>
        ) }
        { tenPercent ? (
          <SelectedPercentButton
            onPress={ () => percentPress(10) }
          >
            <SelectedPercentText>10%</SelectedPercentText>
          </SelectedPercentButton>
        ) : (
          <PercentButton
            onPress={ () => percentPress(10) }
          >
            <PercentText>10%</PercentText>
          </PercentButton>
        ) }
      </ContainerView>
      <ContainerView>
        { fifteenPercent ? (
          <SelectedPercentButton
            onPress={ () => percentPress(15) }
          >
            <SelectedPercentText>15%</SelectedPercentText>
          </SelectedPercentButton>
        ) : (
          <PercentButton
            onPress={ () => percentPress(15) }
          >
            <PercentText>15%</PercentText>
          </PercentButton>
        )}

        { twentyPercent ? (
          <SelectedPercentButton
            onPress={ () => percentPress(20) }
          >
            <SelectedPercentText>20%</SelectedPercentText>
          </SelectedPercentButton>
        ) : (
          <PercentButton
            onPress={ () => percentPress(20) }
          >
            <PercentText>20%</PercentText>
          </PercentButton>
        )}
      </ContainerView>
    </View>
  );
}

export default FixPercentageContainer;
