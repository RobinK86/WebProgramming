// script.js
// Robin Kelley
// 03/13/2026

document.addEventListener("DOMContentLoaded", () => {
    // Populate footer year
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Supabase + EmailJS contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm && typeof supabase !== "undefined") {
        const db = supabase.createClient(
            "https://byierohvhreithcrcagg.supabase.co",
            "sb_publishable_AkLZeP-lOqT4P7Z8feY7mg_1DKtv_Vh"
        );

        if (typeof emailjs !== "undefined") {
            emailjs.init("5DisVWN-qxgJyoqXd");
        }

        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('[type="submit"]');
            const successMsg = document.querySelector(".form-success");
            const errorMsg = document.querySelector(".form-error");

            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const { error } = await db.from("contact_submissions").insert([{ name, email, message }]);

            if (error) {
                errorMsg.textContent = "Something went wrong. Please try again.";
                errorMsg.style.display = "block";
                successMsg.style.display = "none";
            } else {
                emailjs.send("service_9wrojsi", "template_wa2jjip", {
                    name: name,
                    email: email,
                    message: message,
                    title: name
                });
                successMsg.style.display = "block";
                errorMsg.style.display = "none";
                contactForm.reset();
            }

            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";
        });
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