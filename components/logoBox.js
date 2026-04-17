import { Image, StyleSheet, View } from "react-native";

export default function LogoBox() {
  return (
    <View style={styles.logoBox}>
      <Image
        source={require("../assets/images/person.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoBox: {
    width: 50,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: "#12191a",
    borderWidth: 1,
    borderColor: "#2A3A3B",
    marginTop: 60,
    position: "absolute",
    top: 0,
  },
  logo: {
    width: 24,
    height: 24,
  },
});
