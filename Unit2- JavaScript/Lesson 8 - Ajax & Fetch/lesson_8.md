---
marp: true
theme: default
paginate: true
---

![](../../resources/images/circuitstream_logo.png)
# Software Development Bootcamp

## Unit 2: JavaScript Foundations

### Lesson 8: AJAX & Fetch API

### Gurneesh Singh

---

# Agenda

<div style="font-size: 20px;">

- Recap of Previous Lesson (APIs and JSON)
- Section 1: AJAX (Asynchronous JavaScript and XML)
- Section 2: The Fetch API
- Section 3: Working with Fetch Responses (JSON)
- Section 4: Error Handling with Fetch
- Section 5: Next Steps & Preview

</div>

---

# Learning Objectives

By the end of this class, you will be able to:

*   Discuss the AJAX technique and its importance in web development.
*   Use the modern Fetch API to make network requests.
*   Dynamically update website content based on API responses.
*   Extract and handle JSON data received from APIs.
*   Implement basic error handling for network requests.

---

# Recap: APIs and JSON (Lesson 7)

<div style="font-size: 18px;">

- **APIs (Application Programming Interfaces)**: How applications talk to each other (like a restaurant menu).
- **Web APIs**: Use HTTP to exchange data, often following REST principles.
- **HTTP Methods**: `GET`, `POST`, `PUT`, `PATCH`, `DELETE` define actions.
- **HTTP Status Codes**: Indicate request outcomes (`200 OK`, `404 Not Found`, `500 Server Error`).
- **JSON (JavaScript Object Notation)**: Lightweight text format for data exchange. Looks like JS objects but with stricter rules (keys are strings, no functions/comments).
- **`JSON.parse()`**: Converts JSON string to JS object.
- **`JSON.stringify()`**: Converts JS value to JSON string.
- **Postman/Thunder Client**: Tool for testing API requests.

*Key takeaway: APIs allow us to fetch dynamic data, and JSON is the common format for that data.*

**Assignment Reminder:** Interactive Personal Website due soon, check LMS for details.

---

# Section 1: AJAX

<div style="font-size: 20px;">

**Objective:**
*   Discuss the AJAX technique for creating dynamic websites.

**What is AJAX?**
*   **A**synchronous **J**avaScript **A**nd **X**ML.
*   A **technique**, not a specific technology.
*   Allows web pages to update content **asynchronously** without reloading the entire page.
*   Fetches data from a server in the background.
*   Makes web applications feel faster and more interactive (like Google Maps, Gmail).

</div>

---

## How AJAX Changed the Web

<div style="font-size: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

<div>

**Before AJAX:**
- Every interaction required a full page reload.
- Click a link -> Request new HTML -> Server sends new page -> Browser renders it.
- Slow, jarring user experience.

</div>

<div>

**With AJAX:**
- JavaScript runs in the browser.
- User interacts -> JavaScript sends a request to the server (often using `XMLHttpRequest` or `fetch`).
- Server sends back *only the data needed* (often JSON).
- JavaScript receives the data and updates *only the relevant parts* of the page using the DOM.
- Faster, smoother, more application-like feel.

</div>

</div>

---

## The Old Way: `XMLHttpRequest` (XHR)

<div style="font-size: 18px;">

- The original browser object used for AJAX requests.
- Still exists for backwards compatibility.
- More complex and verbose than the modern `fetch` API.
- Uses event listeners and callbacks to handle responses.

```javascript
// Basic XHR GET Request (Conceptual - we'll use Fetch)
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true); // true for async

xhr.onload = function() { // Event listener for successful response
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    // Update the DOM here...
  } else {
    console.error('Request failed:', xhr.statusText);
  }
};

xhr.onerror = function() { // Event listener for network errors
  console.error('Network error occurred');
};

xhr.send(); // Send the request
```

*Key takeaway: Understand XHR exists, but we'll focus on the modern `fetch` API.*

</div>

---

# Section 2: Fetch API

<div style="font-size: 20px;">

**Objective:**
*   Make basic API requests using the `fetch()` function.

**What is the Fetch API?**
*   A modern, promise-based JavaScript interface for making network requests (HTTP).
*   Simpler and more powerful alternative to `XMLHttpRequest`.
*   Built into modern browsers (`window.fetch`).
*   Returns a `Promise` that resolves to the `Response` object.

