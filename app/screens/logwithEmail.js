import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginEmail() {
  return (
    <LinearGradient colors={["#050816", "#0A1023"]} style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Language Toggle */}
        <View style={styles.langToggle}>
          <TouchableOpacity style={[styles.langBtn, styles.langActive]}>
            <Text style={styles.langActiveText}>En</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.langBtn}>
            <Text style={styles.langText}>Ar</Text>
          </TouchableOpacity>
        </View>

        {/* Logo */}
        <View style={styles.logoBox}>
          <Ionicons name="person-outline" size={24} color="#00F5FF" />
        </View>

        {/* Title */}
        <Text style={styles.appTitle}>Lammah App</Text>

        {/* Subtitle */}
        <Text style={styles.appSubtitle}>
          Lammah is your all-in-one solution for a smarter, more{"\n"}
          connected digital experience.
        </Text>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.signInText}>
            Sign in to your account to continue
          </Text>

          {/* Switch */}
          <View style={styles.switchRow}>
            <TouchableOpacity style={[styles.switchBtn, styles.switchActive]}>
              <Ionicons name="mail-outline" size={16} color="#000" />
              <Text style={styles.switchActiveText}> Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.switchBtn}>
              <Ionicons name="call-outline" size={16} color="#fff" />
              <Text style={styles.switchText}> Phone</Text>
            </TouchableOpacity>
          </View>

          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#777"
            style={styles.input}
          />

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordWrap}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#777"
              secureTextEntry
              style={styles.passwordInput}
            />
            <Ionicons name="eye-off-outline" size={18} color="#777" />
          </View>

          {/* Forgot */}
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login */}
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          {/* OR */}
          <View style={styles.orRow}>
            <View style={styles.line} />
            <View style={styles.orBox}>
              <Text style={styles.orText}>Or continue with</Text>
            </View>
            <View style={styles.line} />
          </View>

          {/* Social */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <FontAwesome name="google" size={20} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <FontAwesome name="apple" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Signup */}
          <Text style={styles.signupText}>
            Don't have an account? <Text style={styles.signupLink}>Signup</Text>
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 56, // ← replaces the broken marginBottom:"20%" on toggle
    paddingBottom: 32,
  },

  langToggle: {
    flexDirection: "row",
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: "#00FFFF",
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 24, // ← fixed px value instead of 20%
  },

  langBtn: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    backgroundColor: "#111",
  },

  langActive: {
    backgroundColor: "#00FFFF",
  },

  langText: {
    color: "#fff",
    fontSize: 13,
  },

  langActiveText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 13,
  },

  logoBox: {
    width: 52,
    height: 52,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#8fa5a6",
  },

  appTitle: {
    color: "#00FFFF",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 16,
    lineHeight: 29,
  },

  appSubtitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 8,
    lineHeight: 20,
  },

  card: {
    width: "100%",
    marginTop: 20,
    borderWidth: 0.7,
    borderColor: "#00FFFF",
    borderRadius: 10,
    padding: 16,
    backgroundColor: "rgba(154,154,154,0.1)",
  },

  welcome: {
    color: "#00FFFF",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 26,
  },

  signInText: {
    color: "#858585",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 8,
    marginBottom: 12,
    lineHeight: 18,
  },

  switchRow: {
    flexDirection: "row",
    width: "100%",
    height: 45,
    marginTop: 12,
    marginBottom: 16,
    borderRadius: 5,
    overflow: "hidden",
  },

  switchBtn: {
    flex: 1,
    paddingVertical: 10,
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
  },

  switchActiveText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 13,
  },

  label: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 12,
    marginBottom: 4,
  },

  input: {
    width: "100%",
    height: 44,
    borderRadius: 5,
    backgroundColor: "rgba(217,217,217,0.1)",
    paddingHorizontal: 14,
    color: "#fff",
    fontSize: 14,
    borderWidth: 0.5,
    borderColor: "rgba(255,255,255,0.1)",
  },

  passwordWrap: {
    width: "100%",
    height: 44,
    borderRadius: 5,
    backgroundColor: "rgba(217,217,217,0.1)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    borderWidth: 0.5,
    borderColor: "rgba(255,255,255,0.1)",
  },

  passwordInput: {
    flex: 1,
    color: "#fff",
    fontSize: 13,
  },

  forgot: {
    color: "#00F5FF",
    fontSize: 14,
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
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#00FFFF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },

  loginText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },

  orRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#858585",
  },

  orBox: {
    paddingVertical: 6,
    paddingHorizontal: 20,
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
    marginTop: 16,
    alignItems: "center",
  },

  socialBtn: {
    width: 80,
    height: 36,
    backgroundColor: "#2B2F3A",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },

  signupText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 16,
    fontSize: 14,
    fontWeight: "400",
  },

  signupLink: {
    color: "#00FFFF",
    fontWeight: "700",
  },
});
