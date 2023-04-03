import "../cart/toggleCart.js";
import "../toggleSidebar.js";
import "../cart/setupCart.js";
import { addToCart } from "../cart/setupCart.js";
import { localPrice, singleProductUrl } from "../config.js";

const loading = document.querySelector(".page-loading");
const centerDOM = document.querySelector(".single-product-center");
const pageTitleDOM = document.querySelector(".page-hero-text");
const imgDOM = document.querySelector(".single-product-img");
const titleDOM = document.querySelector(".single-product-title");
const companyDOM = document.querySelector(".single-product-company");
const priceDOM = document.querySelector(".single-product-price");
const colorsDOM = document.querySelector(".single-product-colors");
const descDOM = document.querySelector(".single-product-desc");
const cartBtn = document.querySelector(".addToCartBtn");

let productID;

window.addEventListener("DOMContentLoaded", async () => {
  const urlID = window.location.search;

  console.log(urlID);
  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);

    if (response.ok) {
      const product = await response.json();

      const { id, fields } = product;
      console.log(id, fields);

      productID = id;
      const { company, colors, price, name } = fields;
      const image = fields.image[0].thumbnails.large.url;

      console.log(name);

      imgDOM.src = image;
      pageTitleDOM.textContent = `Trang Chủ / ${name}`;
      titleDOM.textContent = `${name}`;
      companyDOM.textContent = `By ${company}`;
      priceDOM.textContent = localPrice(price);

      colors.forEach((color) => {
        const span = document.createElement("span");
        span.classList.add("product-color");
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span);
      });
      cartBtn.addEventListener("click", () => {
        addToCart(productID);
      });
    } else {
      centerDOM.innerHTML = `<h3 class="error">Sorry, something went wrong </h3>
        <a href="index.html" class="btn">Back Home</a>
        </div>`;
    }
  } catch (err) {
    console.log(err);
  }

  loading.style.display = "none";
});
