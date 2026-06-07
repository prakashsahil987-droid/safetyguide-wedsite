# SafeGuide — with Sanity CMS

Your SafeGuide website now has a full CMS. After setup, you'll edit articles at:
`yoursite.com/studio`

---

## ⚡ Setup Guide (Step by Step)

### STEP 1 — Create a Free Sanity Account

1. Go to **sanity.io** and click "Get started free"
2. Sign up with Google or GitHub
3. Click **"Create new project"**
4. Name it: `SafeGuide`
5. Choose dataset: **production** (default)
6. Select the **free plan**

### STEP 2 — Get Your Project ID

1. After creating the project, you'll see a dashboard
2. Look for **"Project ID"** — it's a short code like `abc123de`
3. **Copy it** — you'll need it in the next steps

### STEP 3 — Add CORS Origin in Sanity

This lets your website talk to Sanity.

1. In your Sanity project dashboard, go to **API → CORS Origins**
2. Click **"Add CORS origin"**
3. Add your live domain: `https://yourdomain.com`
4. Also add: `http://localhost:3000` (for local testing)
5. Check **"Allow credentials"**
6. Click **Save**

### STEP 4 — Add Environment Variables to Vercel

1. Go to **vercel.com** → your SafeGuide project → **Settings → Environment Variables**
2. Add these one by one:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Project ID from Step 2 |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` |
| `SANITY_REVALIDATE_SECRET` | Any random password you invent (e.g. `mySuperSecret123`) |

3. Click **Save** after adding all four

### STEP 5 — Upload Files to GitHub

1. Go to your existing `safeguide` GitHub repository
2. **Delete all existing files** (select all → Delete)
3. Upload all files from this ZIP (including all folders)
4. Click **"Commit changes"**

### STEP 6 — Vercel Will Auto-Deploy

- Vercel detects the new files and rebuilds automatically (takes 2-3 minutes)
- Once done, visit `yoursite.com/studio` — your editing dashboard is live!

---

## ✏️ How to Write Articles in Sanity Studio

1. Go to `yoursite.com/studio`
2. Sign in with the same account you used on sanity.io
3. Click **"📝 All Articles"** → **"Create"**
4. Fill in:
   - **Title** — your article headline
   - **URL Slug** — auto-generated, just click "Generate"
   - **Category** — choose from the radio buttons
   - **Short Description** — shown on article cards
   - **Read Time** — e.g. "5 min read"
   - **Article Content** — write your full article here with headings, bullet points, and callout boxes
5. Toggle **"Feature on Homepage"** if you want it shown in Essential Reading
6. Click **Publish** in the top right

Your article appears on the website within 60 seconds automatically.

### Callout Boxes
In the article editor, click the **"+"** button → "Callout Box" to add:
- 💡 **Tip** (blue) — for helpful advice
- ⚠️ **Warning** (amber) — for cautions
- 🚨 **Danger** (red) — for critical warnings

---

## 🔄 How Updates Work

When you publish or edit an article in Sanity Studio:
- The website automatically refreshes within 60 seconds (via `revalidate = 60`)
- No need to redeploy or do anything manually

---

## 📁 Project Structure

```
safeguide-cms/
├── app/
│   ├── (site)/                 ← All public pages (homepage, articles)
│   │   ├── layout.tsx          ← Navbar + Footer wrapper
│   │   ├── page.tsx            ← Homepage
│   │   ├── about/              ← About page
│   │   ├── [category]/         ← Category pages (dynamic)
│   │   └── [category]/[slug]/  ← Article pages (dynamic)
│   ├── studio/                 ← Sanity Studio editor
│   └── api/revalidate/         ← Webhook for instant updates
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   └── ArticleBody.tsx         ← Renders Sanity rich text
├── lib/
│   └── types.ts                ← Category definitions
└── sanity/
    ├── lib/client.ts           ← Sanity API connection + queries
    ├── schemaTypes/
    │   └── articleType.ts      ← Article field definitions
    └── sanity.config.ts        ← Studio configuration
```

---

## 🔒 Security

- Sanity Studio at `/studio` is excluded from the strict CSP headers (it needs broader access)
- All public pages keep the full security headers
- No user data is collected or stored
- Sanity API keys are public-read only (no write access from the website)
