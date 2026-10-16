// ============================================================================
// SECTION 2 - iOS SPECIFICS  |  ActionSheetIOS
// ============================================================================
// An action sheet is the iOS-style menu which asks
// the user to pick ONE option. It is built into React Native - nothing to install.
// It only exists on iOS

import { useState } from "react";
import { ActionSheetIOS, StyleSheet, Text } from "react-native";
import AppButton from "../AppButton";
import { useTheme } from "../../context/ThemeContext";


const OPTIONS = ["Cancel", "Small", "Medium", "Large", "Clear choice"];
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 4; // iOS shows destructive options in red

export default function ActionSheetDemo() {
  const { theme} = useTheme();
  const [size, setSize] = useState("Nothing yet");

  const openSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: "Pick a drink size",
        message: "You can change it later",
        options: OPTIONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
      },
      // This callback runs when the user taps a button.
      // It receives the INDEX of the button that was tapped.
      (buttonIndex) => {
        if (buttonIndex === CANCEL_INDEX) return; // user dismissed the sheet

        if (buttonIndex === DESTRUCTIVE_INDEX) {
          setSize("Nothing yet");
        } else {
          setSize(OPTIONS[buttonIndex]);
        }
      }
    );
  };

  return (
    <>
      <AppButton title="Choose a size" onPress={openSheet} />
      <Text style={[styles.result, { color: theme.text }]}>
        Selected: {size}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  result: { fontSize: 16 },
});
