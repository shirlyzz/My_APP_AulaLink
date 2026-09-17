import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <text style={styles.text}>Hello, word </text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d859c7",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
