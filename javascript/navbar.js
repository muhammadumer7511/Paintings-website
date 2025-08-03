document.addEventListener("DOMContentLoaded", async function () {
  const navbarContainer = document.getElementById("navbar");

  if (!navbarContainer) return console.error("Navbar container not found.");

  try {
    const res = await fetch("navbar.html");
    const html = await res.text();
    navbarContainer.innerHTML = html;

    // Wait until the DOM updates completely before initializing features
    setTimeout(() => {
      try {
        initNavbarFeatures();
      } catch (e) {
        console.error("initNavbarFeatures error:", e);
      }
    }, 50); // small delay to make sure navbar is injected
  } catch (err) {
    console.error("Navbar load failed:", err);
  }
});

