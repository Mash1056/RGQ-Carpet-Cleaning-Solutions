// CONTACT FORM HANDLING (Formspree)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            status.textContent = "Sending...";

            const data = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: data,
                    headers: { Accept: "application/json" }
                });

                if (response.ok) {
                    status.textContent = "Thank you! Your message has been sent.";
                    form.reset();
                } else {
                    status.textContent = "Something went wrong. Please try again.";
                }
            } catch (err) {
                status.textContent = "Network error. Please check your connection.";
            }
        });
    }
});
