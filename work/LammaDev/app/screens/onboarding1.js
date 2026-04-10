import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Onboarding1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/onboarding1.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.cardWrapper}>
        <LinearGradient colors={["#050816", "#0A1023"]} style={styles.card}>
          <Text style={styles.title}>Meet Classmate's</Text>

          <Text style={styles.subtitle}>
            Say hello to your classmates! Chat, collaborate,
            {"\n"}and grow together
          </Text>

          <View style={styles.bottomRow}>
            <View style={styles.dots}>
              <View style={styles.dotActive} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/screens/onboarding2")}
            >
              <Image
                source={require("../../assets/images/arrow.png")}
                style={styles.arrowImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  image: {
    width: width,
    height: height * 0.72,
  },

  cardWrapper: {
    position: "absolute",
    bottom: 0,
    width: width,
    height: height * 0.3,
    paddingTop: 1, // border thickness
    backgroundColor: "#00FFFF", // border color
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 24,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 26,
    color: "#00FFFF",
    textAlign: "center",
    fontWeight: "700",
  },

  subtitle: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 22,
    marginTop: -10,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dots: {
    flexDirection: "row",
    alignItems: "center",
  },

  dotActive: {
    width: 38,
    height: 5,
    borderRadius: 10,
    backgroundColor: "#00FFFF",
    marginRight: 8,
  },

  dot: {
    width: 9,
    height: 9,
    borderRadius: 10,
    backgroundColor: "#f6f0f0ef",

    marginRight: 8,
  },

  button: {
    width: 58,
    height: 58,
    borderRadius: 10,
    backgroundColor: "#00FFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#00FFFF",
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 10,
  },

  arrowImage: {
    width: 30,
    height: 30,
  },
});
