// ============================================================================
// SECTION 3 - ANDROID SPECIFICS  |  one function, every platform
// ============================================================================
// This screen calls showMessage() and never checks Platform.OS itself.
// Which file runs (showMessage.android.js or showMessage.js) is decided by the bundler.

import AppButton from "../AppButton";
import { showMessage } from "../../utils/showMessage";

export default function CrossPlatformMessageDemo() {
  return (
    <AppButton
      title="Show a message"
      onPress={() => showMessage("Saved! This works on every platform.")}
    />
  );
}
