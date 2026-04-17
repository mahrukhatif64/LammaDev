import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import LogoBox from "../../components/logoBox";

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUp() {
  const router = useRouter();
  return (
    <LinearGradient colors={["#050816", "#0A1023"]} style={styles.container}>
      {/* Toggle top-right */}
      <View style={styles.langToggle}>
        <TouchableOpacity style={[styles.langBtn, styles.langActive]}>
          <Text style={styles.langActiveText}>En</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.langBtn}>
          <Text style={styles.langText}>Ar</Text>
        </TouchableOpacity>
      </View>

      <LogoBox />

      {/* Title */}
      <Text style={styles.appTitle}>Create Account</Text>

      {/* Subtitle */}
      <Text style={styles.appSubtitle}>
        Join the community to reconnect and organize
      </Text>

      {/* Card */}
      <View style={styles.card}>
        <View style={styles.profilePicContainer}>
          <TouchableOpacity style={styles.profilePicCircle}>
            <Image
              source={require("../../assets/images/profile.png")}
              style={{ width: 28, height: 28 }}
            />
          </TouchableOpacity>
          <Text style={styles.profilePicText}>
            Upload profile picture{"\n"}(optional)
          </Text>
        </View>

        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter full name"
          placeholderTextColor="#555"
          style={styles.input}
        />

        {/* Phone Number */}
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneContainer}>
          <View style={styles.flagBox}>
            <Text style={styles.flag}>🇺🇸</Text>
            <Text style={styles.code}>+1</Text>
          </View>
          <TextInput
            placeholder="Enter phone number"
            placeholderTextColor="#555"
            style={styles.phoneInput}
            keyboardType="phone-pad"
          />
        </View>

        <Text style={styles.label}>Email Address</Text>
        <View style={styles.passwordWrap}>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#555"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.passwordInput}
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordWrap}>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#555"
            secureTextEntry
            style={styles.passwordInput}
          />
          <Ionicons name="eye-off-outline" size={16} color="#777" />
        </View>

        {/* Signup Button */}
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => router.push("/screens/chooseRoll")}
        >
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

        {/* OR */}
        <View style={styles.orRow}>
          <View style={styles.line} />
          <View style={styles.orBox}>
            <Text style={styles.orText}>Or Continue with</Text>
          </View>
          <View style={styles.line} />
        </View>

        {/* Social */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <FontAwesome name="google" size={18} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <FontAwesome name="apple" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* ✅ FIX 3: Text "Already have an account? Login" */}
        <Text style={styles.signupText}>
          Already have an account?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => router.push("/screens/login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "1%",
    justifyContent: "center",
  },

  langToggle: {
    flexDirection: "row",
    alignSelf: "flex-end",
    borderWidth: 0.5, // ✅ Figma: border 0.5px
    borderColor: "#00FFFF",
    borderRadius: 30,
    overflow: "hidden",
    position: "absolute",
    top: 20,
    right: 20,
    marginTop: 15,
    width: 140, // ✅ Figma: width 140
    height: 45, // ✅ Figma: height 45
  },

  langBtn: {
    width: 70, // ✅ Figma: width 70
    height: 45, // ✅ Figma: height 45
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },

  langActive: {
    backgroundColor: "#00FFFF",
    borderTopLeftRadius: 30, // ✅ Figma: border-top-left-radius
    borderBottomLeftRadius: 30, // ✅ Figma: border-bottom-left-radius
  },

  langText: {
    color: "#FFFFFF", // ✅ Figma: background #FFFFFF
    fontSize: 14, // ✅ Figma: font-size 14px
    fontWeight: "500", // ✅ Figma: font-weight 500
    fontFamily: "Poppins", // ✅ Figma: font-family Poppins
    lineHeight: 14, // ✅ Figma: line-height 100%
    opacity: 1, // ✅ Figma: opacity 1
  },

  langActiveText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 14, // ✅ Figma: font-size 14px
    fontFamily: "Poppins", // ✅ Figma: font-family Poppins
  },
  // logoBox: {
  //   width: 38,
  //   height: 38,
  //   alignSelf: "center",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 7,
  //   backgroundColor: "#1C2A2B",
  //   borderWidth: 1,
  //   borderColor: "#2A3A3B",
  //   marginTop: 15,
  // },

  appTitle: {
    color: "#00FFFF", // ✅ Figma: background #00FFFF
    fontSize: 22, // ✅ Figma: font-size 22px
    fontWeight: "600", // ✅ Figma: font-weight 600 SemiBold
    fontFamily: "Poppins", // ✅ Figma: font-family Poppins
    textAlign: "center",
    lineHeight: 22, // ✅ Figma: line-height 100%
    width: 176, // ✅ Figma: width 176
    alignSelf: "center",
    marginTop: 150,
  },

  appSubtitle: {
    color: "#FFFFFF", // ✅ Figma: background #FFFFFF
    textAlign: "center", // ✅ Figma: text-align center
    fontSize: 14, // ✅ Figma: font-size 14px
    fontWeight: "400", // ✅ Figma: font-weight 400 Regular
    fontFamily: "Poppins", // ✅ Figma: font-family Poppins
    lineHeight: 14, // ✅ Figma: line-height 100%
    width: 329, // ✅ Figma: width 329
    alignSelf: "center",
    marginTop: 15,
  },

  card: {
    width: "100%", // ✅ Figma: width 400 (full width)
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#00FFFF",
    borderRadius: 10,
    paddingHorizontal: "5%",
    paddingTop: "4%",
    paddingBottom: "4%",
    backgroundColor: "rgba(10,16,35,0.95)",
    shadowColor: "#000000", // ✅ Figma: box-shadow #00000040
    shadowOffset: { width: 0, height: 4 }, // ✅ Figma: 0px 4px
    shadowOpacity: 0.25, // ✅ Figma: opacity 40 = 0.25
    shadowRadius: 4, // ✅ Figma: blur 4px
    elevation: 6,
  },

  // ✅ Profile Picture styles
  profilePicContainer: {
    alignItems: "center",
    marginTop: -30,
    width: 134, // ✅ Figma: width 134
    height: 124, // ✅ Figma: height 124
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginTop: 80,
  },

  profilePicCircle: {
    width: 80, // ✅ Figma: width 80
    height: 80, // ✅ Figma: height 80
    borderRadius: 40,
    borderWidth: 1, // ✅ Figma: border-width 1px
    borderColor: "#00FFFF", // ✅ Figma: border #00FFFF
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,245,255,0.05)",
  },

  profilePicIcon: {
    width: 25, // ✅ Figma: width 25
    height: 25, // ✅ Figma: height 25
  },

  profilePicText: {
    color: "#858585", // ✅ Figma: background #858585
    fontSize: 12, // ✅ Figma: font-size 12px
    fontWeight: "400", // ✅ Figma: font-weight 400 Regular
    fontFamily: "Poppins", // ✅ Figma: font-family Poppins
    textAlign: "center",
    marginTop: 8,
    lineHeight: 12,
    width: 134,
    height: 36,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "500",
    marginTop: 12,
    marginBottom: 5,
  },

  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(40,40,55,0.95)",
    borderRadius: 7,
    paddingHorizontal: "4%",
    borderWidth: 0.5,
    borderColor: "rgba(255,255,255,0.08)",
  },

  flagBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#555",
    paddingRight: "3%",
    marginRight: "3%",
  },

  flag: {
    fontSize: 20,
    marginRight: 5,
  },

  code: {
    color: "#fff",
    fontSize: 14,
  },

  phoneInput: {
    flex: 1,
    color: "#fff",
    paddingVertical: "3%",
  },

  input: {
    width: "100%",
    height: 42,
    borderRadius: 7,
    backgroundColor: "rgba(40,40,55,0.95)",
    paddingHorizontal: 12,
    color: "#fff",
    fontSize: 13,
    borderWidth: 0.5,
    borderColor: "rgba(255,255,255,0.08)",
  },

  passwordWrap: {
    width: "100%",
    height: 42,
    borderRadius: 7,
    backgroundColor: "rgba(40,40,55,0.95)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderWidth: 0.5,
    borderColor: "rgba(255,255,255,0.08)",
  },

  passwordInput: {
    flex: 1,
    color: "#fff",
    fontSize: 13,
  },

  loginBtn: {
    width: "100%",
    height: 44,
    backgroundColor: "#00FFFF",
    borderRadius: 10,
    marginTop: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#00FFFF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 7,
  },

  loginText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  },

  orRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 14,
    marginBottom: 12,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#444",
  },

  orBox: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: "#000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  orText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 14,
  },

  socialBtn: {
    width: 100,
    height: 36,
    backgroundColor: "#2B2F3A",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  signupText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 12,
    fontSize: 13,
    fontWeight: "400",
  },

  signupLink: {
    color: "#00F5FF",
    fontWeight: "600",
  },
});
