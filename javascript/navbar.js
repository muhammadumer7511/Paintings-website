fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // Saari functionality ab yahan likho, kyunke navbar load ho chuka hoga:

    // Toggle dropdown
    function toggleDropdown() {
      const dropdown = document.getElementById("imageDropdown");
      const btn = document.querySelector(".paintings-btn");

      dropdown.classList.toggle("show");
      btn.classList.toggle("active");

      // Close other dropdowns
      document.querySelectorAll('.dropdown-content').forEach(element => {
        if (element !== dropdown) element.classList.remove("show");
      });
      document.querySelectorAll('.paintings-btn').forEach(otherBtn => {
        if (otherBtn !== btn) otherBtn.classList.remove("active");
      });
    }

    // Sidebar toggle
    function toggleSidebar() {
      const sidebar = document.getElementById("sidebar");
      const overlay = document.getElementById("overlay");
      sidebar.classList.toggle("active");
      overlay.classList.toggle("show");
    }

    // Sidebar dropdown toggle
    function toggleSidebarDropdown() {
      document.getElementById("sidebarDropdown").classList.toggle("show");
    }

    // Navigate to painting page
    function navigateToPage() {
      const dropdown = document.getElementById("paintingDropdown");
      const selectedValue = dropdown.value;
      if (selectedValue) window.location.href = selectedValue;
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      const dropdown = document.getElementById("imageDropdown");
      const btn = document.querySelector(".paintings-btn");
      if (!event.target.closest(".dropdown")) {
        dropdown.classList.remove("show");
        btn.classList.remove("active");
      }
    });

    // Close sidebar when clicking outside
    window.addEventListener("click", function (event) {
      const sidebar = document.getElementById("sidebar");
      if (!event.target.closest(".menu-btn") && !event.target.closest("#sidebar")) {
        sidebar.classList.remove("active");
      }
    });

    // 🧠 Bind functions to elements (after navbar loaded)
    document.querySelector(".paintings-btn")?.addEventListener("click", toggleDropdown);
    document.querySelector(".menu-btn")?.addEventListener("click", toggleSidebar);
    document.querySelector(".sidebar-btn")?.addEventListener("click", toggleSidebarDropdown);
    document.getElementById("paintingDropdown")?.addEventListener("change", navigateToPage);
  })
  .catch(error => console.error("Error loading navbar:", error));
}

