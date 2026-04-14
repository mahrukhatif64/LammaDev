import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

// ─────────────────────────────────────────────────────────────────────────────
// ROOT LAYOUT — this file wraps the entire app.
// Every screen in the /app folder is automatically a route (expo-router).
// You never need to register screens manually here.
// ─────────────────────────────────────────────────────────────────────────────
//
// CURRENT NAVIGATION FLOW:
//
//   app/index.js  ← entry point, checks AsyncStorage
//     │
//     ├─ first launch  → /screens/onboarding1
//     │                     → /screens/onboarding2
//     │                     → /screens/onboarding3  (saves flag, then →)
//     │
//     └─ returning user → /screens/logwithEmail  ⇄  /screens/logwithPhone
//                              │
//                              └─ /screens/signup
//                                    │
//                                    └─ /screens/chooseRoll
//                                           │
//                                           └─ /(tabs)  ← main app
//
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD A NEW SCREEN:
//
//   1. Create the file, e.g.  app/screens/myNewScreen.js
//   2. Export a default React component from it — that's it.
//      expo-router automatically creates the route /screens/myNewScreen
//
//   3. Navigate TO it from any screen:
//        router.push("/screens/myNewScreen")    ← adds to back stack
//        router.replace("/screens/myNewScreen") ← replaces current screen (no back)
//
//   4. Navigate BACK:
//        router.back()
//
// ─────────────────────────────────────────────────────────────────────────────
// WHEN TO USE push vs replace:
//
//   push    — user should be able to go back  (e.g. login → signup)
//   replace — no going back makes sense       (e.g. onboarding steps, post-login)
//
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD A NEW TAB:
//
//   1. Create  app/(tabs)/myTab.js
//   2. Add a <Tabs.Screen> entry in  app/(tabs)/_layout.js
//
// ─────────────────────────────────────────────────────────────────────────────

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* headerShown: false removes the top nav bar from every screen globally.
          To show a header on a specific screen, add:
          <Stack.Screen name="screens/myScreen" options={{ headerShown: true }} /> */}
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
