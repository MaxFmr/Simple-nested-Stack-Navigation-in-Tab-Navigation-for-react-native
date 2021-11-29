import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NestedScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text>{route.params.msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
