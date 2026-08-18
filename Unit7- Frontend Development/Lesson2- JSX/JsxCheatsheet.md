# JSX Guide & Cheatsheet

## What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript used with React. It lets you write HTML-like markup directly inside JavaScript code, which React then transforms into regular JavaScript function calls (`React.createElement`) under the hood.

Instead of writing:

```javascript
React.createElement('h1', { className: 'title' }, 'Hello World')
```

You can write:

```jsx
<h1 className="title">Hello World</h1>
```

JSX makes UI code easier to read and write by keeping markup and logic together in one place, close to the structure of the actual rendered output.

### Key characteristics
- JSX is **not** a string or valid HTML — it's syntactic sugar that compiles to JavaScript (via Babel or similar tools).
- JSX produces **React elements**, which describe what should appear on the screen.
- Because it compiles to JavaScript, you can embed real JS expressions inside it using curly braces `{ }`.
- Every JSX expression must have **exactly one root element** (or use a Fragment).

---

## How to Use JSX

### 1. Basic element
```jsx
const element = <h1>Hello, world!</h1>;
```

### 2. Embedding expressions
Use curly braces `{}` to embed any valid JS expression.
```jsx
const name = "Alex";
const element = <h1>Hello, {name}!</h1>;
```

### 3. JSX must return a single root element
```jsx
// ❌ Invalid — two sibling elements
return (
  <h1>Title</h1>
  <p>Text</p>
);

// ✅ Valid — wrapped in a parent
return (
  <div>
    <h1>Title</h1>
    <p>Text</p>
  </div>
);

// ✅ Valid — using a Fragment (no extra DOM node)
return (
  <>
    <h1>Title</h1>
    <p>Text</p>
  </>
);
```

### 4. Attributes use camelCase
Since JSX compiles to JS, HTML attribute names are adapted:
```jsx
<div className="container" tabIndex={0} onClick={handleClick}>
  Click me
</div>
```
- `class` → `className`
- `for` → `htmlFor`
- `onclick` → `onClick`
- `tabindex` → `tabIndex`

### 5. Self-closing tags
Elements without children must be self-closed.
```jsx
<img src="logo.png" alt="Logo" />
<input type="text" />
<br />
```

### 6. Conditional rendering
```jsx
{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}

{isLoggedIn && <p>Welcome back!</p>}
```

### 7. Rendering lists
Always provide a unique `key` prop.
```jsx
const items = ['Apple', 'Banana', 'Cherry'];

<ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
```

### 8. Inline styles
Styles are passed as a JS object (camelCase properties).
```jsx
<div style={{ backgroundColor: 'blue', fontSize: '16px' }}>
  Styled box
</div>
```

### 9. Components in JSX
Custom components must start with a **capital letter**.
```jsx
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  return (
    <div>
      <Greeting name="Alex" />
      <Greeting name="Sam" />
    </div>
  );
}
```

### 10. Comments inside JSX
```jsx
<div>
  {/* This is a comment */}
  <p>Content</p>
</div>
```

---

## JSX Cheatsheet

| Task | Syntax |
|---|---|
| Embed a variable/expression | `{expression}` |
| Class attribute | `className="my-class"` |
| Inline event handler | `onClick={handleClick}` |
| Conditional (ternary) | `{cond ? <A /> : <B />}` |
| Conditional (short-circuit) | `{cond && <A />}` |
| Render a list | `{arr.map(item => <li key={item.id}>{item.name}</li>)}` |
| Fragment (short syntax) | `<>...</>` |
| Fragment (explicit) | `<React.Fragment>...</React.Fragment>` |
| Self-closing tag | `<img />`, `<input />`, `<br />` |
| Inline styles | `style={{ color: 'red', fontSize: 14 }}` |
| Spread props | `<Component {...props} />` |
| Children prop | `<Wrapper>{children}</Wrapper>` |
| Boolean attribute | `<input disabled />` or `<input disabled={true} />` |
| Comment | `{/* comment */}` |
| Passing a function reference | `onClick={handleClick}` (no parens) |
| Passing a function with args | `onClick={() => handleClick(id)}` |
| Rendering null (nothing) | `return null;` |
| String vs expression attribute | `id="static"` vs `id={dynamicId}` |

