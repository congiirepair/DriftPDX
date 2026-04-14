## RCDriftSync Template Workspace

This folder is a separate local copy of the Prodigy project so template work does not affect the live site in:

- `C:\Users\congi\OneDrive\Desktop\Prodigy`

### Purpose

Use this workspace to turn the current single-client Prodigy build into a reusable track template for future customers.

### Main Customization File

Edit:

- `C:\Users\congi\OneDrive\Desktop\RCDriftSync-Template\client-config.js`

That file now controls the main client-facing setup for:

- platform name and build label
- venue name and default event labels
- primary logo and inverted logo
- track background image
- shop button label and URL
- spectator/admin/judge hostnames
- Firebase project defaults
- legacy role passwords for first-time setup
- landing page copy and feature list

### Safe Rules

- Do not deploy this folder over the live Prodigy site.
- Do not reuse the Prodigy Firebase project for other tracks.
- Do not reuse the Prodigy domain or subdomains for other tracks.
- Keep logos, fonts, colors, domains, and Firebase settings client-specific.

### Current Template Safety

- `.firebaserc` is now neutralized with a placeholder project id so this template does not accidentally deploy to the live Prodigy Firebase project.
- The app now reads branding, domains, and Firebase defaults from `client-config.js`.
- If `client-config.js` does not include Firebase settings, the template stays local/offline instead of silently reusing the Prodigy cloud project.

### Recommended Next Refactor Steps

1. Replace the default template logo assets with a true neutral RCDriftSync starter asset pack.
2. Add a `NEW_CLIENT_SETUP.md` checklist for domains, Firebase, logo exports, and judge links.
3. Move any remaining client-specific landing/demo sample copy into `client-config.js`.
4. Create one clean "new client checklist" before cloning this for another track.

### Suggested Future Client Folder Pattern

- `RCDriftSync-Template`
- `RCDriftSync-Prodigy`
- `RCDriftSync-<TrackName>`

### Current State

This folder started as a direct copy of the current Prodigy app so functionality should closely match the live project before template refactoring begins.
