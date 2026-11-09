// MOBILE NAVIGATION

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

// Create menu button
const menuButton = document.createElement("button");

menuButton.textContent = "☰";
menuButton.classList.add("menu-button");
menuButton.setAttribute("aria-label", "Toggle navigation");

navbar.insertBefore(menuButton, navLinks);

// Toggle navigation menu
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuButton.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.textContent = "☰";
    });
});

// Update footer year automatically
const footer = document.querySelector("footer p");

footer.innerHTML =
    `&copy; ${new Date().getFullYear()} Abdulrahman. All rights reserved.`;
