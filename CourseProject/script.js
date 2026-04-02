// script.js
// Robin Kelley
// 03/13/2026

document.addEventListener("DOMContentLoaded", () => {
    // Populate footer year
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Formspree contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm && typeof formspree !== "undefined") {
        formspree("initForm", { formElement: "#contact-form", formId: "meeplpwy" });
    }

    const autoType = document.querySelector(".auto-type");

    if (autoType && typeof Typed !== "undefined") {
        new Typed(".auto-type", {
            strings: [
                "Future Computer Science Educator",
                "Programming Teaching Assistant",
                "Lifelong Learner"
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true
        });
    }

    const darkModeButton = document.getElementById("darkModeToggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    if (darkModeButton) {
        if (document.body.classList.contains("dark-mode")) {
            darkModeButton.textContent = "Light Mode";
        } else {
            darkModeButton.textContent = "Dark Mode";
        }

        darkModeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                darkModeButton.textContent = "Light Mode";
            } else {
                localStorage.setItem("theme", "light");
                darkModeButton.textContent = "Dark Mode";
            }
        });
    }
});