import { localPrice } from "../config.js";

const displayCartItem = (product) => {
  const cartItemContainer = document.querySelector(".cart-items");
  const { image, name, price, id } = product;

  const html = `<article class="cart-item" data-id=${id}>
  <img
    src=${image.url}
    alt=""
    class="cart-item-img"
  />
  <div>
    <h1 class="cart-item-name">${name}</h1>
    <p class="cart-item-price">${localPrice(price)}</p>
    <button class="cart-item-remove-btn">Remove</button>
  </div>

  <div>
    <button class="cart-item-increase" data-id=${id}>
      <i class="fa-solid fa-chevron-up"></i>
    </button>
    <p class="cart-item-amount" data-id=${id}>1</p>
    <button class="cart-item-decrease" data-id=${id}>
      <i class="fa-solid fa-chevron-down"></i>
    </button>
  </div>
</article>`;
  cartItemContainer.insertAdjacentHTML("beforeend", html);
};

export default displayCartItem;
