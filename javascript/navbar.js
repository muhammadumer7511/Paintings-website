// Load navbar from external file
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch(error => console.error("Error loading navbar:", error));

// Toggle dropdown menu
function toggleDropdown() {
  const dropdown = document.getElementById("imageDropdown");
  const btn = document.querySelector(".paintings-btn");

  // Toggle dropdown visibility
  dropdown.classList.toggle("show");

  // Toggle active class on the button
  btn.classList.toggle("active");

  // Close other dropdowns
  document.querySelectorAll('.dropdown-content').forEach(element => {
    if (element !== dropdown) element.classList.remove("show");
  });
  document.querySelectorAll('.paintings-btn').forEach(otherBtn => {
    if (otherBtn !== btn) otherBtn.classList.remove("active");
  });
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

// Window click to close all dropdowns
window.onclick = function(event) {
  if (!event.target.matches('button')) {
    document.querySelectorAll('.dropdown-content').forEach(element => {
      element.classList.remove("show");
    });
    document.querySelectorAll('.paintings-btn').forEach(btn => {
      btn.classList.remove("active");
    });
  }
};

// Toggle sidebar visibility
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    overlay.classList.remove("show");
  } else {
    sidebar.classList.add("active");
    overlay.classList.add("show");
  }
}

// Toggle dropdown inside sidebar
function toggleSidebarDropdown() {
  document.getElementById("sidebarDropdown").classList.toggle("show");
}

// Close sidebar when clicking outside
window.onclick = function(event) {
  const sidebar = document.getElementById("sidebar");

  if (!event.target.closest(".menu-btn") && !event.target.closest("#sidebar")) {
    sidebar.classList.remove("active");
  }
};

// Navigate to a selected painting page
function navigateToPage() {
  var dropdown = document.getElementById("paintingDropdown");
  var selectedValue = dropdown.value;

  if (selectedValue) {
    window.location.href = selectedValue;
  }
}

