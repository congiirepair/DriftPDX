# Drift PDX Competition Hosting Rollout

This app is now prepared to run from a single Firebase Hosting site with role-locked hostnames:

- `https://driftpdxcomp.com`
- `https://www.driftpdxcomp.com`
- `https://websiteadmin.driftpdxcomp.com`
- `https://eventadmin.driftpdxcomp.com`
- `https://judge1.driftpdxcomp.com`
- `https://judge2.driftpdxcomp.com`
- `https://judge3.driftpdxcomp.com`

The same deployed `index.html` is served to every domain. The app reads `window.location.hostname` and forces the correct role workflow for that hostname.

## Step 1: Install the deploy tools

Install Node.js LTS first, then install the Firebase CLI:

```powershell
npm install -g firebase-tools
firebase login
```

If you do not want a global install, you can use:

```powershell
npx firebase-tools login
```

## Step 2: Deploy the current app to Firebase Hosting

This project is already wired to the Firebase project:

- Project ID: `driftpdx-af4ad`

From this folder, deploy with:

```powershell
firebase deploy --only hosting
```

Important notes:

- `firebase.json` rewrites all routes to `index.html`
- `index.html` is sent with `no-cache` headers so phones refresh to the latest app build
- static assets are cached aggressively

## Step 3: Attach the custom domains in Firebase Hosting

In the Firebase console:

1. Open the `driftpdx-af4ad` project
2. Go to `Hosting`
3. Add each custom domain to the same Hosting site:
   - `driftpdxcomp.com`
   - `www.driftpdxcomp.com`
   - `websiteadmin.driftpdxcomp.com`
   - `eventadmin.driftpdxcomp.com`
   - `judge1.driftpdxcomp.com`
   - `judge2.driftpdxcomp.com`
   - `judge3.driftpdxcomp.com`

Firebase will give you the DNS records required for each domain.

## Step 4: Add the DNS records at your domain provider

Use the exact records shown by Firebase.

Typical setup:

- apex/root domain (`driftpdxcomp.com`): A records and/or TXT verification records from Firebase
- subdomains (`www`, `websiteadmin`, `eventadmin`, `judge1`, `judge2`, `judge3`): CNAME records pointing to the Firebase target shown in the console

If you use Cloudflare:

- keep the DNS records in `DNS only` mode until Firebase verification and SSL finish
- after SSL is active, you can decide whether to enable proxying, but `DNS only` is the safest initial rollout

## Step 5: Wait for SSL issuance and verify each route

After Firebase verifies DNS, it will provision SSL certificates automatically.

Test each domain after SSL becomes active:

- `https://websiteadmin.driftpdxcomp.com`
  - should only show the website admin workflow
  - should require the website admin password

- `https://eventadmin.driftpdxcomp.com`
  - should require the event admin password
  - should show the event admin workflow only

- `https://judge1.driftpdxcomp.com`
  - should only allow Judge 1 access
  - should require the Judge 1 password

- `https://judge2.driftpdxcomp.com`
  - should only allow Judge 2 access
  - should require the Judge 2 password

- `https://judge3.driftpdxcomp.com`
  - should only allow Judge 3 access
  - should require the Judge 3 password

- `https://driftpdxcomp.com`
  - should open as spectator

## Safe verification checklist

Run this checklist after deployment:

1. Open each hostname in a private/incognito window.
2. Confirm the wrong panels are hidden on that hostname.
3. Confirm the matching password is still required.
4. Confirm the active event sync still changes across devices.
5. Confirm a judge hostname cannot switch to another judge role.
6. Confirm `websiteadmin` cannot accidentally land on qualifying or bracket views.
7. Confirm `eventadmin` cannot open the website admin panel.

## Current limitation

This rollout locks the front-end workflow by hostname and keeps the password flow separated, but it is not the final backend security layer by itself.

The next hardening step should be:

- Firestore rules or server-backed auth that enforce:
  - website admin can manage site-level settings
  - event admin can manage event data
  - each judge can only write their own judging fields

That backend lock is what prevents a technical user from bypassing client-side restrictions.
