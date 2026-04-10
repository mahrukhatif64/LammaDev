import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginEmail() {
  return (
    <LinearGradient colors={["#050816", "#0A1023"]} style={styles.container}>
      {/* <View style={styles.langToggle}>
        <TouchableOpacity style={[styles.langBtn, styles.langActive]}>
          <Text style={styles.langActiveText}>En</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.langBtn}>
          <Text style={styles.langText}>Ar</Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.logoBox}>
        <Ionicons name="person-outline" size={28} color="#00F5FF" />
      </View>

      <Text style={styles.appTitle}>Lammah App</Text>
      <Text style={styles.appSubtitle}>
        Lammah is your all-in-one solution for a smarter, more connected digital
        experience.
      </Text>

      <View style={styles.card}>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.signInText}>
          Sign in to your account to continue
        </Text>

        <View style={styles.switchRow}>
          <TouchableOpacity style={[styles.switchBtn, styles.switchActive]}>
            <Ionicons name="mail-outline" size={18} color="#000" />
            <Text style={styles.switchActiveText}> Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.switchBtn}>
            <Ionicons name="call-outline" size={18} color="#fff" />
            <Text style={styles.switchText}> Phone</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#777"
          style={styles.input}
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordWrap}>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#777"
            secureTextEntry
            style={styles.passwordInput}
          />
          <Ionicons name="eye-off-outline" size={20} color="#777" />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.orRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or Continue with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <FontAwesome name="google" size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <FontAwesome name="apple" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Signup</Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 440,
    height: 956,
    opacity: 1,
  },
  //   langToggle: {
  //     flexDirection: "row",
  //     alignSelf: "flex-end",
  //     borderWidth: 1,
  //     borderColor: "#00F5FF",
  //     borderRadius: 30,
  //     overflow: "hidden",
  //     marginTop: 30,
  //   },
  //   langBtn: {
  //     paddingHorizontal: 20,
  //     paddingVertical: 10,
  //     backgroundColor: "#111",
  //   },
  //   langActive:
  //   {
  //      backgroundColor: "#00F5FF"
  //     },
  //   langText: {
  //     color: "#fff"
  // },
  //   langActiveText: {
  //      color: "#000",
  //      fontWeight: "700"
  //     },
  logoBox: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 50,
    left: 195,
    opacity: 1,
  },
  appTitle: {
    color: "#00F5FF",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
  },
  appSubtitle: {
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 24,
  },
  card: {
    marginTop: 30,
    borderWidth: 2,
    borderColor: "#00AEEF",
    borderRadius: 20,
    padding: 20,
    backgroundColor: "rgba(20,20,30,0.8)",
  },
  welcome: {
    color: "#00F5FF",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  signInText: {
    color: "#777",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 20,
  },
  switchRow: {
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  switchBtn: {
    flex: 1,
    padding: 14,
    backgroundColor: "#2B2F3A",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  switchActive: {
    backgroundColor: "#00F5FF",
  },
  switchText: {
    color: "#fff",
  },
  switchActiveText: {
    color: "#000",
    fontWeight: "700",
  },
  label: {
    color: "#fff",
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#2B2F3A",
    borderRadius: 10,
    padding: 14,
    color: "#fff",
  },
  passwordWrap: {
    backgroundColor: "#2B2F3A",
    borderRadius: 10,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    color: "#fff",
    paddingVertical: 14,
  },
  forgot: {
    color: "#00F5FF",
    alignSelf: "flex-end",
    marginTop: 12,
  },
  loginBtn: {
    backgroundColor: "#00F5FF",
    padding: 16,
    borderRadius: 12,
    marginTop: 25,
    alignItems: "center",
  },
  loginText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
  },
  orRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#555",
  },
  orText: {
    color: "#fff",
    marginHorizontal: 12,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialBtn: {
    backgroundColor: "#2B2F3A",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  signupText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 30,
  },
  signupLink: {
    color: "#00F5FF",
    fontWeight: "700",
  },
});
