#  Deploying a React + Vite App on Render

This guide walks you through deploying your Vite-powered React project to [Render](https://render.com), a platform for hosting web apps and static sites.

---

## ✅ Prerequisites

Before we begin, ensure you have the following:

- A GitHub (or GitLab/Bitbucket) account
- A Render account (sign up at [render.com](https://render.com))
- Your React + Vite app pushed to a Git repository

---

## Step 1: Prepare Your Vite Project for Deployment

1. **Open your `vite.config.js` file**
   ```js
   // vite.config.js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
   });
   ```

2. **Add a `build` script in `package.json` if not already present**
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     }
   }
   ```

3. **Ensure your `dist` folder is in `.gitignore`**  
   Vite will generate this during build; it shouldn't be tracked.

---

## Step 2: Push Your Project to GitHub

1. Initialize a Git repo (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Push to GitHub:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

---

##  Step 3: Create a New Static Site on Render

1. Go to [https://dashboard.render.com](https://dashboard.render.com) and click **"New" → "Static Site"**.
2. Connect your GitHub account and select the repository containing your Vite project.
3. Configure your static site with the following settings:

   - **Name**: (Your app name)
   - **Branch**: `main` (or whatever your default branch is)
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

4. Click **"Create Static Site"**. Render will start building and deploying your app.

---

## Step 4: Test Your Deployment

Once the build completes, Render will provide a public URL. Open it in your browser and verify your app is working.

---

## Notes

- Since we are using client-side routing with react-router package,we need to create a `_redirects` file in the `public/` directory with:
  ```
  /*    /index.html   200
  ```
  This ensures that your app handles routing correctly on page refresh.

---

## Example `.gitignore`

```gitignore
node_modules
dist
.env
```

---