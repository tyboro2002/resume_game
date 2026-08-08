const APPS_CONFIG = [
  {
    id: "resume-window",
    title: "Resume.txt - Notepad",
    icon: "https://win98icons.alexmeub.com/icons/png/notepad-0.png",
    label: "Resume.txt",
    type: "fetch",
    contentUrl: "apps/resume/window.html",
    width: "340px",
    top: "60px",
    left: "120px",
    autoOpen: true,
    showOnDesktop: true,   // Display icon on desktop
    showInStartMenu: true  // Display item in start menu
  },
  {
    id: "clues-window",
    title: "MISSION_BRIEFING.txt - Notepad",
    icon: "https://win98icons.alexmeub.com/icons/png/search_file-2.png",
    label: "MISSION_BRIEFING.txt",
    type: "fetch",
    contentUrl: "apps/briefing/step1.html",
    width: "340px",
    top: "140px",
    left: "200px",
    autoOpen: true,
    showOnDesktop: true,
    showInStartMenu: true
  },
  {
    id: "browser-window",
    title: "Internet Explorer - Start Page",
    icon: "https://win98icons.alexmeub.com/icons/png/msie1-0.png",
    label: "Internet Explorer",
    type: "browser",
    startPage: "apps/browser/start_page.html",
    width: "680px",
    height: "500px",
    top: "80px",
    left: "100px",
    autoOpen: false,
    showOnDesktop: true,
    showInStartMenu: true
  },
  {
    id: "calendar-window",
    title: "Calendar - Personal Agenda",
    icon: "https://win98icons.alexmeub.com/icons/png/calendar-0.png",
    label: "Calendar",
    type: "fetch",
    contentUrl: "apps/calendar/window.html",
    width: "320px",
    top: "120px",
    left: "180px",
    autoOpen: false,
    showOnDesktop: false,
    showInStartMenu: true
  },
  {
    id: "vault-window",
    title: "PROJECT_VAULT.exe - Encrypted",
    icon: "https://win98icons.alexmeub.com/icons/png/key_padlock-0.png",
    label: "Vault.exe",
    type: "fetch",
    contentUrl: "apps/vault/window.html",
    width: "360px",
    top: "100px",
    left: "240px",
    autoOpen: false,
    showOnDesktop: true,
    showInStartMenu: true
  }
];