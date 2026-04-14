import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ChooseRole({ navigation }) {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn}>
        <Ionicons name="chevron-back" size={24} color="#00F5FF" />
      </TouchableOpacity>

      {/* Icon */}
      <View style={styles.iconBox}>
        <Ionicons name="person-outline" size={30} color="#00F5FF" />
      </View>

      {/* Title */}
      <Text style={styles.title}>Complete Your Profile</Text>

      <Text style={styles.subtitle}>
        Welcome Johan! Let’s finish setting up your account
      </Text>

      {/* Stepper */}
      <View style={styles.stepper}>
        <View style={styles.stepActive}>
          <Text style={styles.stepTextActive}>1</Text>
        </View>
        <View style={styles.stepLine} />
        <View style={styles.step}>
          <Text style={styles.stepText}>2</Text>
        </View>
        <View style={styles.stepLine} />
        <View style={styles.step}>
          <Text style={styles.stepText}>3</Text>
        </View>
      </View>

      <View style={styles.stepLabels}>
        <Text style={styles.labelActive}>Choose Role</Text>
        <Text style={styles.label}>Complete Profile</Text>
        <Text style={styles.label}>Finish</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Choose Your Role</Text>
        <Text style={styles.cardSubtitle}>
          Select the option that best describe how you’ll use Lamma App
        </Text>

        {/* Alumni */}
        <Pressable
          style={[
            styles.option,
            selected === "alumni" && styles.selectedOption,
          ]}
          onPress={() => setSelected("alumni")}
        >
          <View style={[styles.iconWrap, { backgroundColor: "#3B82F6" }]}>
            <FontAwesome5 name="graduation-cap" size={18} color="#fff" />
          </View>
          <View>
            <Text style={styles.optionTitle}>Alumni</Text>
            <Text style={styles.optionDesc}>
              Connect with classmates and organize reunions
            </Text>
          </View>
        </Pressable>

        {/* Vendor */}
        <Pressable
          style={[
            styles.option,
            selected === "vendor" && styles.selectedOption,
          ]}
          onPress={() => setSelected("vendor")}
        >
          <View style={[styles.iconWrap, { backgroundColor: "#22C55E" }]}>
            <FontAwesome5 name="tools" size={18} color="#fff" />
          </View>
          <View>
            <Text style={styles.optionTitle}>Vendor</Text>
            <Text style={styles.optionDesc}>
              Provide service and event and reunions
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070B1A",
    padding: 20,
  },

  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },

  iconBox: {
    marginTop: 15,
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    color: "#00F5FF",
    marginTop: 10,
  },

  subtitle: {
    textAlign: "center",
    color: "#9CA3AF",
    marginTop: 5,
    fontSize: 13,
  },

  stepper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    justifyContent: "center",
  },

  step: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#00F5FF",
    justifyContent: "center",
    alignItems: "center",
  },

  stepActive: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#00F5FF",
    justifyContent: "center",
    alignItems: "center",
  },

  stepText: {
    color: "#00F5FF",
    fontSize: 12,
  },

  stepTextActive: {
    color: "#000",
    fontSize: 12,
    fontWeight: "700",
  },

  stepLine: {
    width: 40,
    height: 2,
    backgroundColor: "#374151",
  },

  stepLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 10,
  },

  label: {
    color: "#6B7280",
    fontSize: 12,
  },

  labelActive: {
    color: "#00F5FF",
    fontSize: 12,
  },

  card: {
    marginTop: 25,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#00F5FF",
    backgroundColor: "#0B1224",
  },

  cardTitle: {
    color: "#00F5FF",
    fontSize: 16,
    fontWeight: "700",
  },

  cardSubtitle: {
    color: "#9CA3AF",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 15,
  },

  option: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#111827",
    marginBottom: 10,
    alignItems: "center",
    gap: 10,
  },

  selectedOption: {
    borderWidth: 1,
    borderColor: "#00F5FF",
  },

  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  optionTitle: {
    color: "#fff",
    fontWeight: "600",
  },

  optionDesc: {
    color: "#9CA3AF",
    fontSize: 11,
    width: 220,
  },
});
