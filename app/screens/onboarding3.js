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

export default function Onboarding3() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/onboarding2.jpg")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.cardWrapper}>
        <LinearGradient colors={["#050816", "#0A1023"]} style={styles.card}>
          <Text style={styles.title}>Grouping</Text>

          <Text style={styles.subtitle}>
            Create or join groups to collaborate,share
            {"\n"}ideas and say connected with your peers.
          </Text>

          <View style={styles.bottomRow}>
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={() => router.push("/screens/logwithEmail")}
            >
              <Text style={styles.getStartedText}>Get Started</Text>
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
    height: height * 0.62,
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
  getStartedButton: {
    width: 350,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#00FFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  getStartedText: {
    width: 92,
    height: 16,
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
    color: "#000",
  },
});
