import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
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

      {/* Logo centered */}
      <View style={styles.logoBox}>
        <Ionicons name="person-outline" size={18} color="#00F5FF" />
      </View>

      {/* Title */}
      <Text style={styles.appTitle}>Create Account</Text>

      {/* Subtitle */}
      <Text style={styles.appSubtitle}>
        Join the community to reconnect and organize
      </Text>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.signInText}>
          Sign in to your account to continue
        </Text>

        {/* Switch */}

        {/* Email */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter your full name"
          placeholderTextColor="#555"
          style={styles.input}
        />

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneContainer}>
          <View style={styles.flagBox}>
            <Text style={styles.flag}>🇺🇸</Text>
            <Text style={styles.code}>+1</Text>
          </View>

          <TextInput
            placeholder="Enter your Phone Number"
            placeholderTextColor="#555"
            style={styles.phoneInput}
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>Email Adress</Text>
        <View style={styles.passwordWrap}>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#555"
            secureTextEntry
            style={styles.passwordInput}
          />
        </View>

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

        {/* Login */}
        <TouchableOpacity style={styles.loginBtn} onPress={() => router.push("/screens/chooseRoll")}>
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

        {/* Signup */}
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Login</Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "1%",
    justifyContent: "center", // ✅ centers everything vertically
  },

  langToggle: {
    flexDirection: "row",
    alignSelf: "flex-end",
    borderWidth: 1.5,
    borderColor: "#00FFFF",
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 12,
  },

  langBtn: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: "#111",
  },

  langActive: {
    backgroundColor: "#00FFFF",
  },

  langText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  langActiveText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 12,
  },

  logoBox: {
    width: 38,
    height: 38,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: "#1C2A2B",
    borderWidth: 1,
    borderColor: "#2A3A3B",
    marginBottom: 20,
  },

  appTitle: {
    color: "#00FFFF",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 28,
  },

  appSubtitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "400",
    marginTop: 6,
    lineHeight: 20,
  },

  card: {
    width: "100%",
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#00FFFF",
    borderRadius: 12,
    paddingHorizontal: "5%",
    paddingTop: "3%",
    paddingBottom: "4%",
    backgroundColor: "rgba(10,16,35,0.95)",
    shadowColor: "#00FFFF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },

  welcome: {
    color: "#00FFFF",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 26,
  },

  signInText: {
    color: "#858585",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "400",
    marginTop: 5,
    marginBottom: 2,
    lineHeight: 18,
  },

  switchRow: {
    flexDirection: "row",
    width: "100%",
    height: 42,
    marginTop: 12,
    marginBottom: 4,
    borderRadius: 8,
    overflow: "hidden",
  },

  switchBtn: {
    flex: 1,
    backgroundColor: "#2B2F3A",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  switchActive: {
    backgroundColor: "#00F5FF",
  },

  switchText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "500",
  },

  switchActiveText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 13,
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

  forgot: {
    color: "#00F5FF",
    fontSize: 13,
    fontWeight: "500",
    alignSelf: "flex-end",
    marginTop: 8,
    textDecorationLine: "underline",
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
