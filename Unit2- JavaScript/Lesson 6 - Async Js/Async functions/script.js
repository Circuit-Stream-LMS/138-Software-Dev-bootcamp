// What Are Promises?
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. Promises have three states:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// Simple promise example
console.log("Execution started");

function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");
    setTimeout(() => {
      const success = true; // Change to `false` to simulate failure
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000); // Simulates a 2-second delay
  });
}

fetchData()
  .then((message) => {
    console.log(message); // Logs the success message
  })
  .catch((error) => {
    console.error(error); // Logs the error message
  })
  .finally(() => {
    console.log("Execution finished");
  });


// Async Await 
console.log("Execution started");

async function fetchData() {
  console.log("Fetching data...");
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000); // Simulates a 2-second delay
  });
  console.log(result);
}

fetchData();

console.log("Execution finished");


// Try-catch
console.log("Execution started");

async function fetchData() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = false;  // Simulating a failure (change to `true` to simulate success)
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data.");
        }
      }, 2000); // Simulate a 2-second delay
    });
    console.log(result);
  } catch (error) {
    console.error("Error:", error);  // Handle the error if the promise is rejected
  }
}

fetchData();

console.log("Execution finished");
