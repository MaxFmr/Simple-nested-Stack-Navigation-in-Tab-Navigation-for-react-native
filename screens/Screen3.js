import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Screen3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Screen3 component</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("NestedScreen", { msg: "I came from Screen 3" })
        }
      >
        <Text style={{ color: "tomato" }}>Click</Text>
      </TouchableOpacity>
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
