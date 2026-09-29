# Domains, DNS, SSL and AI Agents in Production

# PART 1: Domain Names, DNS and SSL

## 1. The problem

Your app is live at something like:

```
https://my-mern-app-x7k2.onrender.com
```

It works, but you would not put that on a business card. Real products live at `myapp.com`. Let's learn how that works.

---

## 2. What is a domain name?

A **domain name** is the human-friendly address of a website, like `example.com`.

Every server on the internet is actually found by an **IP address**, a number like `216.24.57.1`. Humans are bad at remembering numbers, so we use names instead.

| | IP address | Domain name |
|---|---|---|
| Easy to remember? | No | Yes |
| Shows your brand? | No | Yes |
| If the server changes | The address changes | Same name, you just update where it points |

**Key idea:** a domain name is a friendly alias for an IP address.

### Anatomy of a domain

```
      www.myapp.com
       |    |    |
       |    |    +-- TLD (top-level domain): .com, .ca, .dev, .io
       |    +------- Domain name (the part you buy): myapp
       +------------ Subdomain (the part you choose freely): www, api, blog
```

- You **buy** `myapp.com`.
- Once you own it, you can create as many subdomains as you want for free: `www.myapp.com`, `api.myapp.com`, `admin.myapp.com`.

> **MERN example:** frontend at `myapp.com`, backend at `api.myapp.com`.

---

## 3. What is DNS?

**DNS (Domain Name System)** is the system that translates domain names into IP addresses. Think of it as the **phonebook of the internet**: you look up a name, it gives you a number.

What happens when you type `myapp.com` in your browser:

1. Your browser asks: "What is the IP address of `myapp.com`?"
2. A DNS server looks it up (checking its memory first, then asking other DNS servers).
3. It replies: "It's `216.24.57.1`."
4. Your browser connects to that server and the site loads.

All of this takes milliseconds.


---

## 4. What is a custom domain?

A **custom domain** is a domain you own and point at your app, instead of using the default one Render gave you.

| Default | Custom |
|---|---|
| `my-app.onrender.com` | `myapp.com` |

**Why bother?** Professional look, your own brand, and visitors trust it more. Put it on your portfolio and CV.

---

## 5. Registrar & DNS host

- **Domain registrar:** the company you *buy and rent* the domain from (Namecheap, GoDaddy, Hostinger, Cloudflare..).
- **DNS host:** the place where your DNS records live. Usually this is the same registrar by default

You **rent** a domain, usually per year. If you don't renew, you lose it.

**What to compare when choosing a registrar:**
- First-year price *and* renewal price (renewals are often more expensive)
- Reputation and reviews
- Free extras (privacy protection should be free)
- Support

