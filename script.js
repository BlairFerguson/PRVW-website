(function () {
  const root = document.documentElement;
  const lozengeBtn = document.querySelector('.lozenge-hit');
  const logo = document.getElementById('brandLogo');

  // File names exactly as in the repo root (case + spacing matter on GitHub Pages)
  const WHITE_LOGO = "PRVW White with Dark Green star.svg";   // for DARK theme
  const DARK_LOGO  = "PRVW Dark Green with Lime.svg";         // for LIGHT theme

  // Always start in DARK (with white logo)
  function applyTheme(isDark) {
    root.classList.toggle('theme-dark', isDark);
    root.classList.toggle('theme-light', !isDark);
    if (logo) {
      logo.setAttribute('src', isDark ? WHITE_LOGO : DARK_LOGO);
      logo.setAttribute('alt', 'PRVW');
    }
  }
  applyTheme(true);

  function toggleTheme() {
    const nowDark = !root.classList.contains('theme-dark') ? true : false; // compute after toggle intention
    applyTheme(!root.classList.contains('theme-dark') ? true : false);
  }

  if (lozengeBtn) {
    lozengeBtn.addEventListener('click', () => {
      const currentlyDark = root.classList.contains('theme-dark');
      applyTheme(!currentlyDark);
    });
    // Optional keyboard shortcut for quick testing
    window.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 't') {
        const currentlyDark = root.classList.contains('theme-dark');
        applyTheme(!currentlyDark);
      }
    });
  }
})();