</div>

---

## Basic `fetch()` Usage (GET Request)

<div style="font-size: 16px;">

- The simplest form takes just the URL of the resource you want to fetch.
- It returns a Promise.

---

```javascript
console.log('Starting fetch...');

fetch('https://official-joke-api.appspot.com/random_joke') // Returns a Promise
  .then(response => {
    // First .then() handles the Response object itself
    console.log('Received response:', response); 
    // Check if the request was successful (status code 200-299)
    if (!response.ok) { 
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // To get the actual data, we need to parse the response body
    // .json() also returns a Promise!
    return response.json(); 
  })
  .then(data => {
    // Second .then() handles the parsed JSON data
    console.log('Joke data:', data);
    console.log('Setup:', data.setup);
    console.log('Punchline:', data.punchline);
    // Now you can update the DOM with this data
  })
  .catch(error => {
    // .catch() handles errors from the fetch call OR the .then() blocks
    console.error('Fetch error:', error);
  });

console.log('Fetch request initiated...'); 
// This logs before the Promises resolve! (Async)
```

</div>

---

# Section 3: Working with Responses

<div style="font-size: 20px;">

**Objective:**
*   Extract JSON data correctly from `fetch` responses.

**The `Response` Object:**
*   The first `Promise` returned by `fetch` resolves with a `Response` object.
*   This object contains metadata about the response (status code, headers), but *not* the actual data directly.
*   It represents the entire HTTP response.

</div>

---

## Reading the Response Body

<div style="font-size: 16px;">

The `Response` object provides methods to read the body content in different formats. These methods also return `Promises`:

- **`response.json()`**: Parses the body as JSON.
- **`response.text()`**: Reads the body as plain text.

```javascript
fetch('https://official-joke-api.appspot.com/random_joke')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('Status:', response.status); 
    console.log('Headers:', response.headers.get('Content-Type')); 
    // Choose the correct method based on expected data type
    return response.json(); // Returns a Promise that resolves with the parsed JSON
  })
  .then(jsonData => {
    console.log('Successfully parsed JSON:', jsonData);
    // Update DOM...
    document.getElementById('setup').textContent = jsonData.setup;
    document.getElementById('punchline').textContent = jsonData.punchline;
  })
  .catch(error => {
    console.error('Error processing fetch response:', error);
  });
```


</div>

---


# Section 4: Error Handling

<div style="font-size: 20px;">

**Objective:**
*   Implement robust error handling for `fetch` requests.

**Types of Errors:**
1.  **Network Errors:** Problem connecting (e.g., DNS lookup failure, offline). These cause the `fetch()` Promise itself to *reject*.
2.  **HTTP Errors:** Server responded, but with an error status (e.g., 404 Not Found, 500 Internal Server Error). These *do not* cause the `fetch()` Promise to reject! The Promise *resolves* successfully with the `Response` object, but `response.ok` will be `false`.

</div>

---

## Handling Fetch Errors

<div style="font-size: 18px;">

Use `.catch()` for network errors and check `response.ok` for HTTP errors.

```javascript
fetch('https://httpbin.org/status/404') // This URL returns a 404 status
  .then(response => {
    console.log('Response received (status might be error):', response.status);
    // *** Crucial check for HTTP errors ***
    if (!response.ok) { 
      // Create an error object to be caught by .catch()
      throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`); 
    }
    // Only proceed if response.ok is true
    return response.json(); // Or .text(), etc.
  })
  .then(data => {
    console.log('Data received:', data); 
    // This part won't run if response.ok was false
  })
  .catch(error => {
    // Catches BOTH network errors (fetch rejection) AND thrown errors (like !response.ok)
    console.error('Caught fetch error:', error.message);
    // Display a user-friendly error message on the page
    document.getElementById('error-message').textContent = 
      'Failed to load data. Please try again later.';
  });
```

</div>

---


## Preview: Next Unit - Intro to Backend

<div style="font-size: 20px;">

*   **What is the Backend?** Server-side logic, databases, handling requests *from* the frontend.
*   **Introduction to Node.js:** Running JavaScript *outside* the browser.
*   **Basic Server Concepts:** Setting up a simple server to respond to requests.


**Reminder:** Interactive Personal Website assignment

</div>

