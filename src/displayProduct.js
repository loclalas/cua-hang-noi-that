import { localPrice } from "./config.js";
import { addToCart } from "./cart/setupCart.js";
import { openCart } from "./cart/toggleCart.js";

const displayProduct = (data, element) => {
  const html = data
    .map((product) => {
      const { id, image, name, price } = product;
      //   console.log(id);
      return `<article class="product">
          <div class="product-container">
            <img src=${image.url} alt="" class="product-img img" />
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${localPrice(price)}</h4>
          </footer>
        </article>`;
    })
    .join("");

  element.innerHTML = html;
  element.addEventListener("click", (e) => {
    const clicked = e.target.closest(".product-cart-btn");
    const data = clicked.dataset.id;

    if (!clicked) return;
    addToCart(data);
  });
};

export { displayProduct };
