document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar");

  if (!navbarContainer) {
    console.error("Navbar container not found.");
    return;
  }

  fetch("navbar.html")
    .then((res) => res.text())
    .then((data) => {
      navbarContainer.innerHTML = data;

      // Wait for DOM to inject and update
      requestAnimationFrame(() => {
        setTimeout(() => {
          try {
            initNavbarFeatures(); // your custom function to activate nav animations, etc.
          } catch (e) {
            console.error("Error initializing navbar features:", e);
          }
        }, 0);
      });
    })
    .catch((error) => console.error("Error loading navbar:", error));
});
