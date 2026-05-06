console.log("Execution started");

// 1. Function to simulate fetching user data from a server 
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ userId: 1, name: "John Doe" });
      } else {
        reject("User not found");
      }
    }, 1000); // Simulate a 1-second delay
  });
}

// 2. Function to handle fetching user data and logging the result or error
function getUserData(userId) {
  fetchUserData(userId)
    .then(userData => {
      console.log("User data:", userData);
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

// 3. Test the function with a valid userId (1)
getUserData(1); // This should resolve and log the user data

// 4. Test the function with an invalid userId (other than 1)
getUserData(2); // This should reject and log an error

console.log("Execution finished");
