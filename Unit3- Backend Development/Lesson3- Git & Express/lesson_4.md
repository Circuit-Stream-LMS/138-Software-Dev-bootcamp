---
marp: true
theme: default
paginate: true
---

![](../../resources/images/circuitstream_logo.png)
# Software Development Bootcamp

## Unit 3: Backend Development

### Lesson 3: Introduction to Express.js

### Gurneesh Singh

---

# Agenda

<div style="font-size: 20px;">

- Recap (Node.js Basics, `http` module limitations)
- Section 1: Express.js Introduction (What & Why)
- Section 1: Setting up an Express Project (`npm`, `nodemon`)
- Section 1: Basic Express Boilerplate
- Section 2: Handling HTTP GET Requests (`app.get`, `req`, `res`)
- Section 3: Exercise - Random User Frontend/Backend
- Summary & Key Takeaways
- Next Steps & Preview

</div>

---

# **Learning Objectives**

At the end of this class, you will be able to:

*   Build a basic server with Express.js
*   Handle a GET HTTP request
*   Understand the role of Express as a backend framework

---

# **Recap: Node.js Basics**

*   **Node.js:** A JavaScript runtime environment that allows you to run JavaScript code *outside* of a web browser.
*   **Modules:** Reusable blocks of code (`require`). We used built-in modules like `http`.
*   **npm (Node Package Manager):** Used to install and manage external packages/libraries (dependencies) for your projects.
*   **`package.json`:** Keeps track of project metadata and dependencies.

**Connection:** While Node.js provides the `http` module to create servers, it can be quite verbose for complex applications. We need a simpler way to handle common web server tasks like routing and request handling.

---

<!-- _class: invert -->

# **Section 1: Express.js**

*Your framework for building web applications and APIs.*

---

# **What is Express?**

<div style="font-size: 20px;">


*   **Express.js** is a minimal and flexible **Node.js web application framework**.
*   It provides a robust set of features for web and mobile applications.
*   **Why use it?**
    *   **Simplifies Server Creation:** Makes setting up servers and handling requests much easier than using the plain Node.js `http` module.
    *   **Routing:** Easily define how your application responds to different URL requests (e.g., `/users`, `/products`).
    *   **Middleware:** Adds functionality to the request-response cycle (e.g., logging, authentication, data validation).
    *   **Focus on Business Logic:** Takes care of repetitive setup tasks, allowing developers to focus on the core features of the application.


</div>

---

# **Setting Up an Express Project**

<div style="font-size: 16px;">

1.  **Create Project Directory:** Make a new folder for your project (e.g., `my-express-app`) and `cd` into it.
2.  **Initialize npm:** Create a `package.json` file.
    ```bash
    npm init -y
    ```
3.  **Install Express:** Add Express as a project dependency.
    ```bash
    npm install express
    # or npm i express
    ```
4.  **Install Nodemon (Optional but Recommended):** Automatically restarts your server when code changes are detected. Install it as a *development* dependency.
    ```bash
    npm install --save-dev nodemon
    # or npm i -D nodemon
    ```
5.  **Update `package.json` (for Nodemon):** Add a script to easily run your server with Nodemon.
    ```json
    // In package.json
    "scripts": {
      "test": "echo \\"Error: no test specified\\" && exit 1",
      "start": "node server.js", // To run normally
      "dev": "nodemon server.js"  // To run with nodemon
    },
    ```
    *(Assuming your main server file will be named `server.js`)*

</div>

---

# **Setting Up Your Project**

1.  Create a new directory named `lesson4-server`.
2.  Navigate into `lesson4-server` in your terminal.
3.  Run `npm init -y`.
4.  Run `npm install express`.
5.  Run `npm install --save-dev nodemon`.
6.  Open `package.json` and add the `"dev": "nodemon server.js"` script under `"scripts"`.

Let's ensure everyone has this basic setup ready.

---

# **Basic Express Server Boilerplate**

<div style="font-size: 16px;">

Let's create our main server file (e.g., `server.js`).

```javascript
// server.js

// 1. Import Express
const express = require('express');

// 2. Create an Express application instance
const app = express();

// 3. Define the port the server will run on
// Use environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// 4. Start the server and listen for incoming connections
app.listen(PORT, () => {
  console.log(\`Server is listening on port ${PORT}\`);
});

// We'll add request handling logic here soon!
```

