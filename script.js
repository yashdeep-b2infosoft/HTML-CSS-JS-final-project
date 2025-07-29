// Save and display username
function saveUsername() {
  const name = document.getElementById("usernameInput").value.trim();
  if (name) {
    localStorage.setItem("username", name);
    document.getElementById("displayName").textContent = name;
  }
}

// Load username on page load
window.onload = function () {
  const savedName = localStorage.getItem("username");
  if (savedName) {
    document.getElementById("displayName").textContent = savedName;
    document.getElementById("usernameInput").value = savedName;
  }

  // Load theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};

// Theme toggle
document.getElementById("themeToggle").onclick = function () {
  document.body.classList.toggle("dark-mode");
  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
};

// Smooth scroll (optional enhancement)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form submit
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`Thanks ${name}, your message has been sent!`);
    e.target.reset(); // Clear the form
  } else {
    alert("Please fill out all fields.");
  }
}