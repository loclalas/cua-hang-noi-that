import { errorFilter } from "../config.js";
import { displayProduct } from "../displayProduct.js";

const searchItem = (data) => {
  const searchInput = document.querySelector(".search-input");
  const formInput = document.querySelector(".input-form");
  const productsContainer = document.querySelector(".products-container");
  let newStore = [];

  // Lấy data từ người dùng:
  formInput.addEventListener("keyup", () => {
    let value = searchInput.value;
    value = value.toLowerCase();

    // Lọc tên:
    if (value) {
      newStore = data.filter((product) => {
        const { name } = product;
        return name.includes(value);
      });

      // Hiển thị data:
      displayProduct(newStore, productsContainer);

      if (newStore.length < 1) {
        productsContainer.innerHTML = errorFilter;
      }
    } else {
      // Hiển thị data:
      displayProduct(data, document.querySelector(".products-container"));
    }
  });
};

export default searchItem;
