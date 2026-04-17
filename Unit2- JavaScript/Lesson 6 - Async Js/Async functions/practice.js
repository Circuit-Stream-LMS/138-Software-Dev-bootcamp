console.log("Execution started");

// 1. Function to simulate fetching user data from a server 
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: Complete this logic to simulate a valid or invalid userId
      // If userId is 1, resolve with a user object, e.g., { userId: 1, name: "John Doe" }
      // If userId is not 1, reject with an error message, e.g., "User not found"
    }, 1000); // Simulate a 1-second delay
  });
}

// 2. Function to handle fetching user data and logging the result or error
function getUserData(userId) {
  // TODO: Use fetchUserData with the provided userId
  // Use .then() to log the user data if the promise resolves successfully
  // Use .catch() to log the error message if the promise rejects
}

// 3. Test the function with a valid userId (1)
getUserData(1); // This should resolve and log the user data

// 4. Test the function with an invalid userId (other than 1)
getUserData(2); // This should reject and log an error

console.log("Execution finished");
