# Agile & Scrum — Student Guide
**Unit 5 · Full Stack Integration · Lesson 1**

---

## What's This Lesson About?

You're going to learn how real software teams actually work. Not just how to write code — but how teams **plan**, **organize**, and **ship** projects together without things falling apart.

By the end you'll be able to:
- Explain the Agile way of thinking and its 4 core values
- Describe the 3 Scrum roles, 3 artifacts, and how a Sprint works
- Plan a mini Sprint using a free tool called Trello

---

## Section 1 — Why Do We Need a Better Way to Build Software?

Imagine you're building a mobile app for a friend. You spend 3 months in your room coding everything you *think* they want. Then you show them — and they hate it. Wrong colours, wrong features, not what they imagined at all.

That's the problem **Waterfall** development had. Teams planned everything upfront, built for months (or years), then showed the client at the very end. By then it was too late to change anything.

**Agile** fixes this by breaking the work into small chunks and showing progress every few weeks. If something's wrong, you catch it early — not after 6 months of wasted work.

> 💡 Think of it like this: Waterfall = baking the whole cake before tasting the batter. Agile = tasting as you go.

---

## Section 2 — The Agile Manifesto (The 4 Big Ideas)

In 2001, a group of developers got together and wrote down 4 values that should guide how software is built. This is called the **Agile Manifesto**.

| We value **more**... | Over... |
|---|---|
| **People talking to each other** | Following rigid processes |
| **Working software** | Massive documentation |
| **Working with the customer** | Negotiating contracts |
| **Adapting to change** | Sticking to the original plan |

This doesn't mean documentation or plans are bad — it just means people and results matter *more*.

---

## Section 3 — The 12 Principles (The Ones That Actually Matter Day-to-Day)

Here are the 12 principles simplified. Think of these as the rules of the game.

**1. Deliver early and often**
Don't wait until everything is perfect. Ship something that works, get feedback, improve it.

**2. Welcome change**
Even if a customer changes their mind halfway through — that's okay. Stay flexible.

**3. Short delivery cycles**
Release something new every 1–4 weeks instead of once a year.

**4. Talk to each other daily**
Developers and business people should check in every day, not just at milestones.

**5. Trust your team**
Give people what they need and get out of their way. Micromanaging kills creativity.

**6. Favour real conversation**
A 5-minute call beats a 20-message email chain. (On remote teams: video calls count.)

**7. Working software = progress**
A feature that *works* is more valuable than a 50-page design document.

**8. Sustainable pace**
Don't burn people out. Teams that work reasonable hours are more productive long-term.

**9. Care about quality**
Clean code that's easy to change is worth more than messy code that technically works.

**10. Keep it simple**
Don't build features nobody asked for. Build the *minimum* that solves the problem.

**11. Self-organizing teams**
The people doing the work should decide *how* to do the work.

**12. Reflect and improve**
After every sprint, ask: *What went well? What could be better?* Then actually change it.

---

## Section 4 — Scrum: The Most Popular Agile Framework

Agile is a *mindset*. Scrum is a *specific system* for putting that mindset into practice.

### The 3 Roles

Think of a Scrum team like a restaurant kitchen:

| Role | What They Do | Restaurant Analogy |
|---|---|---|
| **Product Owner** | Decides *what* to build and in what order | Head Chef who decides the menu |
| **Scrum Master** | Keeps the team running smoothly, removes blockers | Kitchen Manager |
| **Developers** | Actually build the thing | The Cooks |

All three are essential. Remove one and the team struggles.

---

### The 3 Artifacts (Things the Team Creates)

**Product Backlog** — The master wish list of everything that *could* be built. The Product Owner keeps this organized by priority.

> Example: "User can log in", "User can upload a photo", "Dark mode", "Export as PDF"

**Sprint Backlog** — The short list of tasks the team commits to finishing *this sprint*.

> Example (for a 2-week sprint): "User can log in", "User can reset their password"

**Increment** — The actual working software produced at the end of a sprint. It should be shippable — meaning it works and could be released.

---

### How a Sprint Works

A **Sprint** is a fixed time box (usually 1–2 weeks) where the team builds something and ships it.

```
Sprint Planning  →  Daily Standups  →  Build  →  Sprint Review  →  Retrospective
```

