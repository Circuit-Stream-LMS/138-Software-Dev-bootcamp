# Deploying a Node.js App to Render via GitHub

This guide explains how to deploy your Node.js application to [Render](https://render.com) using a GitHub repository. It includes setting up environment variables and configuring deployment settings.

---

## ✅ Prerequisites

- A free [Render](https://render.com) account
- Your Node.js app pushed to a GitHub repository
- `start` script defined in your `package.json` file (e.g., `"start": "node index.js"`)

---

## 1️⃣ Connect Your GitHub Repository to Render

1. Go to [https://dashboard.render.com](https://dashboard.render.com).
2. Click **"New +"** → **"Web Service"**.
3. Click **"Connect account"** if you haven’t linked your GitHub account yet.
4. Select the repository containing your Node.js app.

---

## 2️⃣ Configure the Web Service

Fill out the form with the following:

- **Name**: Choose a name for your service.
- **Region**: Pick a region close to your users.
- **Branch**: Select the branch to deploy from (usually `main` or `master`).
- **Root Directory**: Leave blank if the `package.json` is in the root folder.
- **Runtime**: Select `Node`.
- **Build Command**: Usually `npm install`
- **Start Command**: Usually `npm start`

---

## 3️⃣ Set Environment Variables

1. Scroll to the **"Environment"** section during setup or later via the **"Environment"** tab.
2. Add each variable needed by your app:
   - Example:
     - `PORT` → `3000`
     - `DB_URI` → `your-database-url`
     - `API_KEY` → `your-api-key`
3. Click **"Save"** after adding your variables.

> ⚠️ Note: Do **not** include the `.env` file in your GitHub repo. Instead, add all environment variables directly in the Render dashboard.

---

## 4️⃣ Deploy Your App

1. Click **"Create Web Service"**.
2. Render will:
   - Clone your GitHub repo
   - Install dependencies
   - Run the build/start commands
3. Once complete, your app will be live at:

---

## 5️⃣ Enable Auto Deploys (Optional)

To redeploy automatically when you push to GitHub:

1. Go to your service's **"Settings"** tab.
2. Turn on **"Auto Deploy"**.

---


