window.RC_DRIFT_CLIENT_CONFIG = {
  platform: {
    productName: "Drift PDX Sync",
    buildLabel: "Drift PDX Build 2026.04.14.1",
    browserTitle: "Drift PDX Competition Control",
    demoWindowName: "driftpdx-live-demo-window",
  },
  branding: {
    venueName: "Drift PDX",
    venueLabelPlaceholder: "Drift PDX",
    eventNamePlaceholder: "Drift PDX Championship",
    logoPrimary: "./assets/Drift PDX Rose Banner Stickers-01.png",
    logoInverted: "./assets/Drift PDX Rose Banner Stickers-01.png",
    logoAlt: "Drift PDX rose banner logo",
    backgroundImage: "./assets/driftpdxbackground.png",
    shopUrl: "",
    shopLabel: "Shop Drift PDX Here",
    pdfHeaderTitle: "DRIFT PDX",
    demoVenueLabel: "Drift PDX Demo Arena",
    demoShowcaseName: "Drift PDX Showcase",
  },
  typography: {
    displayFont: "'Ethnocentric', 'Orbitron', 'Inter', sans-serif",
    bodyFont: "'Inter', sans-serif",
  },
  landing: {
    heroCopy:
      "Track {eventName}, jump into live standings and competition, and keep drivers, judges, and spectators synced from one Drift PDX event platform.",
    emptyHeroCopy:
      "Jump into registration, standings, results, and the live event view from one Drift PDX front door.",
    whySectionCopy:
      "Drift PDX keeps registration, live qualifying, bracket control, and results in one place so event days run smoother without juggling separate tools.",
    benefits: [
      ["3-Judge Cloud Sync", "Judge phones and tablets feed the same live scoring state without needing separate systems."],
      ["QR Check-In", "Drivers can scan a venue QR code and jump straight into the public registration flow."],
      ["Geofenced Registration", "Pre-register from home, then validate arrival at the venue before event admin approves the roster."],
      ["Live Qualifying Boards", "Show current driver, run averages, and standings in a clear public display."],
      ["Fullscreen Bracket Displays", "Broadcast-friendly qualifying and competition screens work for TVs, projectors, and venue monitors."],
      ["Archive And PDF Exports", "Completed events save into the results archive and can be exported as shareable PDF summaries."],
    ],
  },
  routing: {
    spectatorHost: "driftpdxcomp.com",
    spectatorAliases: ["www.driftpdxcomp.com"],
    websiteAdminHost: "websiteadmin.driftpdxcomp.com",
    adminHost: "eventadmin.driftpdxcomp.com",
    judgeHosts: {
      j1: "judge1.driftpdxcomp.com",
      j2: "judge2.driftpdxcomp.com",
      j3: "judge3.driftpdxcomp.com",
    },
  },
  firebase: {
    appId: "driftpdx-af4ad",
    config: {
      apiKey: "AIzaSyAB3QRb1XOXcw5P1hVMOVglGCsBB3Iyh1U",
      authDomain: "driftpdx-af4ad.firebaseapp.com",
      projectId: "driftpdx-af4ad",
      storageBucket: "driftpdx-af4ad.firebasestorage.app",
      messagingSenderId: "144531201888",
      appId: "1:144531201888:web:31e447d501f25cf3d74805",
    },
    spectatorAliases: [
      "driftpdx-af4ad.web.app",
      "driftpdx-af4ad.firebaseapp.com",
    ],
  },
  security: {
    legacyPasswords: {
      admin: "driftpdx_admin_setup",
      j1: "driftpdx_judge1_setup",
      j2: "driftpdx_judge2_setup",
      j3: "driftpdx_judge3_setup",
    },
  },
};
