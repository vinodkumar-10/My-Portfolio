const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  await fakeSendMessage({ name, email, message });
  alert("Message sent successfully!");
  form.reset();
});

// Simulating async operation with Promise
const fakeSendMessage = ({ name, email, message }) => {
  return new Promise((resolve) => {
    console.log("Sending message...", { name, email, message });
    setTimeout(() => resolve("Done"), 1000);
  });
};
