// JavaScript Start
// -------------------------------------------------
// Theme Management
const themes = {
  corporate: {
    primary: "#4f46e5",
    secondary: "#ec4899",
    accent: "#06b6d4",
    neutral: "#1f2937",
  },
  wedding: {
    primary: "#d946ef",
    secondary: "#f472b6",
    accent: "#c084fc",
    neutral: "#701a75",
  },
  elegant: {
    primary: "#ca8a04",
    secondary: "#a16207",
    accent: "#eab308",
    neutral: "#451a03",
  },
  modern: {
    primary: "#059669",
    secondary: "#10b981",
    accent: "#34d399",
    neutral: "#064e3b",
  },
  royal: {
    primary: "#7e22ce",
    secondary: "#a855f7",
    accent: "#e879f9",
    neutral: "#581c87",
  },
};

function changeTheme(themeName) {
  const theme = themes[themeName];
  document.documentElement.setAttribute("data-theme", themeName);

  // CSS Variables For Custom Animations
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });

  // Show Themes Change Notification
  showNotification(
    `Theme changed to ${themeName.charAt(0).toUpperCase() + themeName.slice(1)}`,
  );
}

function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const isDark = currentTheme.includes("dark");

  if (isDark) {
    document.documentElement.setAttribute(
      "data-theme",
      currentTheme.replace("dark-", ""),
    );
  } else {
    document.documentElement.setAttribute("data-theme", `dark-${currentTheme}`);
  }

  showNotification(`Dark mode ${isDark ? "disabled" : "enabled"}`);
}

// Notification System
function showNotification(message, type = "info") {
  const existingNotification = document.getElementById("custom-notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create New Notification
  const notification = document.createElement("div");
  notification.id = "custom-notification";
  notification.className = `alert alert-${type} fixed top-20 right-4 z-50 max-w-sm shadow-2xl animate-slide-up`;
  notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-info-circle"></i>
            <span>${message}</span>
        </div>
    `;

  document.body.appendChild(notification);

  // Auto Remove After 3 Seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Smooth Scrolling
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Navbar Background On Scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.classList.add("shadow-2xl", "bg-base-100/95");
    } else {
      header.classList.remove("shadow-2xl", "bg-base-100/95");
    }
  });

  // Observer For Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
      }
    });
  }, observerOptions);

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
  changeTheme("corporate");
});

// Form Handling
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;

  // Simulate API Call
  showNotification("Thank you for subscribing to our newsletter!", "success");
  e.target.reset();
}

// Package Selection
function selectPackage(packageName, price) {
  showNotification(
    `Added ${packageName} package ($${price}) to cart`,
    "success",
  );

  // Animate Package
  const packageElement = event.target.closest(".card");
  packageElement.classList.add("ring-4", "ring-primary", "animate-pulse");

  setTimeout(() => {
    packageElement.classList.remove("ring-4", "ring-primary", "animate-pulse");
  }, 2000);
}

// Image Lazy Loading
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// DOM Load
document.addEventListener("DOMContentLoaded", function () {
  initLazyLoading();

  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.classList.contains("btn-loading")) {
        this.innerHTML =
          '<span class="loading loading-spinner"></span>Loading...';
        setTimeout(() => {
          this.innerHTML = this.getAttribute("data-original-text");
          this.classList.remove("btn-loading");
        }, 2000);
      }
    });
  });
});

// Performance Monitoring
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollDirection = scrollTop > lastScrollTop ? "down" : "up";
  lastScrollTop = scrollTop;

  const progressBar = document.getElementById("scroll-progress");
  if (progressBar) {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    progressBar.style.width = scrollPercent + "%";
  }
});

window.changeTheme = changeTheme;
window.toggleDarkMode = toggleDarkMode;
window.selectPackage = selectPackage;
window.handleNewsletterSubmit = handleNewsletterSubmit;

// JavaScript End
// -----------------------------------------------------------------
