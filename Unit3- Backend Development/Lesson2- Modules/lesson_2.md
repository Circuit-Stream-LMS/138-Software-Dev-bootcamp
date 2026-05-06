---
marp: true
theme: default
paginate: true
---

![](../../resources/images/circuitstream_logo.png)
# Software Development Bootcamp

## Unit 3: Backend Development

### Lesson 2: Modules, NPM 

### Gurneesh Singh

---

# Agenda

<div style="font-size: 20px;">

- Section 1: Node.js Built-in Modules (`path`, `fs`)
- Section 2: Creating Your Own Modules (`module.exports`, `require`)
- Section 3: NPM & `package.json` Deep Dive
- Section 4: GitHub Workflow (Pushing Updates)

</div>

---

# Learning Objectives

<div style="font-size: 20px;">  

By the end of this class, you will be able to:

*   **Utilize** common Node.js built-in modules like `path` and `fs`.
*   **Create** custom JavaScript modules using `module.exports`.
*   **Import** custom modules into other files using `require()`.
*   **Explain** the key parts of `package.json` (dependencies, scripts).
*   **Differentiate** between dependencies and devDependencies.
*   **Use** `npm run` to execute scripts defined in `package.json`.

</div>

---

# Recap: Lesson 1 Key Points

<div style="font-size: 18px;">

*   **Node.js:** Runs JavaScript outside the browser, on the server.
*   **CLI Basics:** Navigating (`cd`), listing (`ls`), running scripts (`node app.js`).
*   **NPM:** Node Package Manager.
    *   `npm init -y`: Created `package.json`.
    *   `npm install <package>`: Installed external modules (like `lodash`) into `node_modules`.
*   **Modules Intro:** Used `require('lodash')` to import an external module.

</div>

---

# Section 1: Node.js Built-in Modules (1/4)

<div style="font-size: 20px;">

**Objective:**
*   Learn how to use modules that come standard with Node.js.

**What are Built-in Modules?**
*   Functionality included directly with Node.js - no `npm install` needed!
*   Provide core capabilities for server-side development (networking, file system, OS info, etc.).
*   You still need to `require()` them to use them in your code.

**Common Examples:**
*   `path`: Utilities for working with file and directory paths.
*   `fs` (File System): Interact with the file system (read/write files).
*   `http`/`https`: Create web servers and clients.
*   `os`: Get operating system information.

</div>

---

# Section 1: Node.js Built-in Modules (2/4)

<div style="font-size: 18px;">

**Example: The `path` Module**
*   Handles file paths correctly across different operating systems (Windows `\` vs macOS/Linux `/`).

```javascript
// Import the built-in 'path' module
const path = require('path');

const myFilePath = '/users/test/documents/file.txt'; // Example path

// Get the directory name
console.log('Dirname:', path.dirname(myFilePath)); 
// Output: /users/test/documents

// Get the base filename
console.log('Basename:', path.basename(myFilePath)); 
// Output: file.txt

// Get the file extension
console.log('Extension:', path.extname(myFilePath)); 
// Output: .txt

// Join path segments together (OS-specific separator)
const fullPath = path.join('users', 'test', 'notes', 'note.md');
console.log('Joined Path:', fullPath);
// Output: users/test/notes/note.md (or users\test\notes\note.md on Windows)
```

**Activity:** Add the `path` module examples to your `app.js` and run it (`node app.js`).

</div>

---

# Section 1: Node.js Built-in Modules (3/4)

<div style="font-size: 16px;">

**Example: The `fs` (File System) Module**
*   Allows your Node.js program to read from and write to files.
*   **Synchronous vs. Asynchronous:** Most `fs` methods have both sync (`...Sync`) and async versions. Async is generally preferred for servers, but sync is simpler for basic scripts/learning.

```javascript
// Import the built-in 'fs' module
const fs = require('fs');
const path = require('path'); // We often use 'path' with 'fs'

// --- Writing to a file (Synchronous) ---
const filePath = path.join(__dirname, 'hello.txt'); // __dirname = current folder
const fileContent = 'Hello from Node.js File System!';

try {
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`Successfully wrote to ${filePath}`);
} catch (err) {
  console.error('Error writing file:', err);
}
```
---

```
// --- Reading from a file (Synchronous) ---
try {
  const data = fs.readFileSync(filePath, 'utf8');
  console.log(`Read from file: ${data}`);
} catch (err) {
  console.error('Error reading file:', err);
}
```


</div>

---

# Section 1: Node.js Built-in Modules (4/4)

<div style="font-size: 18px;">

**Reading Node.js Documentation**

*   The official Node.js API documentation is your best resource: [https://nodejs.org/api/](https://nodejs.org/api/)
*   **How to Read It:**
    1.  **Find the Module:** Navigate to the module you need (e.g., `fs`, `path`, `http`).
    2.  **Table of Contents:** Use the ToC on the right to find specific methods/properties.
    3.  **Method Signature:** Understand the parameters (required/optional), their types, and what the method returns.
    4.  **Description:** Read the explanation of what the method does.
    5.  **Code Examples:** Look for usage examples – often the quickest way to understand.


</div>

---

# Section 2: Creating Your Own Modules (1/3)

<div style="font-size: 20px;">

**Objective:**
*   Organize code into separate files (modules) and share functionality between them.

**Why Create Modules? (Recap)**
*   **Organization:** Keeps related code together.
*   **Reusability:** Write a function once, use it in multiple places.
*   **Maintainability:** Easier to update or fix bugs in focused modules.
*   **Collaboration:** Different team members can work on different modules.

**The Core Idea: Exporting & Requiring**
1.  **Export:** Make functions, objects, or variables available *from* a module file.
2.  **Require:** Import that exported functionality *into* another file where you need it.

</div>

---

# Section 2: Creating Your Own Modules (2/3)

<div style="font-size: 18px;">

**Exporting with `module.exports`**

*   Every Node.js file is implicitly a module.
*   `module.exports` is a special object. Whatever you assign to it is what gets exported.

```javascript
// --- logger.js ---

