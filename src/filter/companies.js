import { displayProduct } from "../displayProduct.js";

const searchCompanies = (data) => {
  const companiesEle = document.querySelector(".companies");
  const productsContainer = document.querySelector(".products-container");
  let newCompanies;

  // Tạo thanh lọc công ty theo data:
  let companies = ["all", ...new Set(data.map((product) => product.company))];

  const companiesDOM = document.querySelector(".companies");
  companiesDOM.innerHTML = companies
    .map((company) => {
      return ` <button class="companies-btn">${company}</button>`;
    })
    .join("");

  // Lọc công ty:
  companiesEle.addEventListener("click", (e) => {
    const clicked = e.target.closest(".companies-btn");

    if (!clicked) return;

    // Lọc công ty:
    if (clicked.textContent === "all") {
      newCompanies = [...data];
    } else {
      newCompanies = data.filter((product) => {
        return product.company === clicked.textContent;
      });
    }

    // Hiển thị sản phẩm theo company:
    displayProduct(newCompanies, productsContainer);
  });
};

export default searchCompanies;
