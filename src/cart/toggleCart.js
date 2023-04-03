const cartCloseBtn = document.querySelector(".cart-close");
const cartToggle = document.querySelector(".toggle-cart");
const overlay = document.querySelector(".cart-overlay");

cartToggle.addEventListener("click", () => {
  overlay.classList.add("show");
});

cartCloseBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape" && overlay.classList.contains("show")) {
    overlay.classList.remove("show");
  }
});

export const openCart = () => {
  overlay.classList.add("show");
};
