(function () {
  const root = document.documentElement;
  const lozengeBtn = document.querySelector('.lozenge-hit');
  const logo = document.getElementById('brandLogo');

  // Exact filenames (case + spacing matter on GitHub Pages)
  const WHITE_LOGO = "PRVW White with Dark Green star.svg";   // for DARK theme
  const DARK_LOGO  = "PRVW Dark Green with Lime.svg";         // for LIGHT theme

  // --- Apply theme and correct logo ---
  function applyTheme(isDark) {
    root.classList.toggle('theme-dark', isDark);
    root.classList.toggle('theme-light', !isDark);
    if (logo) logo.src = isDark ? WHITE_LOGO : DARK_LOGO;
  }

  // --- Start in DARK mode ---
  applyTheme(true);

  // --- Toggle on lozenge click ---
  function toggleTheme() {
    const isCurrentlyDark = root.classList.contains('theme-dark');
    applyTheme(!isCurrentlyDark);
  }

  if (lozengeBtn) {
    lozengeBtn.addEventListener('click', toggleTheme);
    // Optional keyboard shortcut (press “t”)
    window.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 't') toggleTheme();
    });
  }
})();
