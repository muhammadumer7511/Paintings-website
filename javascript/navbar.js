// Load navbar
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch(error => console.error("Error loading navbar:", error));

// Toggle main dropdown
function toggleDropdown() {
  const dropdown = document.getElementById("imageDropdown");
  const btn = document.querySelector(".paintings-btn");

  // Toggle dropdown visibility and button active class
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

// Toggle sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("show");
}

// Toggle sidebar dropdown
function toggleSidebarDropdown() {
  document.getElementById("sidebarDropdown").classList.toggle("show");
}

// Navigate to selected painting page
function navigateToPage() {
  const dropdown = document.getElementById("paintingDropdown");
  const selectedValue = dropdown.value;
  if (selectedValue) {
    window.location.href = selectedValue;
  }
}

// Close dropdowns and sidebar when clicking outside
document.addEventListener("click", function (event) {
  const isDropdownClick = event.target.closest(".dropdown");
  const isSidebarClick = event.target.closest("#sidebar") || event.target.closest(".menu-btn");

  // Handle dropdown close
  if (!isDropdownClick) {
    document.querySelectorAll('.dropdown-content').forEach(drop => drop.classList.remove("show"));
    document.querySelectorAll('.paintings-btn').forEach(btn => btn.classList.remove("active"));
  }

  // Handle sidebar close
  if (!isSidebarClick) {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.remove("active");
    overlay.classList.remove("show");
  }
});

