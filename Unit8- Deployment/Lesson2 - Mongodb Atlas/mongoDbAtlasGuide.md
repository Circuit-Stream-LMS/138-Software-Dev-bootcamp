# Transitioning a Local MongoDB App to MongoDB Atlas (Free Tier)

This guide explains how to move your Node.js + Express app from using local MongoDB to MongoDB Atlas, a cloud-based MongoDB service with a free tier.

---

## Prerequisites

- Node.js app using Express and Mongoose
- MongoDB installed locally (for now)
- GitHub account (for easy Atlas login)
- MongoDB Atlas account (free): [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)

---

## We will use Unit-3 backed development lesson 6 as an example for for end to end deployment

## Step 1: Create a MongoDB Atlas Cluster

1. Go to [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. Sign in or create an account
3. Click **"Build a Database"**
4. Select **"Shared"** → click **"Create"**
5. Choose a cloud provider and region (default is fine for free tier)
6. Name your cluster and click **"Create Cluster"**

---

## Step 2: Create a Database User

1. In your Atlas project, go to **"Database Access"**
2. Click **"Add New Database User"**
3. Set a username and password (remember these!)
4. Set **Database User Privileges** to **"Read and Write to any database"**
5. Click **"Add User"**

---

## Step 3: Add Network IP Access

1. Go to **"Network Access"**
2. Click **"Add IP Address"**
3. Select **"Allow Access from Anywhere"** (or add your IP for security)
4. Click **"Confirm"**

---

## Step 4: Connect to Your Cluster

1. Go to **"Database"** → click **"Connect"** on your cluster
2. Choose **"Connect your application"**
3. Copy the connection string (e.g., `mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority`)
4. Replace `<username>` and `<password>` with your DB user’s credentials

---