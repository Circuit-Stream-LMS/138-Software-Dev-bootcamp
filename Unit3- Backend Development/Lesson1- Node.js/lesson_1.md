---
marp: true
theme: default
paginate: true
---

![](../../resources/images/circuitstream_logo.png)
# Software Development Bootcamp

## Unit 3: Backend Development

### Lesson 1: Intro to Node.js & Server-Side Concepts

### Gurneesh Singh

---

# Agenda

<div style="font-size: 20px;">

- Section 1: Introduction to Backend & Node.js
- Section 2: Command Line Basics
- Section 3: Installing Node.js & Project Setup
- Section 4: Your First Node.js Script ("Hello World!")
- Section 5: Node.js Modules & NPM

</div>

---

# Learning Objectives

By the end of this class, you will be able to:

*   **Discuss** the role of backend development and Node.js.
*   **Utilize** basic commands in the command line interface (CLI).
*   **Create** a new Node.js project using `npm`.
*   **Write and run** a simple Node.js script.
*   **Explain** the concept of modules and use NPM to install packages.

---

# Setup Check!

Before we dive in, let's make sure you have:

1.  **Node.js Installed:**
    *   Open your terminal/command prompt and type: `node --version`
    *   You should see a version number (e.g., `v18.17.1` or higher).
    *   If not, download & install from: [https://nodejs.org/en/download](https://nodejs.org/en/download)

---


# Section 1: Introduction to Backend & Node.js (1/3)

<div style="font-size: 20px;">

**Objective:**
*   Understand the difference between frontend and backend.
*   Learn what Node.js is and why it's used.

**Client (Frontend) vs. Server (Backend)**

*   **Client/Frontend:** What the user sees and interacts with (Browser: HTML, CSS, JS). Responsible for UI/UX.
*   **Server/Backend:** Lives on a remote computer. Handles logic, database interactions, authentication, APIs. Provides data to the frontend.

</div>

---

# Section 1: Introduction to Backend & Node.js (2/3)

<div style="font-size: 18px;">

**What is Node.js?**

*   It's **NOT** a programming language. It's a **runtime environment**.
*   It allows you to run **JavaScript** code *outside* of a web browser.
*   Built on Google Chrome's **V8 JavaScript engine**.
*   **Key Difference:** No Browser APIs!
    *   No `window` object.
    *   No `document` object (no DOM manipulation).
    *   No direct access to HTML/CSS rendering.

 ---

*   **Gains Access To:**
    *   Server capabilities (handling requests, responses).
    *   File system access (reading/writing files).
    *   Operating system features.
    *   Databases.

Read more: [About Node.js](https://nodejs.org/en/about)

</div>

---

# Section 1: Introduction to Backend & Node.js (3/3)

<div style="font-size: 18px;">

**Why Node.js for Backend?**

*   **JavaScript Everywhere:** Use the same language for frontend and backend.
*   **Performance:** Fast execution (V8 engine), non-blocking I/O model (efficient for handling many connections, like web servers).
*   **NPM (Node Package Manager):** Huge ecosystem of free, reusable code packages (modules/libraries). Largest package registry in the world!
*   **Community & Popularity:** Widely used by startups and large companies (Netflix, Uber, PayPal, LinkedIn).

---

**Common Use Cases:**
*   Building web servers and APIs (Application Programming Interfaces).
*   Real-time applications (chat apps, online games).
*   Command-line tools.

**Alternatives:** Python (Django, Flask), Ruby (Rails), Java (Spring), PHP (Laravel), C# (.NET), Go... Node.js is just one popular choice!

</div>

---

# Section 2: Command Line Basics (1/2)

<div style="font-size: 20px;">

**Objective:**
*   Learn essential commands for navigating and interacting with your system via the terminal.

**What is the Command Line?**
*   CLI (Command Line Interface), Terminal, Console, Shell, Command Prompt... many names!
*   A text-based way to interact with your computer's operating system.
*   Essential for developers (running scripts, Git, server management, package managers).

---

**Opening Your Terminal:**
*   **macOS:** Terminal.app (Applications > Utilities) or iTerm2.
*   **Windows:** Command Prompt (cmd), PowerShell (recommended), or Git Bash.
*   **Linux:** Usually Ctrl+Alt+T or search for "Terminal".
*   **VS Code:** Integrated Terminal (View > Terminal or `` ` `` key).

</div>

---

# Section 2: Command Line Basics (2/2)

<div style="font-size: 18px;">

**Essential Commands:**

[Command line cheatsheet](./command_line_cheatsheet.md)

---

# Section 3: Installing Node.js & Project Setup (1/2)

<div style="font-size: 20px;">

**Objective:**
*   Initialize a new Node.js project using NPM.

**Troubleshooting Installation:**
*   If `node --version` or `npm --version` didn't work, ensure Node.js is installed correctly and the terminal was restarted *after* installation.
*   Check your system's PATH environment variable if issues persist (advanced).

---

**Project Structure:**
*   It's good practice to create a dedicated folder for each project.
    ```bash
    # In your preferred development directory (e.g., Documents/dev)
    mkdir lesson1-backend
    cd lesson1-backend
    ```

</div>

---

# Section 3: Installing Node.js & Project Setup (2/2)

<div style="font-size: 18px;">

**Initializing a Node.js Project:**

*   The `npm init` command creates a `package.json` file.
*   `package.json`: The heart of your Node project!
    *   Contains metadata (name, version, description).
    *   Lists project **dependencies** (packages your project needs).
    *   Defines **scripts** (shortcuts for common commands).

----
**How to Run `npm init`:**

1.  **Interactive:** `npm init`
    *   Asks you questions (package name, version, etc.). Press Enter to accept defaults.
2.  **Quick (Defaults):** `npm init -y`
    *   Skips questions and uses defaults. Good for quick setup.

**Let's Do It!**
Inside your `lesson1-backend` folder, run:
```bash
npm init -y
```
Now, check the contents (`ls` / `dir`). You should see `package.json`! Open it in VS Code to look inside.

</div>

---

# Section 4: Your First Node.js Script ("Hello World!")

<div style="font-size: 20px;">

**Objective:**
*   Write and run a simple "Hello World" script using Node.js.

**Steps:**

1.  **Create a file:** Inside your `lesson1-backend` project folder, create a new file named `app.js` (or `index.js` - common convention). You can use `touch app.js` or create it in VS Code.
2.  **Write JavaScript:** Open `app.js` and add a simple `console.log`:
    ```javascript
    // app.js
    console.log("Hello World from Node.js!");

    const message = "Node.js is running!";
    console.log(message);
    ```
3.  **Run the script:** Open your terminal, make sure you are *inside* the `lesson1-backend` directory, and run:
    ```bash
    node app.js
    ```

**You should see your messages printed to the console!** 🎉

**Activity:** Create `app.js`, add the code, and run it using `node`.

</div>

---

# Section 5: Node.js Modules & NPM (1/3)

<div style="font-size: 20px;">

**Objective:**
*   Understand Node.js modules and use NPM to install external packages.

**Why Modules? (Encapsulation & Reusability)**
*   Break down large applications into smaller, manageable, logical pieces.
*   Avoid "spaghetti code".
*   Reuse code across different parts of your application or in other projects.
*   Organize related functions and data.

---

**Types of Modules in Node.js:**
1.  **Core Modules:** Built-in modules provided by Node.js (e.g., `fs` for file system, `http` for networking, `path` for file paths). No installation needed.
2.  **Local Modules:** Modules you create yourself within your project. (We'll cover `require` and `module.exports` in more detail later).
3.  **Third-Party Modules:** Code written by other developers, shared via NPM.

</div>

---

# Section 5: Node.js Modules & NPM (2/3)

<div style="font-size: 18px;">

**NPM (Node Package Manager)**

*   **The Registry:** A massive online database (repository) of open-source Node.js packages ([npmjs.com](https://www.npmjs.com/)).
*   **The Command-Line Tool:** `npm` - used to install, manage, and publish packages.

**Installing Packages:**
*   Use the `npm install <package_name>` command.
*   Example: Let's install `lodash`, a popular utility library.
    ```bash
    # Make sure you are in your lesson1-backend directory!
    npm install lodash
    ```
---    
*   **What happens?**
    1.  NPM downloads the `lodash` package from the registry.
    2.  It places the package code inside a `node_modules` folder. **Never manually edit files in `node_modules`!**
    3.  It adds `lodash` as a dependency in your `package.json`.
    4.  It creates/updates `package-lock.json` (ensures consistent installs across machines).

*Look inside `package.json` and explore the new `node_modules` folder (it might have many sub-folders!).*

</div>

---

# Section 5: Node.js Modules & NPM (3/3)

<div style="font-size: 16px;">

**Using an Installed Package:**

*   Use the `require()` function (Node's way of importing modules) to bring the package's functionality into your script.

Live example

---


# Summary / Key Takeaways

*   **Backend:** Server-side logic, data management, APIs.
*   **Node.js:** A runtime environment to execute JavaScript *outside* the browser.
*   **Command Line (CLI):** Essential tool for navigation, running scripts (`node app.js`), managing packages (`npm`).
*   **NPM:** Node Package Manager (`npm init`, `npm install`). Manages project dependencies (`package.json`, `node_modules`).
*   **Modules:** Reusable code blocks (`require()`).

