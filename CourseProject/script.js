// script.js
// Robin Kelley
// 03/10/2026

document.addEventListener("DOMContentLoaded", () => {

    const autoType = document.querySelector(".auto-type");

    if (autoType && typeof Typed !== "undefined") {

        const typed = new Typed(".auto-type", {
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

});