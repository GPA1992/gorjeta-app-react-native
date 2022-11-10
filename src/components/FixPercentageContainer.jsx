import React from "react";
import { View } from "react-native";
import { ContainerView } from "../utils/Style";
import PercentageButton from "./PercentageButton";
const FixPercentageContainer = () => {
  const percentageValues = [5, 10, 15, 20];

  return (
    <View>
      <ContainerView>
        {percentageValues.map((p) => (
          <PercentageButton percentage={p} />
        ))}
      </ContainerView>
    </View>
  );
};

export default FixPercentageContainer;
