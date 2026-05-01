const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

async function runPrompt() {
  try {
    const response = await prompt([
      {
        type: "input",
        message: "What is your username?",
        name: "username",
        validate: (input) => {
          if (input.trim().length === 0) {
            return "Username cannot be empty";
          }
          return true;
        },
      },
      {
        type: "password",
        message: "What is your password?",
        name: "password",
        mask: "*",
        validate: (input) => {
          if (input.length < 4) {
            return "Password must be at least 4 characters";
          }
          return true;
        },
      },
      {
        type: "password",
        message: "Re-enter password to confirm:",
        name: "confirm",
        mask: "*",
      },
    ]);

    console.log("\nResponse received:", response);

    // Validate passwords match
    if (response.password === response.confirm) {
      console.log("\n Success! User account created.");
      console.log(`   Username: ${response.username}`);
    } else {
      console.log("\n Passwords do not match! Please try again.");
    }
  } catch (error) {
    if (error.isValidationError) {
      console.error("Validation error:", error.message);
    } else {
      console.error("Error:", error.message);
    }
  }
}

// Additional examples showing different prompt types
async function moreExamples() {
  console.log("\n--- Additional Inquirer Examples ---\n");

  // Confirm example
  const confirmResult = await prompt({
    type: "confirm",
    message: "Do you want to continue?",
    name: "continue",
    default: true,
  });
  console.log("Confirm result:", confirmResult);

  // List example (choice from a list)
  const listResult = await prompt({
    type: "list",
    message: "Select your favorite language:",
    name: "language",
    choices: ["JavaScript", "Python", "TypeScript", "Go", "Rust"],
  });
  console.log("Selected language:", listResult.language);

  // Checkbox example (multiple selections)
  const checkboxResult = await prompt({
    type: "checkbox",
    message: "Select your skills:",
    name: "skills",
    choices: ["JavaScript", "Python", "HTML/CSS", "React", "Node.js", "SQL"],
    validate: (answer) => {
      if (answer.length === 0) {
        return "You must select at least one skill";
      }
      return true;
    },
  });
  console.log("Selected skills:", checkboxResult.skills);
}

// Run the main prompt
runPrompt();

// moreExamples();
