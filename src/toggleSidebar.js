const toggleBtn = document.querySelector(".toggle-nav-btn");
const closeBtn = document.querySelector(".sidebar-button");
const overlay = document.querySelector(".sidebar-overlay");

toggleBtn.addEventListener("click", () => {
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("show")) {
    overlay.classList.remove("show");
  }
});
