# Node.js Overview

## What is Node.js?

Node.js is a **runtime environment** for executing JavaScript code outside a browser. It enables developers to use JavaScript for server-side programming, expanding its utility beyond client-side web development.

### Key Points:
- Node.js is **not a programming language**; JavaScript is the language used.
- It allows JavaScript to run directly on the server.
- Client-side features like `window`, `document`, and the DOM are not available.

---

## Why is Node.js Not a Programming Language?

JavaScript is the programming language used in Node.js. Node.js simply provides an environment (built on Chrome's V8 engine) to execute JavaScript outside of a browser. It also offers features like:
- **File system operations** (`fs` module): Enables reading and writing files directly on the server.
- **Networking capabilities** (`http` module): Facilitates building servers and handling HTTP requests.
- **Event-Driven Programming**: Supports non-blocking, asynchronous operations for handling large-scale I/O tasks efficiently.

---

## Differences from Frontend JavaScript

### Features Not Available in Node.js:
- **DOM Manipulation**: No `document` or `window` objects, as there’s no browser context.
- **Browser-Specific APIs**: Functions like `alert`, `localStorage`, and `navigator` are not accessible.

### What Node.js Provides Instead:
- **File System Interaction**: Use the `fs` module for creating, reading, updating, and deleting files.
- **Server-Side Networking**: Build scalable server applications with the `http` and `net` modules.
- **Event-Driven Programming**: Handle asynchronous events, such as HTTP requests or file operations, using callbacks, promises, or `async/await`.
