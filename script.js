(function () {
    const root = document.documentElement;
    const lozengeBtn = document.querySelector('.lozenge-hit');
  
    // Always start in dark mode (per your request)
    root.classList.add('theme-dark');
    root.classList.remove('theme-light');
  
    function toggleTheme() {
      const isDark = root.classList.contains('theme-dark');
      if (isDark) {
        root.classList.remove('theme-dark');
        root.classList.add('theme-light');
      } else {
        root.classList.add('theme-dark');
        root.classList.remove('theme-light');
      }
    }
  
    if (lozengeBtn) {
      lozengeBtn.addEventListener('click', toggleTheme);
      // Optional keyboard shortcut for testing
      window.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 't') toggleTheme();
      });
    }
  })();
  
