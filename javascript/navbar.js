// Load Navbar
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch(error => console.error("Error loading navbar:", error));

// Toggle Main Dropdown
function toggleDropdown() {
  const dropdown = document.getElementById("imageDropdown");
  const btn = document.querySelector(".paintings-btn");

  // Toggle dropdown visibility and button active class
  dropdown.classList.toggle("show");
  btn.classList.toggle("active");

  // Close other dropdowns if any
  document.querySelectorAll('.dropdown-content').forEach(element => {
    if (element !== dropdown) element.classList.remove("show");
  });
  document.querySelectorAll('.paintings-btn').forEach(otherBtn => {
    if (otherBtn !== btn) otherBtn.classList.remove("active");
  });
}

// Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("show");
}

// Toggle Sidebar Dropdown
function toggleSidebarDropdown() {
  document.getElementById("sidebarDropdown").classList.toggle("show");
}

// Navigate to Page from Dropdown
function navigateToPage() {
  const dropdown = document.getElementById("paintingDropdown");
  const selectedValue = dropdown.value;
  if (selectedValue) {
    window.location.href = selectedValue;
  }
}

// Close dropdowns & sidebar when clicking outside
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("imageDropdown");
  const btn = document.querySelector(".paintings-btn");
  const sidebar = document.getElementById("sidebar");

  // Close dropdown if clicked outside
  if (!event.target.closest(".dropdown") && !event.target.closest(".paintings-btn")) {
    dropdown.classList.remove("show");
    btn.classList.remove("active");
  }

  // Close sidebar if clicked outside
  if (!event.target.closest(".menu-btn") && !event.target.closest("#sidebar")) {
    sidebar.classList.remove("active");
    document.getElementById("overlay").classList.remove("show");
  }
});

