## Drift PDX Firebase Setup

Project id:

- `driftpdx-af4ad`

### 1. Enable Authentication

In Firebase Console for `driftpdx-af4ad`:

1. Go to `Build` -> `Authentication`
2. Click `Get started`
3. Open `Sign-in method`
4. Enable `Anonymous`

The app uses anonymous auth so spectators, judges, and admins can sync live state without a public database.

### 2. Create Firestore Database

1. Go to `Build` -> `Firestore Database`
2. Click `Create database`
3. Choose a region close to the event audience
4. Start in production mode

### 3. Deploy Firestore Rules

This project includes:

- `firestore.rules`

Deploy with:

```powershell
firebase deploy --only firestore:rules
```

### 4. Deploy Hosting

Deploy the site with:

```powershell
firebase deploy --only hosting
```

Or deploy both hosting and rules together:

```powershell
firebase deploy
```

### 5. Local project selection

This folder already points at:

- `driftpdx-af4ad`

Check with:

```powershell
firebase use
```

If needed:

```powershell
firebase use driftpdx-af4ad
```

### 6. First live sync test

After deploy:

1. Open the site
2. Create a test event
3. Open the qualifying page on one device
4. Open a judge role on another device
5. Submit a score
6. Confirm the qualifying board updates live