- **Sprint Planning** (start): Team picks tasks from the backlog and sets a Sprint Goal
- **Daily Standup** (every day, 15 min max): Each person answers 3 questions:
  - What did I do yesterday?
  - What am I doing today?
  - Is anything blocking me?
- **Sprint Review** (end): Team demos what they built to stakeholders
- **Retrospective** (end): Team reflects — what worked, what didn't, what to improve

---

### The Sprint Goal

Every sprint needs **one clear goal** — not a list of tasks, but a single sentence describing the outcome.

**Bad Sprint Goal:** "Work on login, fix bugs, update the dashboard"

**Good Sprint Goal:** "Allow new users to create an account and log in so they can start using the app"

The goal gives the team focus. If something unexpected comes up mid-sprint, the team asks: "Does this help us reach our Sprint Goal?" If not, it waits.

---

### Story Points — Estimating Effort

Instead of estimating in hours (which is hard to predict), Scrum teams use **Story Points** — a relative scale of effort.

| Points | Meaning | Example Task |
|---|---|---|
| 1 | Tiny — 30 mins | Change button colour |
| 2 | Small — a few hours | Add a form field with validation |
| 3 | Medium — half a day | Build a user profile page |
| 5 | Large — 1–2 days | Set up user authentication |
| 8+ | Too big — split it up | "Build the whole checkout flow" |

**Key idea:** Points are *relative*. A 2-point task is roughly twice as complex as a 1-point task — not exactly 2 hours vs 1 hour.

---

### Definition of Done

Before a sprint starts, the team agrees on what "done" actually means. Without this, one person thinks "done = I wrote the code" and another thinks "done = tested, reviewed, and deployed."

**Example Definition of Done:**
- Code is written and submitted as a pull request
- At least one teammate reviewed the code
- All tests are passing
- Feature works on both desktop and mobile
- Deployed to the staging environment

If a task doesn't meet *all* of these criteria, it's not done.

---

## Section 5 — Hands-On: Plan a Sprint with Trello

Now it's your turn. You're going to use **Trello** — a free, visual task management tool — to plan a sprint for a simple project.

### What is Trello?

Trello is a digital board made up of **lists** and **cards**. Each card = one task. You drag cards between lists as work progresses.

Think of it like sticky notes on a whiteboard — except online and shareable with your team.

### 🔗 Get Started: [trello.com](https://trello.com) (free account)

---

### Set Up Your Board

Create a new board and add these 5 lists (in this order):

1. **Backlog** — Everything you *could* build
2. **Current Sprint** — What you're building *this sprint*
3. **In Progress** — What you're actively working on right now
4. **Review** — Done building, needs to be checked
5. **Done** — Finished and meets your Definition of Done ✅

---

### Your Task

You're building a **Note-Taking App**. Use the AI prompt below to generate your Product Backlog, then set up your Trello board.

**AI Prompt (copy this into Claude or ChatGPT):**

```
You are an Agile/Scrum coach helping a student plan their first Sprint.

The project is: a simple Note-Taking web app where users can create, edit, and delete notes.

Please give me:
1. A Product Backlog — a prioritized list of user stories (written as "As a user, I want to... so that...")
2. A Current Sprint list — the top tasks a small team could realistically finish in one week
3. A Sprint Goal — one clear sentence describing what we're building this sprint
4. A Definition of Done — a short checklist (4-5 items)
5. Any dependencies or blockers I should know about

Keep the language simple. No story points needed — just focus on clear tasks I can put on a Trello board.
```

Once you have your AI output:
1. Create cards in your **Backlog** list for each user story
2. Move the sprint items to **Current Sprint**
3. Write your Sprint Goal at the top of the board description
4. Add your Definition of Done as a checklist template

---

## Quick Reference Cheat Sheet

| Term | One-line definition |
|---|---|
| Agile | A mindset: ship often, adapt fast, focus on people |
| Scrum | A framework: Roles + Artifacts + Sprints |
| Sprint | A time-boxed work period (1–4 weeks) |
| Product Backlog | Master list of all possible features |
| Sprint Backlog | Tasks the team commits to this sprint |
| Sprint Goal | One sentence — what are we delivering? |
| Daily Standup | 15-min daily check-in (what did I do, what am I doing, any blockers?) |
| Story Points | Relative effort scale (not hours) |
| Definition of Done | Agreed checklist — what "finished" actually means |
| Retrospective | End-of-sprint reflection: what worked, what didn't |