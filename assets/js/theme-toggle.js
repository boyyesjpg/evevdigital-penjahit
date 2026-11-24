/**
 * EvEvDigital Dual Theme Toggle Engine (Dark & Light Mode) — Anti-FOUC & Accessible
 * Sektor 08: Penjahit Busana, Vermak Express & Konveksi Seragam (evevtayler)
 */
(function () {
  "use strict";

  var THEME_KEY = "evevdigital_theme_preference";
  var root = document.documentElement;

  function getPreferredTheme() {
    try {
      var stored = localStorage.getItem(THEME_KEY);
      if (stored === "dark" || stored === "light") {
        return stored;
      }
    } catch (e) {
      // Ignore storage errors (private mode / sandbox)
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function updateButtons(theme) {
    var isDark = theme === "dark";
    var buttons = document.querySelectorAll("#theme-toggle, .theme-toggle-btn, [data-theme-toggle]");
    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(isDark));
      btn.setAttribute("title", isDark ? "Ganti ke Mode Terang (Light Mode)" : "Ganti ke Mode Gelap (Dark Mode)");
      btn.setAttribute("aria-label", isDark ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap");
      var icon = btn.querySelector("i");
      if (icon) {
        icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
      } else {
        btn.innerHTML = isDark ? '<i class="fas fa-sun" aria-hidden="true"></i>' : '<i class="fas fa-moon" aria-hidden="true"></i>';
      }
    });
  }

  function applyTheme(theme, persist) {
    var safeTheme = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", safeTheme);
    root.style.colorScheme = safeTheme;
    if (document.body) {
      document.body.setAttribute("data-theme", safeTheme);
    }
    if (persist) {
      try {
        localStorage.setItem(THEME_KEY, safeTheme);
      } catch (e) {
        // Ignore storage errors
      }
    }
    updateButtons(safeTheme);
  }

  function toggleTheme() {
    var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var next = current === "dark" ? "light" : "dark";
    applyTheme(next, true);
    return next;
  }

  // Terapkan segera sebelum DOM selesai (pengaman tambahan Anti-FOUC)
  var initialTheme = root.getAttribute("data-theme");
  if (initialTheme !== "dark" && initialTheme !== "light") {
    initialTheme = getPreferredTheme();
  }
  applyTheme(initialTheme, false);

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(root.getAttribute("data-theme") || getPreferredTheme(), false);

    // Lepas kunci preload setelah paint pertama agar switch transisi halus
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        root.classList.remove("theme-preload");
      });
    });

    document.addEventListener("click", function (e) {
      var btn = e.target.closest("#theme-toggle, .theme-toggle-btn, [data-theme-toggle]");
      if (btn) {
        e.preventDefault();
        toggleTheme();
      }
    });

    // Sinkronisasi tema antar tab
    window.addEventListener("storage", function (e) {
      if (e.key === THEME_KEY && (e.newValue === "dark" || e.newValue === "light")) {
        applyTheme(e.newValue, false);
      }
    });
  });

  window.EVEV_THEME = {
    get: function () {
      return root.getAttribute("data-theme") || "light";
    },
    set: function (mode) {
      applyTheme(mode, true);
    },
    toggle: toggleTheme
  };
})();
