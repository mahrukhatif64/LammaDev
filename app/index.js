import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

// KEY stored in device storage to remember if the user has seen onboarding.
// Change this string if you ever want to force onboarding to show again for all users.
const ONBOARDING_KEY = "hasSeenOnboarding";

export default function Index() {
  // null = still loading, true/false = decision made
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem(ONBOARDING_KEY).then((value) => {
      setHasSeenOnboarding(value === "true");
    });
  }, []);

  // Wait until we know whether onboarding was seen before redirecting
  if (hasSeenOnboarding === null) return <View />;

  // If onboarding already done → go straight to the login screen
  // If not → show onboarding flow
  // TODO: once you have real auth, redirect to /(tabs) here if the user is also logged in
  return hasSeenOnboarding ? (
    <Redirect href="/screens/logwithEmail" />
  ) : (
    <Redirect href="/screens/onboarding1" />
  );
}
