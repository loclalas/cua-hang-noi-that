import { errorFilter, localPrice } from "../config.js";
import { displayProduct } from "../displayProduct.js";

const filterPrice = (data) => {
  const priceForm = document.querySelector(".price-form");
  const priceFilter = document.querySelector(".price-filter");
  const priceValue = document.querySelector(".price-value");
  const productsContainer = document.querySelector(".products-container");
  let maxPrice;
  let newPrice;
  // Lấy giá cao nhất:
  maxPrice = data.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceFilter.min = 0;
  priceFilter.max = maxPrice;

  // Hiển thị giá cao nhất:
  priceValue.textContent = `Giá: ${localPrice(maxPrice * 100)}`;

  priceForm.addEventListener("input", () => {
    // Hiển thị giá hiện tại:
    const valuePrice = priceFilter.value;
    priceValue.textContent = `Giá: ${localPrice(valuePrice * 100)}`;

    // Lọc giá:
    newPrice = data.filter((product) => product.price / 100 < valuePrice);

    // Hiển thị sản phẩm theo giá:
    displayProduct(newPrice, productsContainer);

    if (newPrice.length < 1) {
      productsContainer.innerHTML = errorFilter;
    }
  });
};

export default filterPrice;
