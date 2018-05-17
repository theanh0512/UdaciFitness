import React from "react";
import { Slider, Text, View } from "react-native";

//as we pass in the slider value, onChange and the rest (max, unit, step)
//we can de-structure the arguments
export default function UdaciSlider({ max, unit, step, value, onChange }) {
  return (
    <View>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
}
