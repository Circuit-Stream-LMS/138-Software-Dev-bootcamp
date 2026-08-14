---
marp: true
---

# ⚡ Introduction to Vite
### Modern Frontend Development Tool

---

# 🎯 Learning Goals

By the end of this session, you will:

✅ Understand what Vite is  
✅ Understand why developers use Vite  
✅ Understand problems Vite solves  
✅ Learn how Vite improves development speed  
✅ Create a React app using Vite  

---

# 👋 Quick Context

Before tools like Vite existed…

Developers built websites using:

- HTML → Structure  
- CSS → Styling  
- JavaScript → Interactivity  

---

# 🤔 Question

When building websites using HTML, CSS, and JavaScript…

What challenges might developers face?

---

# 🚧 Common Frontend Challenges

• Managing many files  
• Difficult project organization  
• Slow refresh during development  
• Complex environment setup  
• Performance issues in large applications  

---

# To overcome above challenges, we Need Tools!

As applications grow, developers need tools that help:

✔ Organize files  
✔ Combine code  
✔ Run projects locally  
✔ Improve performance  

---

# 🧰 Traditional Frontend Tooling

Developers used build tools such as:

- Webpack  (Still used but decreasing adoption)
- Create React App (CRA)  (deprecated already, no support)

---

# ❓ What is a Build Tool?

A build tool is software that helps:

👉 Combine and prepare code  
👉 Optimize files  
👉 Make apps ready to run or deploy  

---

# 🐢 Limitations of Traditional Tools

• Must bundle entire project before running  

        ❓ What is Bundling?

        Bundling means:

        👉 Combining many files into fewer files  
        👉 Helps browsers load apps efficiently  

• Development server startup can be slow  
• Code changes may trigger long rebuilds  
• Configuration can become complicated  

---

#  Analogy: Traditional tools

Traditional tools are like:

👉 Packing your entire suitcase  
Every time you only need one item  

This takes extra time and effort.

---

# ⚡ What is Vite?

Vite (pronounced "veet") is:

👉 A modern frontend build tool  
👉 A development server  

It helps developers build web applications faster and with less setup.

---

# ❓ What is a Development Server?

A development server is:

👉 A local server running on your computer  
👉 Allows you to preview your app in a browser  
👉 Automatically updates when code changes  

---

# 💡 What Does Vite Do?

Vite helps with:

• Creating project structure  
• Running development server  
• Managing dependencies  
• Updating browser automatically during development(HMR)
• Building optimized production apps  

---

# ❓ What is a Dependency?

A dependency is:

👉 A library or package your project needs to work  

Example:
React itself is a dependency.

---

# 🚀 Why is Vite Fast?

### Traditional Tools
Bundle entire project before running.

---

### Vite Approach

✔ Loads files only when needed  
✔ Updates only changed files  
✔ Uses modern browser features  

---

# Analogy: How Vite Works

Vite is like:

👉 Streaming a movie online  

Instead of:

👉 Downloading the entire movie before watching  

Streaming allows faster access and updates.

---


# 🔄 Hot Module Replacement (HMR)

Hot Module Replacement means:

👉 Browser updates instantly when code changes  
👉 No full page refresh required  

---

# 🌍 Where Is Vite Used?

• React applications  
• Vue applications  
• Vanilla JavaScript projects  
• Other modern frameworks  

---

# 📈 Industry Adoption

✔ Rapidly growing popularity  
✔ Replacing Create React App in many projects  
✔ Used in real production environments  

---

# 🛠 Creating a React App With Vite

We will now create a React project using Vite.

---

#  Create Project

** Requirement : NodeJs

```bash
npm create vite@latest
```
---

