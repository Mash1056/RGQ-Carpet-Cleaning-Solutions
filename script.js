document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        status.textContent = "Sending...";

        const formData = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                status.textContent = "Thank you! Your message has been sent.";
                form.reset();
            } else {
                status.textContent = "Something went wrong. Please try again.";
            }

        } catch (error) {
            status.textContent = "Network error. Please try again later.";
        }
    });
});
