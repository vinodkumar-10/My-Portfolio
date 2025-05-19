// Toggle nav menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Form validation with ES6 features
const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Fake async operation using Promise & async/await
  await fakeSendMessage({ name, email, message });
  alert("Thanks for contacting me! Message sent.");
  form.reset();
});

// Simulated message sending (fake backend)
const fakeSendMessage = ({ name, email, message }) => {
  return new Promise((resolve) => {
    console.log("Sending message...", { name, email, message });
    setTimeout(() => resolve("Message sent"), 1500);
  });
};
