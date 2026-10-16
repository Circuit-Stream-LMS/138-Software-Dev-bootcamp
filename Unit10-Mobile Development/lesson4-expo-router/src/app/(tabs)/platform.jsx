// ============================================================================
// SECTIONS 2 & 3 - iOS and ANDROID SPECIFICS  |  File: src/app/(tabs)/platform.jsx
// ============================================================================


import { ScrollView, StyleSheet } from "react-native";
import DemoCard from "../../components/DemoCard";
import ActionSheetDemo from "../../components/platform/ActionSheetDemo";
import SettingsDemo from "../../components/platform/SettingsDemo";
import ToastAndroidDemo from "../../components/platform/ToastAndroidDemo";
import CrossPlatformMessageDemo from "../../components/platform/CrossPlatformMessageDemo";

export default function PlatformScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
    >
      {/* ---------- Section 2: iOS ---------- */}
      <DemoCard
        title="ActionSheetIOS"
        description="A menu that slides up from the bottom so the user can pick one option."
        platforms={["ios"]}
      >
        <ActionSheetDemo />
      </DemoCard>

      <DemoCard
        title="Settings"
        description="Save small values permanently, even after the app is closed."
        platforms={["ios"]}
      >
        <SettingsDemo />
      </DemoCard>

      {/* ---------- Section 3: Android ---------- */}

      <DemoCard
        title="ToastAndroid"
        description="Show a small message that disappears by itself."
        platforms={["android"]}
      >
        <ToastAndroidDemo />
      </DemoCard>

      {/* No `platforms` prop = runs everywhere */}
      <DemoCard
        title="Cross-platform feedback"
        description="Toast on Android, alert on iOS - chosen by file name, not by if-statements."
      >
        <CrossPlatformMessageDemo />
      </DemoCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16 },
});
