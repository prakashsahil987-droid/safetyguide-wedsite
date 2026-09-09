# SafeGuide — Safety Knowledge Blog

A professional Next.js safety guide website covering banking, UPI, travel, lost items, and online safety.

## 🚀 Deploy to Vercel (No Coding Required)

### Step 1 — Create a GitHub Account
If you don't have one: go to [github.com](https://github.com) and sign up for free.

### Step 2 — Create a New Repository
1. Go to github.com and click the green **"New"** button
2. Name your repository: `safeguide`
3. Set it to **Public**
4. Click **"Create repository"**

### Step 3 — Upload the Files
1. On the new repository page, click **"uploading an existing file"**
2. Drag and drop ALL files from this folder into the upload area
3. Make sure you upload the folders too (`app/`, `components/`, `lib/`, etc.)
4. Click **"Commit changes"**

### Step 4 — Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click **"New Project"**
3. Find your `safeguide` repository and click **"Import"**
4. Leave all settings as default — Vercel detects Next.js automatically
5. Click **"Deploy"**
6. Wait 2-3 minutes — your site is live! 🎉

Vercel will give you a free URL like: `safeguide.vercel.app`

---

## 📁 Project Structure

```
safeguide/
├── app/                    # All pages
│   ├── page.tsx            # Homepage
│   ├── banking/            # Banking safety section
│   ├── upi/                # UPI safety section
│   ├── travel/             # Travel safety section
│   ├── lost-items/         # Lost items section
│   ├── online-safety/      # Online safety section
│   └── about/              # About page
├── components/             # Reusable UI pieces
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ArticleCard.tsx
├── lib/
│   └── data.ts             # All article content (edit here to add/change articles)
└── ...config files
```

## ✏️ How to Add or Edit Articles

All content is in `lib/data.ts`. To add a new article:
1. Open `lib/data.ts`
2. Find the `articles` array
3. Copy an existing article object and paste it at the end
4. Change the `slug`, `category`, `title`, `excerpt`, and `content`
5. Save and push to GitHub — Vercel auto-deploys within minutes

## 🔒 Security Features
- X-Frame-Options: DENY (prevents clickjacking)
- Content Security Policy headers
- X-Content-Type-Options: nosniff
- HSTS (Strict Transport Security)
- Permissions Policy (no camera/microphone access)
- No third-party analytics or tracking scripts
- No user data collected

## 🎨 Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- DM Serif Display + DM Sans fonts
- Deployed on Vercel (free tier)
