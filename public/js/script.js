const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");

if (joinForm) {
    joinForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const submitButton = joinForm.querySelector(".submit-btn");

        submitButton.disabled = true;
        submitButton.textContent = "Joining...";

        const formData = new FormData(joinForm);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            formMessage.textContent = result.message;

            if (result.success) {
                formMessage.style.color = "#f2a65a";
                joinForm.reset();
            } else {
                formMessage.style.color = "#ff6b6b";
            }

        } catch (error) {
            console.error(error);

            formMessage.textContent =
                "Unable to submit right now. Please try again.";

            formMessage.style.color = "#ff6b6b";

        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Join the Community →";
        }
    });
}