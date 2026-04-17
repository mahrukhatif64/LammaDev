import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const SERVICE_CATEGORIES = [
  "Category",
  "cateres",
  "Florists",
  "DJ",
  "Venues",
  "Photographers",
  "Event Planners",
  "Other",
];

export default function VendorRole() {
  const router = useRouter();

  const [businessName, setBusinessName] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [businessDescription, setBusinessDescription] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [serviceArea, setServiceArea] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {/* Top Row — Back left, Person center */}
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color="#00F5FF" />
        </TouchableOpacity>
        <View style={styles.personIconWrapper}>
          <View style={styles.personIcon}>
            <Ionicons name="person-outline" size={26} color="#00F5FF" />
          </View>
        </View>
        {/* empty view for spacing balance */}
        <View style={{ width: 38 }} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Complete Your Profile</Text>
      <Text style={styles.subtitle}>
        Welcome Johan! Let's finish setting up your account
      </Text>

      {/* Stepper */}
      <View style={styles.stepper}>
        <View style={styles.stepDone}>
          <Text style={styles.stepTextDone}>1</Text>
        </View>
        <View style={styles.stepGap} />
        <View style={styles.stepDone}>
          <Text style={styles.stepTextDone}>2</Text>
        </View>
        <View style={styles.stepGap} />
        <View style={styles.step}>
          <Text style={styles.stepText}>3</Text>
        </View>
      </View>

      {/* Step Labels */}
      <View style={styles.stepLabels}>
        <Text style={styles.labelCyan}>Choose Roll</Text>
        <Text style={styles.labelCyan}>Complete Profile</Text>
        <Text style={styles.labelWhite}>Finish</Text>
      </View>

      {/* Underline */}
      <View style={styles.underlineContainer}>
        <View style={styles.underlineCyan} />
        <View style={styles.underlineWhite} />
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Vendor Information</Text>
        <Text style={styles.cardSubtitle}>
          Tell us about your business to help customers find you
        </Text>

        {/* Business Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Ionicons name="image-outline" size={30} color="#00F5FF" />
          </View>
          <Text style={styles.logoLabel}>Business Logo</Text>
        </View>

        {/* Business Name */}
        <Text style={styles.fieldLabel}>Business Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your business name"
          placeholderTextColor="#6B7280"
          value={businessName}
          onChangeText={setBusinessName}
        />

        {/* Service Category Dropdown */}
        <Text style={styles.fieldLabel}>Service Category</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setCategoryOpen(!categoryOpen)}
          activeOpacity={0.8}
        >
          <Text
            style={
              serviceCategory
                ? styles.dropdownSelected
                : styles.dropdownPlaceholder
            }
          >
            {serviceCategory || "Select your service category"}
          </Text>
          <Ionicons
            name={categoryOpen ? "chevron-up" : "chevron-down"}
            size={18}
            color="#00F5FF"
          />
        </TouchableOpacity>

        {categoryOpen && (
          <View style={styles.dropdownMenu}>
            {SERVICE_CATEGORIES.map((item, index) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.dropdownItem,
                  index === SERVICE_CATEGORIES.length - 1 &&
                    styles.dropdownItemLast,
                ]}
                onPress={() => {
                  setServiceCategory(item);
                  setCategoryOpen(false);
                }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <Text style={{ color: "#595f5f", fontSize: 30 }}>•</Text>
                  {/* ✅ bullet */}
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Business Description */}
        <Text style={styles.fieldLabel}>Business Description</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter your business description"
          placeholderTextColor="#6B7280"
          value={businessDescription}
          onChangeText={setBusinessDescription}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />

        {/* Business Address */}
        <Text style={styles.fieldLabel}>Business Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your business address"
          placeholderTextColor="#6B7280"
          value={businessAddress}
          onChangeText={setBusinessAddress}
        />

        {/* Service Area */}
        <Text style={styles.fieldLabel}>Service Area</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter service area"
          placeholderTextColor="#6B7280"
          value={serviceArea}
          onChangeText={setServiceArea}
        />

        {/* WhatsApp Number */}
        <Text style={styles.fieldLabel}>WhatsApp Number</Text>
        <View style={styles.phoneRow}>
          <View style={styles.flagBox}>
            <Text style={styles.flagEmoji}>🇺🇸</Text>
            <Text style={styles.countryCode}>+1</Text>
          </View>
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter whatsapp number"
            placeholderTextColor="#6B7280"
            value={whatsapp}
            onChangeText={setWhatsapp}
            keyboardType="phone-pad"
          />
        </View>

        {/* Business Phone Number */}
        <Text style={styles.fieldLabel}>Business Phone Number</Text>
        <View style={styles.phoneRow}>
          <View style={styles.flagBox}>
            <Text style={styles.flagEmoji}>🇺🇸</Text>
            <Text style={styles.countryCode}>+1</Text>
          </View>
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter business phone number"
            placeholderTextColor="#6B7280"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>

        {/* Business Email */}
        <Text style={styles.fieldLabel}>Business Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter business email"
          placeholderTextColor="#6B7280"
          value={businessEmail}
          onChangeText={setBusinessEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Buttons */}
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.backOutlineBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.backOutlineTxt}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.completeBtn}
            onPress={() => router.push("/screens/finish")}
          >
            <Text style={styles.completeTxt}>Complete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // ✅ FIX 1: container mein padding hatao
  container: {
    flex: 1,
    backgroundColor: "#070B1A",
  },
  // ✅ FIX 2: scrollContent mein padding rakho, flexGrow zaroori hai scroll ke liye
  scrollContent: {
    padding: 20,
    paddingBottom: 60,
    flexGrow: 1,
  },

  // ✅ FIX 3: person icon center mein
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },
  personIconWrapper: {
    flex: 1,
    alignItems: "center",
  },
  personIcon: {
    width: 50,
    height: 50,
    borderRadius: 13,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    color: "#00F5FF",
    marginTop: 12,
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
    marginTop: 22,
    justifyContent: "space-between",
    paddingHorizontal: 0,
  },
  stepGap: { flex: 1 },
  step: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#00F5FF",
    justifyContent: "center",
    alignItems: "center",
  },
  stepDone: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#00F5FF",
    justifyContent: "center",
    alignItems: "center",
  },
  stepText: { color: "#00F5FF", fontSize: 12 },
  stepTextDone: { color: "#000", fontSize: 12, fontWeight: "700" },
  stepLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 0,
  },
  labelCyan: { color: "#00F5FF", fontSize: 12 },
  labelWhite: { color: "#ffffff", fontSize: 12 },
  underlineContainer: {
    flexDirection: "row",
    marginTop: 6,
    height: 2,
  },
  underlineCyan: { flex: 2, backgroundColor: "#00F5FF" },
  underlineWhite: { flex: 1, backgroundColor: "#ffffff" },
  card: {
    marginTop: 22,
    padding: 16,
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
    marginTop: 4,
    marginBottom: 10,
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 14,
  },
  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#00F5FF",
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },
  logoLabel: {
    color: "#9CA3AF",
    fontSize: 12,
    marginTop: 6,
  },
  fieldLabel: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    backgroundColor: "#111827",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#fff",
    fontSize: 13,
  },
  textArea: {
    backgroundColor: "#111827",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#fff",
    fontSize: 13,
    minHeight: 100,
  },
  dropdown: {
    backgroundColor: "#111827",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownPlaceholder: { color: "#6B7280", fontSize: 13 },
  dropdownSelected: { color: "#fff", fontSize: 13 },
  dropdownMenu: {
    backgroundColor: "#1F2937",
    borderRadius: 10,
    marginTop: 4,
    overflow: "hidden",
  },
  dropdownItem: {
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
  },
  dropdownItemLast: { borderBottomWidth: 0 },
  dropdownItemText: { color: "#fff", fontSize: 13 },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111827",
    borderRadius: 10,
    overflow: "hidden",
  },
  flagBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRightWidth: 1,
    borderRightColor: "#374151",
    gap: 4,
  },
  flagEmoji: { fontSize: 16 },
  countryCode: { color: "#fff", fontSize: 13 },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: "#fff",
    fontSize: 13,
  },
  btnRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 25,
  },
  backOutlineBtn: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00F5FF",
    alignItems: "center",
  },
  backOutlineTxt: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  completeBtn: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 10,
    backgroundColor: "#00F5FF",
    alignItems: "center",
  },
  completeTxt: {
    color: "#000",
    fontWeight: "700",
    fontSize: 14,
  },
});
