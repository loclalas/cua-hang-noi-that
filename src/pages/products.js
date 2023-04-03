import "../cart/setupCart.js";
import "../cart/toggleCart.js";
import "../toggleSidebar.js";

import { displayProduct } from "../displayProduct.js";
import { store } from "../store.js";
import searchItem from "../filter/search.js";
import filterPrice from "../filter/price.js";
import searchCompanies from "../filter/companies.js";

const loadingPage = document.querySelector(".page-loading");

displayProduct(store, document.querySelector(".products-container"));
searchItem(store);
filterPrice(store);
searchCompanies(store);

loadingPage.style.display = "none";
