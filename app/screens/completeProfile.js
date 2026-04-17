import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";

const INITIAL_UNIVERSITIES = [
  "Gift University, Gujranwala",
  "University of the Punjab, Gujranwala",
  "Virtual University, Gujranwala",
  "University of Engineering, Gujranwala",
  "Superior College, Gujranwala",
];

export default function CompleteProfile() {
  const router = useRouter();

  const [university, setUniversity] = useState("");
  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [graduationYear, setGraduationYear] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [genderOpen, setGenderOpen] = useState(false);
  const [universities, setUniversities] = useState(INITIAL_UNIVERSITIES);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [newUniversity, setNewUniversity] = useState("");

  const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];

  const filteredUniversities = universities.filter((u) =>
    u.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleAddUniversity = () => {
    if (newUniversity.trim()) {
      setUniversities([...universities, newUniversity.trim()]);
      setUniversity(newUniversity.trim());
      setNewUniversity("");
      setShowBottomSheet(false);
    }
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back Button */}
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#00F5FF" />
        </TouchableOpacity>

        {/* Icon */}
        <View style={styles.iconBox}>
          <Ionicons name="person-outline" size={30} color="#00F5FF" />
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
          <Text style={styles.cardTitle}>Profile Information</Text>
          <Text style={styles.cardSubtitle}>
            Complete your profile to connect with classmates
          </Text>

          {/* Graduation School */}
          <Text style={styles.fieldLabel}>Graduation School/University</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.inputFlex}
              placeholder="Select your university"
              placeholderTextColor="#6B7280"
              value={university}
              onFocus={() => setShowDropdown(true)}
              onChangeText={(text) => {
                setUniversity(text);
                setSearchText(text);
                setShowDropdown(true);
              }}
            />
            <TouchableOpacity
              style={styles.plusBtn}
              onPress={() => {
                setShowDropdown(false);
                setShowBottomSheet(true);
              }}
            >
              <Ionicons name="add" size={22} color="#000" />
            </TouchableOpacity>
          </View>

          {/* University Search Dropdown */}
          {showDropdown && (
            <View style={styles.dropdownBox}>
              <View style={styles.searchRow}>
                <Ionicons
                  name="search-outline"
                  size={18}
                  color="#6B7280"
                  style={{ marginRight: 8 }}
                />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search..."
                  placeholderTextColor="#6B7280"
                  value={searchText}
                  onChangeText={setSearchText}
                  autoFocus
                />
              </View>
              <FlatList
                data={filteredUniversities}
                keyExtractor={(item) => item}
                scrollEnabled={false}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={[
                      styles.uniItem,
                      index === filteredUniversities.length - 1 &&
                        styles.uniItemLast,
                    ]}
                    onPress={() => {
                      setUniversity(item);
                      setSearchText("");
                      setShowDropdown(false);
                    }}
                  >
                    <Text style={styles.uniItemText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}

          {/* Graduation Year */}
          <Text style={styles.fieldLabel}>Graduation Year</Text>
          <TextInput
            style={styles.input}
            placeholder="Select graduation year"
            placeholderTextColor="#6B7280"
            value={graduationYear}
            onChangeText={setGraduationYear}
            keyboardType="numeric"
          />

          {/* Current Location */}
          <Text style={styles.fieldLabel}>Current Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your city and country"
            placeholderTextColor="#6B7280"
            value={location}
            onChangeText={setLocation}
          />

          {/* Gender Dropdown */}
          <Text style={styles.fieldLabel}>Gender</Text>
          <TouchableOpacity
            style={styles.genderDropdown}
            onPress={() => setGenderOpen(!genderOpen)}
            activeOpacity={0.8}
          >
            <Text
              style={
                gender ? styles.dropdownSelected : styles.dropdownPlaceholder
              }
            >
              {gender || "Select gender"}
            </Text>
            <Ionicons
              name={genderOpen ? "chevron-up" : "chevron-down"}
              size={18}
              color="#00F5FF"
            />
          </TouchableOpacity>

          {genderOpen && (
            <View style={styles.genderMenu}>
              {genderOptions.map((item, index) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.genderItem,
                    index === genderOptions.length - 1 && styles.genderItemLast,
                  ]}
                  onPress={() => {
                    setGender(item);
                    setGenderOpen(false);
                  }}
                >
                  <Text style={styles.genderItemText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

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

      {/* ===================== */}
      {/* Add New University    */}
      {/* Bottom Sheet          */}
      {/* ===================== */}
      <Modal
        visible={showBottomSheet}
        transparent
        animationType="slide"
        onRequestClose={() => setShowBottomSheet(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalContainer}
        >
          <TouchableWithoutFeedback onPress={() => setShowBottomSheet(false)}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>

          <View style={styles.bottomSheet}>
            <View style={styles.handleBar} />

            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Add New University</Text>
              <TouchableOpacity onPress={() => setShowBottomSheet(false)}>
                <Ionicons name="close" size={22} color="#9CA3AF" />
              </TouchableOpacity>
            </View>

            <Text style={styles.sheetSubtitle}>
              Can't find your university? Add it here.
            </Text>

            <Text style={styles.fieldLabel}>University Name</Text>
            <TextInput
              style={styles.sheetInput}
              placeholder="e.g. Lahore University of Management Sciences"
              placeholderTextColor="#6B7280"
              value={newUniversity}
              onChangeText={setNewUniversity}
              autoFocus
            />

            <View style={styles.btnRow}>
              <TouchableOpacity
                style={styles.backOutlineBtn}
                onPress={() => setShowBottomSheet(false)}
              >
                <Text style={styles.backOutlineTxt}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.completeBtn,
                  !newUniversity.trim() && { opacity: 0.5 },
                ]}
                onPress={handleAddUniversity}
                disabled={!newUniversity.trim()}
              >
                <Text style={styles.completeTxt}>Add University</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
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
    justifyContent: "space-between",
    paddingHorizontal: 10,
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
    paddingHorizontal: 10,
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
    marginTop: 4,
    marginBottom: 10,
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
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  inputFlex: {
    flex: 1,
    backgroundColor: "#111827",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#fff",
    fontSize: 13,
  },
  plusBtn: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: "#00F5FF",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownBox: {
    backgroundColor: "#111827",
    borderRadius: 12,
    marginTop: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#1F2937",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F2937",
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 13,
  },
  uniItem: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#1F2937",
  },
  uniItemLast: { borderBottomWidth: 0 },
  uniItemText: { color: "#fff", fontSize: 13 },
  genderDropdown: {
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
  genderMenu: {
    backgroundColor: "#1F2937",
    borderRadius: 10,
    marginTop: 4,
    overflow: "hidden",
  },
  genderItem: {
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
  },
  genderItemLast: { borderBottomWidth: 0 },
  genderItemText: { color: "#fff", fontSize: 13 },
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

  // ========================
  // Bottom Sheet styles
  // ========================
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end", // ← yahi fix hai
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  bottomSheet: {
    backgroundColor: "#0B1224",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: "#00F5FF",
    borderBottomWidth: 0,
    padding: 20,
    paddingBottom: 40,
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: "#374151",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 16,
  },
  sheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sheetTitle: {
    color: "#00F5FF",
    fontSize: 17,
    fontWeight: "700",
  },
  sheetSubtitle: {
    color: "#9CA3AF",
    fontSize: 12,
    marginTop: 6,
    marginBottom: 4,
  },
  sheetInput: {
    backgroundColor: "#111827",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#fff",
    fontSize: 13,
  },
});