**Explanation:**
1.  We import the `express` module we installed.
2.  We call `express()` to create our application object (`app`). This object has methods for routing, configuration, etc.
3.  We define a `PORT` number. Using `process.env.PORT` allows flexibility for deployment environments.
4.  `app.listen()` starts the server. It takes the port and a callback function that runs once the server starts successfully.

</div>

---

# **Module Systems in JavaScript: CommonJS vs ES Modules**

<div style="font-size: 16px;">

JavaScript has two major module systems that developers use:

1. **CommonJS** - The traditional Node.js module system that uses `require()` and `module.exports`
2. **ES Modules** - The newer standard JavaScript module system that uses `import` and `export`

Both accomplish the same goal - they allow you to organize your code into separate files and dependencies - but they use different syntax.

**Why is this important?** Modern JavaScript is increasingly using ES Modules, and it's becoming the standard across the ecosystem.

</div>

---

# **CommonJS vs ES Modules Syntax**

<div style="font-size: 16px;">

**CommonJS (Traditional Node.js)**
```javascript
// Importing modules
const express = require('express');
const path = require('path');

// Exporting functionality
module.exports = myFunction;
// or
module.exports = { 
  function1, 
  function2 
};
```
---

**ES Modules (Modern JavaScript)**
```javascript
// Importing modules
import express from 'express';
import path from 'path';

// Exporting functionality
export default myFunction;
// or
export { function1, function2 };
```

**Note:** We'll be using ES Modules in our examples from this point forward, but both systems are still widely used in industry.

</div>

---

# **Converting to ES Modules in Node.js**

<div style="font-size: 12px;">

To use ES Modules in a Node.js project:

1. **Add `"type": "module"` to your package.json file**
   ```json
   {
     "name": "my-express-app",
     "version": "1.0.0",
     "type": "module",
     // other properties...
   }
   ```

2. **Update your imports and exports**
   - Replace `require()` with `import`
   - Replace `module.exports` with `export` or `export default`

---

3. **Use file extensions in imports**
   - When importing your own files, include the `.js` extension:
   ```javascript
   // ES Modules often requires file extensions for local files
   import { myFunction } from './utils.js';
   ```

4. **__dirname and __filename alternatives**
   - These aren't available in ES Modules, use this alternative:
   ```javascript
   import path from 'path';
   import { fileURLToPath } from 'url';

   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);
   ```

</div>

---

# **Updated Express Server Boilerplate (ES Modules)**

<div style="font-size: 16px;">

```javascript
// server.js

// 1. Import Express
import express from 'express';

// 2. Create an Express application instance
const app = express();

// 3. Define the port the server will run on
// Use environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// 4. Start the server and listen for incoming connections
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// We'll add request handling logic here soon!
```

**Explanation:**
- We've replaced `const express = require('express')` with `import express from 'express'`
- Everything else works the same as before
- This example assumes you've added `"type": "module"` to your package.json

</div>

---

<!-- _class: invert -->

# **Section 2: Handling HTTP GET Requests**

*Responding to requests from the browser.*

---

# **HTTP Methods**

Web servers respond to requests using different **HTTP methods** (verbs). Common ones include:

*   **GET:** Retrieve data from the server (e.g., fetching a webpage, getting user data). This is the most common method used when you type a URL in your browser.
*   **POST:** Send data to the server to create a new resource (e.g., submitting a form, creating a new user).
*   **PUT:** Send data to update an existing resource completely.
*   **DELETE:** Remove a resource from the server.

Today, we'll focus on `GET`.

---

# **Handling a Basic GET Request**

<div style="font-size: 16px;">

We use the `app.get()` method in Express to define how the server responds to GET requests for a specific URL path.

```javascript
// server.js
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Route handler for GET requests to the root path ('/')
app.get('/', (request, response) => {
  // This callback function runs when a GET request hits '/'
  console.log('Received a GET request to /');
  response.send('<h1>Hello from the Express Server!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
```

**Explanation:**
*   `app.get(path, callback)`: Defines a route handler.
*   `path`: The URL path this handler responds to (`'/'` is the root or homepage).
*   `callback`: A function that executes when a request matching the path and method arrives. It receives two crucial arguments:
    *   `request` (often abbreviated `req`): An object containing information about the incoming request (e.g., headers, query parameters).
    *   `response` (often abbreviated `res`): An object used to send the response back to the client.
*   `response.send()`: A versatile method to send various types of responses (HTML, text, JSON) back to the browser.

</div>


