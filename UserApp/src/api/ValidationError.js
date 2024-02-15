import React from "react";
import { View, Text } from "react-native";

const ValidationError = ({ errors }) => {
  return (
    <View>
      <Text>Validation Error:</Text>
      {errors.map((error, index) => (
        <Text key={index}>{error.message}</Text>
      ))}
    </View>
  );
};

export default ValidationError;
