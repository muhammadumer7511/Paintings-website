function toggleDropdown() {
    const dropdown = document.getElementById("imageDropdown");
    const btn = document.querySelector(".paintings-btn");

    dropdown.classList.toggle("show");

    // Force styles update by toggling the active class
    if (dropdown.classList.contains("show")) {
        btn.classList.add("active");
    } else {
        btn.classList.remove("active");
    }
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




window.onclick = function(event) {
    if (!event.target.matches('button')) {
        document.querySelectorAll('.dropdown-content').forEach(element => {
            element.classList.remove("show");
        });
        document.querySelectorAll('.paintings-btn').forEach(btn => {
            btn.classList.remove("active");
        });
    }
}
fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));
    function toggleDropdown() {
        document.getElementById("imageDropdown").classList.toggle("show");
    }
    
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
function navigateToPage() {
    var dropdown = document.getElementById("paintingDropdown");
    var selectedValue = dropdown.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}
function toggleDropdown() {
    const dropdown = document.getElementById("imageDropdown");
    const btn = document.querySelector(".paintings-btn");
    
    // Toggle dropdown visibility
    dropdown.classList.toggle("show");
    
    // Toggle active class on the button
    btn.classList.toggle("active");
    
    // Close other dropdowns if any
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