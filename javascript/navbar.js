document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  fetch("navbar.html")
    .then((res) => res.text())
    .then((data) => {
      navbarContainer.innerHTML = data;

      // Ensure features init AFTER navbar is in DOM
      setTimeout(initNavbarFeatures, 0);
    })
    .catch((err) => console.error("Error loading navbar:", err));
});

function initNavbarFeatures() {
  // 🔻 Dropdown Toggle
  const dropdownBtn = document.querySelector(".paintings-btn");
  const dropdown = document.getElementById("imageDropdown");

  if (dropdownBtn && dropdown) {
    dropdownBtn.addEventListener("click", () => {
      dropdown.classList.toggle("show");
      dropdownBtn.classList.toggle("active");

      // Close other dropdowns if any
      document.querySelectorAll(".dropdown-content").forEach((el) => {
        if (el !== dropdown) el.classList.remove("show");
      });
      document.querySelectorAll(".paintings-btn").forEach((btn) => {
        if (btn !== dropdownBtn) btn.classList.remove("active");
      });
    });
  }

  // ❌ Close dropdown if clicked outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      dropdown?.classList.remove("show");
      dropdownBtn?.classList.remove("active");
    }
  });

  // 📱 Sidebar Toggle
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuBtn = document.querySelector(".menu-btn");

  if (menuBtn && sidebar && overlay) {
    menuBtn.addEventListener("click", () => {
      const isActive = sidebar.classList.toggle("active");
      overlay.classList.toggle("show", isActive);
    });

    window.addEventListener("click", (e) => {
      if (
        !e.target.closest(".menu-btn") &&
        !e.target.closest("#sidebar")
      ) {
        sidebar.classList.remove("active");
        overlay.classList.remove("show");
      }
    });
  }

  // 🧭 Sidebar Dropdown Toggle
  const sidebarDropdown = document.getElementById("sidebarDropdown");
  const sidebarDropdownBtn = document.getElementById("sidebarDropdownBtn");

  if (sidebarDropdown && sidebarDropdownBtn) {
    sidebarDropdownBtn.addEventListener("click", () => {
      sidebarDropdown.classList.toggle("show");
    });
  }

  // 🎯 Navigate to page via dropdown
  const paintingDropdown = document.getElementById("paintingDropdown");
  if (paintingDropdown) {
    paintingDropdown.addEventListener("change", () => {
      const selected = paintingDropdown.value;
      if (selected) {
        window.location.href = selected;
      }
    });
  }
}

