document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("feedbackForm");
    const messageBox = document.getElementById("formMessage");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Button animation
        const btn = document.getElementById("submitBtn");
        btn.textContent = "Sending...";
        btn.style.opacity = "0.7";

        setTimeout(() => {
            btn.textContent = "Send Message";
            btn.style.opacity = "1";

            messageBox.innerHTML = "✅ Thank you! Your message has been sent.";
            messageBox.style.color = "#22c55e";

            form.reset();
        }, 1200);
    });

});
