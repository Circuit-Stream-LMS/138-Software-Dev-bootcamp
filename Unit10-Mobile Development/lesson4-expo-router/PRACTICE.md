# Practice: Pet Tracker with Expo Router

## Objective

Build a multi-screen **Pet Tracker** app with **Expo Router**: a **tab bar** for the main sections and a **stack** for going deeper. Then add one platform feature and one hook.

Start a new project (or a new folder of screens in a copy of this one). Use `mockPets.json` (in the `practice/` folder) as your starting data.

---

## Required screens

```
src/app/
├── _layout.jsx          Stack (hides the header for the tabs group)
├── (tabs)/
│   ├── _layout.jsx      Tabs
│   ├── index.jsx        Pet List
│   └── about.jsx        About
├── pets/
│   └── [id].jsx         Pet Details
└── add-pet.jsx          Add Pet
```

### 1. Pet List (tab, `index.jsx`)
- Shows the pets in a `FlatList`.
- Each pet is a `Link` (or uses `router.push`) that opens **Pet Details** for that pet.
- An **"Add pet"** button opens the **Add Pet** screen.

### 2. About (tab, `about.jsx`)
- Shows the app name and a short description.
- Has an icon in the tab bar.

### 3. Pet Details (`pets/[id].jsx`)
- Reads the `id` with `useLocalSearchParams()` and finds the pet.
- Shows name, type, age and note.
- Sets the header title to the pet's name.
- Handles an `id` that does not exist.

### 4. Add Pet (`add-pet.jsx`)
- `TextInput` fields for name, type and age.
- A **Save** button that checks the inputs are not empty and then goes back to the list.

---

## Platform feature (choose the one for your device)

| Your device | Add this |
|---|---|
| **iOS** | On Pet Details, a **"Actions"** button opens an `ActionSheetIOS` with *Mark as favourite*, *Share* and a red *Delete* option. Show the chosen action on screen. |
| **Android** | On **Add Pet**, Show a `ToastAndroid` message when a pet is saved. |



---

## Hooks challenge

On the **Pet List**, use **`useWindowDimensions()`** so the list shows **1 column on a phone** and **2 columns when the window is at least 600 wide** (hint: `FlatList` has a `numColumns` prop; if you change it while the app runs, give the list a different `key`).

Then show the text **"Portrait"** or **"Landscape"** on the About screen with `useDeviceOrientation()`.

---
