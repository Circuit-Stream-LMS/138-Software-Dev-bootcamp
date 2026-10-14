# React Native Styling Practice Exercise

## Objective

Practice applying **React Native styling concepts** using your existing app (`App.js` + `components/ProfileCard.jsx`). 

## Instructions

1. **Copy the existing project structure** with `App.js` and `components/ProfileCard.jsx`.

3. **Style the toggle button**:

   * Increase **padding** vertically and horizontally.
   * Change the **border radius** to make it pill-shaped.
   * Apply a **shadow effect** to give it elevation.

4. **Update ProfileCard styles**:

   * Add a **border** around each card.
   * Adjust **padding and margin** for better spacing.
   * Try changing the **card background** based on light/dark theme.
   * Make the **image slightly larger** and add a **border radius**.

5. **Modify mount animation** (the cards use `entering={FadeInDown...}` from `react-native-reanimated` in `ProfileCard.jsx`):

   * Slow down the entry animation by increasing `.duration()` so that cards appear more gradually.
   * Add `.springify()` instead of a timed duration for a bouncy effect.
   * Change the stagger by editing the `index * 150` delay, or try other entering animations such as `FadeInLeft`, `SlideInRight` or `ZoomIn`.

6. **Text styling**:

   * Make the user name bold and slightly larger.
   * Adjust the bio text color for better contrast with card background.
