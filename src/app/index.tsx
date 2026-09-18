import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shirley Prieto</Text>
      <Link href="/about" style={styles.button}>
        Go to About Us
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    color: "#ebafcd",
    backgroundColor: "#7a1a72",
  },
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