**Options you may see:** [Hostinger](https://www.hostinger.com/), [GoDaddy](https://www.godaddy.com/en-ca), [Namecheap](https://www.namecheap.com/), [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/).

> You do **not** need to buy a domain today. Understanding the steps is the goal.

---

## 6. DNS records you should know

DNS records are instructions that say "when someone asks for this name, do this."

| Record | What it does | Example |
|---|---|---|
| **A** | Points a name to an **IPv4 address** | `myapp.com` -> `216.24.57.1` |
| **CNAME** | Points a name to **another name** (an alias) | `www.myapp.com` -> `my-app.onrender.com` |
| **MX** | Says where **email** for the domain should go | `myapp.com` -> Google's mail servers |

---

## 7. Connecting a custom domain to your Render app

Order matters. Start in Render, then go to your registrar.

1. **In Render:** open your service, go to **Settings**, then **Custom Domains**, then **Add Custom Domain**. Enter `www.myapp.com`.
2. Render shows you exactly which DNS records to create. **Use the values Render shows you.**
3. **At your registrar:** open **DNS settings** for the domain and add the records:
   - Type **CNAME**, Name `www`, Value `your-app.onrender.com`
   - For the root domain, add the **A record** Render shows you (Render's docs list the IP)
4. **Back in Render:** click **Verify**.
5. **Wait.** DNS changes are not instant (see propagation below). Verification can take from minutes up to a few hours.
6. Open `https://www.myapp.com` and confirm it loads.

Official steps: [Render custom domains docs](https://render.com/docs/custom-domains)

### What is DNS propagation?

DNS answers are **cached** all over the world so lookups are fast. When you change a record, it takes time for old cached answers to expire. This delay is called **propagation**. The time each record is cached is its **TTL** (time to live).

**Rule of thumb:** after a DNS change, wait, don't panic and keep changing things. Check with the tools in section 9.

### Don't forget your MERN app itself

After your domain works, update anything that had the old URL hardcoded:
- **CORS** settings on your Express backend (allow `https://www.myapp.com`)
- The **API URL** environment variable in your React frontend


MongoDB Atlas does not care what your domain is, so nothing changes there.

---

## 8. What is SSL/TLS (HTTPS)?

**SSL/TLS** encrypts the connection between your user's browser and your server. That's `https://` in the address bar.

*Small note:* SSL is the old name. The modern protocol is **TLS**. People still say "SSL" out of habit, and they mean the same thing in practice.

**Why it matters:**
- **Security:** data (passwords, tokens, form input) can't be read by anyone in the middle
- **Trust:** browsers show a "Not secure" warning on plain `http://`
- **Required by many features:** some browser APIs only work on HTTPS
- **SEO:** search engines prefer HTTPS sites

### A certificate is like an ID card for your website

A **certificate** proves "this server really is `myapp.com`." It is issued by a trusted authority (a Certificate Authority, or CA). Browsers trust the CA, so they trust your site.

### SSL on Render

Render gives you HTTPS **for free and automatically**:
- Certificates are issued when your custom domain is verified
- They renew automatically (no calendar reminders for you)
- HTTP traffic is redirected to HTTPS

If HTTPS isn't working right after adding a domain, it is almost always because DNS hasn't finished propagating yet. Wait and re-check.

---

## 9. Free tools to check your DNS

- **[DNS Checker](https://dnschecker.org/)**: does my domain point where I think?
- **[WhatsMyDNS](https://www.whatsmydns.net/)**: see propagation from servers around the world

Command line (works on Mac, Linux, and Windows):

```bash
nslookup www.myapp.com
```

---

## 10. Troubleshooting checklist

| Problem | Likely cause |
|---|---|
| Domain not found / not loading | DNS not propagated yet, or a typo in the record |
| Render won't verify the domain | Wrong record type or value, or you're still waiting on propagation |
| "Not secure" warning | Certificate not issued yet (wait for DNS) or you're visiting `http://` |
| Works on `www` but not the root | You only set one of the two |
| App loads but API calls fail | CORS or frontend API URL still uses the old domain |

---

# PART 2: AI Agents in Production Workflows

## 12. What makes an agent "autonomous"?

You already know **in-IDE assistants** (like Copilot in VS Code) that suggest code while you type. **Autonomous agents** go further: you give them a goal, and they plan and carry out **multiple steps** on their own.

| | In-IDE assistant | Autonomous agent |
|---|---|---|
| Works on | The file you have open | The whole repository |
| Task size | A line or function | Multi-step tasks |
| Where it runs | Your editor | CLI, GitHub, CI environments |
| Output | Suggestions | Edited files, branches, pull requests |
| Context | Your code | Code plus issues, PRs, comments, logs |

**Examples of agents you can use outside the IDE:**
- **GitHub Copilot on GitHub:** reviews and summarizes pull requests, suggests improvements
- **Claude Code:** a command-line agent that reads your repo, runs commands and edits files

Docs: [GitHub Copilot docs](https://docs.github.com/en/copilot) | [Claude Code docs](https://docs.claude.com/en/docs/claude-code/overview)


---

## 13. Agents in GitHub workflows

Copilot on GitHub can:
- **Review a pull request** and comment on possible bugs
- **Summarize PR changes** so reviewers understand them faster
- **Suggest improvements** to code and docs
- **Flag possible security issues**

**Try these prompts in a pull request on your own project:**
- "Summarize the changes in this pull request."
- "Are there any bugs or security concerns in this diff?"

**Think about:** What did the agent catch? What did it miss? Would you have merged this without a human reading it?

---

## 14. Using a CLI agent (Claude Code)

A CLI agent runs in your terminal, inside your project folder.

**Try these prompts:**

```
Analyze this repository and describe the deployment architecture.
```
```
Add a CI pipeline for this project.
```

**After the agent finishes, always:**
1. Run `git status` and `git diff` to see exactly what it changed
2. Read the changes like you would read a teammate's pull request
3. Ask yourself: do I understand every line?

---

## 15. Generating a CI/CD pipeline with an agent

**CI/CD** means every code change is automatically tested and (if it passes) deployed. On GitHub this is done with **GitHub Actions** workflows in `.github/workflows/`.

**Try this prompt:**

```
Create a GitHub Actions workflow that runs on every pull request
merged to main in this project. It should:
1. Install dependencies
2. Run tests
3. Build the project
4. Deploy to Render
```

**Review checklist for a generated workflow:**
- **Triggers:** does it run when you expect (and only then)?
- **Environment variables:** are any values hardcoded that should be settings?
- **Secrets:** are passwords/API keys stored in GitHub Secrets, never in the file?
- **Steps:** are the build/test commands the ones your project really uses?
- **Missing safeguards:** what happens if tests fail? Does it still deploy?

---

## 16. Improving an existing pipeline

Here is a deliberately imperfect workflow. Try to spot the problems **before** asking the agent.

```yaml
name: Deploy
on: push

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm run build
      - run: curl -X POST https://api.render.com/deploy/srv-xxxx?key=SECRET123
```

**What's wrong?**
- Runs on *every* push to *any* branch
- No tests before deploying
- Secret key is written in the file (visible to anyone with repo access)
- Build and deploy are lumped together
- Dependencies are downloaded from scratch each time

**Try this prompt:**

```
Improve this workflow for reliability and security.
```

**Things a good answer may include:** dependency caching, only deploying from `main`, running tests first, separate build and deploy jobs, secrets stored in GitHub Secrets.

**Then evaluate:** Is each suggestion correct for *my* project? Did the agent assume things that aren't true (like a `test` script that doesn't exist)?

---

## 17. Understanding and improving your deployment

**Try these prompts:**

```
Explain how this application is deployed.
```
```
Suggest improvements to the deployment strategy.
```

The agent may suggest:
- A **staging environment** (a safe copy of production to test on first)
- A **rollback strategy** (how to quickly go back to the last working version)
- **Monitoring** (knowing your app is down before your users tell you)

**Focus on the reasoning:** does the explanation match what you actually built? Agents can sound confident and still be wrong.

---

## 18. Debugging failures with agents

The most useful thing about agents in production is **speed of diagnosis**. But the quality of the answer depends on the quality of the context you give.

### 18.1 A failed CI pipeline

**Steps:**
1. Copy the failing log from the GitHub Actions run (or use `gh run view <run-id> --log-failed`)
2. Paste it to the agent

```
Explain why this build failed and propose a fix.

<paste log here>
```

**Common causes to check the agent's answer against:**
- Syntax errors
- Dependency issues (wrong version, missing package)
- Missing environment variables
- Wrong build commands or paths

**Always verify:** apply the fix, re-run, and check it really passes. Don't just trust the explanation.

### 18.2 A production error

**Give the agent a real error from your Render logs:**

```
Identify likely causes of this production error.

<paste stack trace / log lines>
```

Typical MERN culprits it might point to:
- `MongoServerError` / `ECONNREFUSED`: wrong connection string, or Atlas **Network Access** doesn't allow Render's IP
- `Cannot find module`: a package missing from `package.json`
- `undefined` env variable: variable set locally but not in Render
- CORS errors: frontend URL not allowed on the backend

### Context is everything

| What you give | What you get |
|---|---|
| "My app is broken" | A useless, generic answer |
| The error message only | A guess |
| Error + relevant logs + the code around it + what changed recently | A useful, specific diagnosis |

**Good context checklist:**
- The exact error and stack trace
- What you were doing when it happened
- What changed recently (a new deploy? a new env variable?)
- The relevant files or config

> **Never paste real secrets** (passwords, API keys, connection strings) into an AI tool. Replace them with placeholders first.

### 18.3 Root cause exploration

Let the agent investigate more broadly:

```
Trace how this deployment works and identify possible failure points.
```

It may look through your CI pipeline, deploy scripts and environment config. **Evaluate:** how deep did it go? Did it find real risks, or just generic advice?

---

## 19. When NOT to trust an autonomous agent

Agents are powerful and confident, and sometimes confidently wrong.

| Risk | Why it's dangerous |
|---|---|
| **Infrastructure changes without review** | A wrong change can take your whole app down or delete data |
| **Secrets mistakes** | Agents may hardcode keys, log them, or commit them to Git |
| **Bad rollback plans** | A plausible-sounding rollback that doesn't actually work is worse than none |
| **Hallucinated assumptions** | The agent may "remember" a config, service or setting that doesn't exist in your project |

**Safe habits:**
1. **Read every diff** before you accept it
2. **Use branches and pull requests**, never let an agent push straight to `main`
3. **Test in staging** before production
4. **Keep secrets out** of prompts and out of code
5. **Ask "why?"**: if you can't explain a change, don't ship it
6. **Verify with reality**: run the tests, check the logs, load the site


---

## Practice tasks

1. Ask an agent to add a GitHub Actions workflow to your project that runs tests on every PR. Review it with the checklist in section 15.
2. Break something on purpose (remove an env variable in a test deploy), copy the error log, and ask an agent to diagnose it. Was it right?