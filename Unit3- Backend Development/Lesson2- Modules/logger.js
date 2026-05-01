
// Helper function to get timestamp
function getTimestamp() {
  return new Date().toISOString();
}

// Helper function to format message
function formatMessage(level, message) {
  return `[${getTimestamp()}] [${level.toUpperCase()}] ${message}`;
}

// ============================================================
// Export an object with multiple methods
// ============================================================
module.exports = {
  // Info level logging
  info: function (message) {
    console.log(formatMessage("INFO", message));
  },

  // Error level logging
  error: function (message) {
    console.error(formatMessage("ERROR", message));
  },

  // Warning level logging
  warn: function (message) {
    console.warn(formatMessage("WARN", message));
  },

  // Log with custom level
  log: function (level, message) {
    const validLevels = ["INFO", "ERROR", "WARN", "DEBUG", "TRACE"];
    const upperLevel = level.toUpperCase();

    if (!validLevels.includes(upperLevel)) {
      console.error(formatMessage("ERROR", `Invalid log level: ${level}`));
      return;
    }

    console.log(formatMessage(upperLevel, message));
  },

};

