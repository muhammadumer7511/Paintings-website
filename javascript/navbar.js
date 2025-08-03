document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((res) => res.text())
    .then((data) => {
      const navbarContainer = document.getElementById("navbar");
      if (navbarContainer) {
        navbarContainer.innerHTML = data;

        // ⚡ Features initialize karo jab navbar load ho jaye
        initNavbarFeatures();
      } else {
        console.error("Navbar container not found.");
      }
    })
    .catch((error) => console.error("Error loading navbar:", error));
});

function initNavbarFeatures() {
  // ✅ Sidebar toggle for small screen
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("show");
    });
  }

  // ✅ Dropdown toggle
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const dropdownMenu = this.nextElementSibling;
      if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
      }
    });
  });

  // ✅ Image preview on file input
  const imageInput = document.getElementById("imageInput");
  const imagePreview = document.getElementById("imagePreview");
  if (imageInput && imagePreview) {
    imageInput.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // ✅ Close dropdown on outside click
  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropdown-toggle")) {
      document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
        menu.classList.remove("show");
      });
    }
  });
}
