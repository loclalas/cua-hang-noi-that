import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";

/////////////////////////////

import fetchData from "./src/fetchData.js";
import { setupStore, store } from "./src/store.js";
import { displayProduct } from "./src/displayProduct.js";

const init = async () => {
  // Get data:
  const products = await fetchData();

  // Add product:
  if (products) {
    setupStore(products);
  }

  const featured = store.filter((product) => product.featured === true);

  // Display data:
  displayProduct(featured, document.querySelector(".feature-center"));
};

window.addEventListener("DOMContentLoaded", init);