function logInfo(message) {
  console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
}

function logError(message) {
  console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
}

// Option 1: Export an object containing the functions
module.exports = {
  info: logInfo,
  error: logError
};

// Option 2 (Alternative): Export a single function (if module only does one thing)
// module.exports = logInfo; 

// Option 3 (Less Common): Add properties directly
// module.exports.info = logInfo;
// module.exports.error = logError;
```

</div>

---

# Section 2: Creating Your Own Modules (3/3)

<div style="font-size: 16px;">

**Importing with `require()`**

*   Use `require()` with a *relative path* (starting with `./` or `../`) to import your own modules.

```javascript
// --- app.js ---

// Import the entire object exported from logger.js
const logger = require('./logger.js'); // Note the ./ path

// Use the imported functions
logger.info('Application started.');

const user = 'Alice';
if (!user) {
  logger.error('No user found!');
} else {
  logger.info(`User ${user} logged in.`);
}

// If logger.js only exported one function (e.g., module.exports = logInfo)
// const log = require('./logger.js');
// log('Something happened.');
```

**Activity:**
1.  Create a `logger.js` file with the logging functions and `module.exports`.
2.  Modify `app.js` to `require('./logger.js')` and use the `logger.info()` and `logger.error()` functions.
3.  Run `node app.js`.

</div>

---

# Section 3: NPM & `package.json` Deep Dive (1/4)

<div style="font-size: 20px;">

**Objective:**
*   Understand key sections of `package.json` and manage different types of dependencies.

**`package.json` Recap:**
*   The manifest file for your Node.js project.
*   Created by `npm init`.
*   Tracks metadata, dependencies, and scripts.

**Focus Areas Today:**
1.  `dependencies` vs. `devDependencies`
2.  `scripts` section

</div>

---

# Section 3: NPM & `package.json` Deep Dive (2/4)

<div style="font-size: 18px;">

**`dependencies` vs. `devDependencies`**

*   **`dependencies`:** Packages required for your application to *run* in production.
    *   Examples: `lodash`, `express`, database drivers.
    *   Installed via: `npm install <package_name>` (or `npm i <package_name>`)
    *   Saved automatically to `dependencies` section in `package.json`.

---

*   **`devDependencies`:** Packages needed only for *development* and *testing*.
    *   Examples: Testing libraries (`jest`), code linters (`eslint`), utility tools (`nodemon`).
    *   Installed via: `npm install --save-dev <package_name>` (or `npm i -D <package_name>`)
    *   Saved to `devDependencies` section in `package.json`.

**Why the difference?** When deploying your application, you often only need the runtime `dependencies`, not the development tools, saving space and installation time.

</div>

---

# Section 3: NPM & `package.json` Deep Dive (3/4)

<div style="display: grid; grid-template-columns: 1fr 1fr; font-size: 16px; gap: 1rem;">

<div>

**Example: Using `nodemon` (Dev Dependency)**

*   `nodemon` automatically restarts your Node.js application when file changes are detected – great for development!

1.  **Install as Dev Dependency:**
    ```bash
    npm install --save-dev nodemon
    # or: npm i -D nodemon
    ```
    *   Check your `package.json` - `nodemon` should be under `devDependencies`.

 ---   

2.  **Add a `scripts` entry in `package.json`:**
    ```json
    {
      "name": "lesson1-backend",
      // ... other properties
      "scripts": {
        "start": "node app.js", // Standard command to run normally
        "dev": "nodemon app.js"   // Command using nodemon for development
      },
      // ... dependencies/devDependencies
    }
    ```

</div>

<div>

---
3.  **Run the script:**
    ```bash
    npm run dev
    ```
    *   Now, make a change to `app.js` and save it. `nodemon` should automatically restart the script!
    *   (Use `Ctrl+C` to stop `nodemon`).

**Activity:** Install `nodemon` as a dev dependency, add the `start` and `dev` scripts, and run `npm run dev`. Test the auto-restart.

</div>

</div>

---

# Section 3: NPM & `package.json` Deep Dive (4/4)

<div style="font-size: 18px;">

**Semantic Versioning (SemVer)**
*   How package versions are numbered: `MAJOR.MINOR.PATCH` (e.g., `16.4.1`)
    *   **MAJOR:** Incompatible API changes.
    *   **MINOR:** Added functionality (backwards-compatible).
    *   **PATCH:** Bug fixes (backwards-compatible).

---

*   **Symbols in `package.json`:**
    *   `^` (Caret): Allows updates to MINOR and PATCH versions (e.g., `^16.4.1` allows `16.5.0`, `16.4.2`, but NOT `17.0.0`). **Most common.**
    *   `~` (Tilde): Allows updates to PATCH version only (e.g., `~16.4.1` allows `16.4.2`, but NOT `16.5.0`).
    *   Exact version (`16.4.1`): Only allows this specific version.
*   **`package-lock.json`:** Records the *exact* versions of all installed packages (including dependencies of dependencies) to ensure consistent installs across different machines/times.

Read More: [The Basics of Package.json](https://nodesource.com/blog/the-basics-of-package-json/)

</div>
