import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070B1A",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#00FFFF",
    fontSize: 24,
    fontWeight: "700",
  },
});
