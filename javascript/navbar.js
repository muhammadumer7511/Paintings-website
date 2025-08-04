document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
      bindNavbarFeatures(); // features bind after navbar loads
    })
    .catch(error => console.error("Error loading navbar:", error));
});

function bindNavbarFeatures() {
  const dropdown = document.getElementById("imageDropdown");
  const btn = document.querySelector(".paintings-btn");

  if (!dropdown || !btn) return;

  btn.addEventListener("click", function () {
    dropdown.classList.toggle("show");
    btn.classList.toggle("active");

    document.querySelectorAll('.dropdown-content').forEach(el => {
      if (el !== dropdown) el.classList.remove("show");
    });
    document.querySelectorAll('.paintings-btn').forEach(b => {
      if (b !== btn) b.classList.remove("active");
    });
  });

  document.addEventListener("click", function (event) {
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
      document.querySelectorAll('.paintings-btn').forEach(b => {
        b.classList.remove("active");
      });
    }
  };
}

