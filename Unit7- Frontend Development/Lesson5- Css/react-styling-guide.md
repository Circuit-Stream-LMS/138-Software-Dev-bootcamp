# React Styling — Quick Guide

React has no built-in styling system. It's just HTML + CSS under the hood. The 4 ways to style a component:

## 1. Global CSS

```css
/* index.css */
.app-text { color: purple; }
```
```jsx
import './index.css'; // in main.jsx
```

**Rule:** Applies everywhere in the app, to any element with that class name.

**Use for:** resets, base typography, colors/variables, layout that should be the same everywhere.

## 2. Plain component CSS (`Card.css` + `import`)

```css
/* Card.css */
.card { border: 1px solid #ddd; padding: 20px; }
```
```jsx
import './Card.css';
function Card() {
  return <div className="card">...</div>
}
```

**Rule:** The import does **not** scope styles to this component. It only decides whether the stylesheet gets included in the build at all. Once included, the class names are global — any element anywhere with `className="card"` gets styled, whether or not that file imported the CSS.

**Use for:** small apps, prototypes, quick demos — but know it's global under the hood, not real scoping.

## 3. CSS Modules (`Button.module.css`)

```css
/* Button.module.css */
.button { background: green; }
```
```jsx
import styles from './Button.module.css';
<button className={styles.button}>Click</button>
```

**Rule:** The `.module.css` suffix makes the build tool rename the class to something unique (e.g. `Button_button__a1b2c`). Only the component that imports it can use it. No collisions, no accidental sharing.

**Use for:** any real component styling. This should be your default.

## 4. Inline styles

```jsx
<div style={{ color: 'red', padding: '8px' }}>Hi</div>
```

**Rule:** Scoped to that one element. Values are JS (camelCase properties, numbers = px). Can't do `:hover` or `@media`.

**Use for:** styles computed from JS/props (dynamic width, color from data). Not for reusable design.

---

## Precedence — what wins when two rules conflict

Normal CSS cascade rules apply. React changes nothing here.

1. **Specificity** — id > class > element.
2. **If specificity is tied** — whichever rule is loaded *later* in the final bundle wins.
3. **Inline `style={{}}`** beats almost all stylesheet rules regardless of specificity.
4. **`!important`** beats everything above (except another `!important`, which then falls back to specificity → order).

**Example from your files:** `index.css` and `Card.css` both define `.app-text` (purple vs green). Same specificity → whichever file ends up later in the bundle wins. This is fragile — don't rely on import order to get the result you want.

**What to do:** don't fix conflicts by reordering imports or reaching for `!important`. Fix them by not reusing the same class name in two files, or by using CSS Modules so it can't happen.

---

## Common bugs (from your code)

| Symptom | Cause | Fix |
|---|---|---|
| Styles don't apply at all, no error | CSS file never imported anywhere → dropped from build entirely | Add the `import './X.css'` |
| Import added but still nothing | Wrong relative path (e.g. two files both named `Card.css` in different folders) | Check the file actually being resolved matches the one you're editing |
| Removing an import breaks styling on a component you didn't touch | That import was the only thing pulling shared global class names into the build | Expected behavior with plain CSS — switch to CSS Modules if you don't want this |
| Component styled even though it imports no CSS | It shares a global class name with a component that does import that CSS | Same as above — use CSS Modules to prevent it |
| Dev server not reflecting changes | Stale Vite cache | `rm -rf node_modules/.vite`, restart, hard refresh |

---

## What to use, when

- **Global CSS** → resets, variables, typography, app-wide layout.
- **CSS Modules** → default choice for component styling. Prevents collisions.
- **Plain component CSS** → fine for quick demos only. Know it's global, not scoped.
- **Inline styles** → dynamic, JS-computed values only.
- **`!important`** → last resort, mainly for overriding third-party CSS you can't edit.
