import { openCart } from "./toggleCart.js";
import { getStorageItem, localPrice, setStorageItem } from "../config.js";
import { findProduct, store } from "../store.js";
import displayCartItem from "./displayCartItem.js";

const itemCountDOM = document.querySelector(".cart-item-count");
const priceTotalDOM = document.querySelector(".cart-total");
const cartItemContainer = document.querySelector(".cart-items");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  // Kiểm tra xem sản phẩm có trong giỏ chưa:
  const itemCart = cart.find((product) => product.id === id);

  if (!itemCart) {
    // Chưa có -> Thêm vào giỏ.
    let product = findProduct(id);
    product = { ...product, amount: 1 };

    // Thêm vào cart - localStorage:
    cart = [...cart, product];

    // Hiển thị sản phẩm trong giỏ:
    displayCartItem(product);
  } else {
    // Đã có -> Tăng số lượng sản phẩm:
    const newAmount = increaseAmount(id);
    const items = [...cartItemContainer.querySelectorAll(".cart-item-amount")];

    const amount = items.find((item) => item.dataset.id === id);
    amount.textContent = newAmount;
  }

  // Hiển thị số lượng sản phẩm trong giỏ:
  displayCartItemCount();

  // Hiển thị tổng số tiền:
  displayCartTotal();

  // Đưa những sản phẩm đang có vào localStorage:
  setStorageItem("cart", cart);

  openCart();
};

// Số lượng sản phẩm trong giỏ:
const displayCartItemCount = () => {
  const cartItemCount = cart.reduce(
    (total, cartItem) => (total += cartItem.amount),
    0
  );

  itemCountDOM.textContent = `${cartItemCount}`;

  return cartItemCount;
};

// Tổng số tiền sản phẩm trong giỏ:
const displayCartTotal = () => {
  const cartTotal = cart.reduce(
    (total, cartItem) => (total += cartItem.amount * cartItem.price),
    0
  );

  priceTotalDOM.textContent = `${localPrice(cartTotal)}`;

  return cartTotal;
};

// Tăng số lượng + Update Cart-localStorage:
const increaseAmount = (id) => {
  let newAmount;

  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });

  return newAmount;
};

// Giảm số lượng + Update Cart-localStorage:
let newAmount;
const decreaseAmount = (id) => {
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });

  return newAmount;
};

// Xóa sản phẩm + Update Cart-localStorage:
const removeID = (id) => {
  cart = cart.filter((cartItem) => cartItem.id !== id);
};

// Hiển thị những sản phẩm đang có trong giỏ:
const displayCartItemsDOM = () => {
  cart.forEach((cartItem) => {
    displayCartItem(cartItem);
  });
};

// Xóa, tăng, giảm sản phẩm trong giỏ sản phẩm:
const setupCartFunctionality = () => {
  cartItemContainer.addEventListener("click", (e) => {
    const clicked = e.target;
    const id = e.target.closest(".cart-item").dataset.id;

    console.log(cart);
    //Xóa:
    if (clicked.classList.contains("cart-item-remove-btn")) {
      removeID(id);
      console.log(cart);
      clicked.closest(".cart-item").remove();
    }
    //Tăng số lương:
    if (clicked.parentElement.classList.contains("cart-item-increase")) {
      const newAmount = increaseAmount(id);
      clicked.parentElement.nextElementSibling.textContent = newAmount;
    }
    //Giảm số lượng:
    if (clicked.parentElement.classList.contains("cart-item-decrease")) {
      const newAmount = decreaseAmount(id);
      clicked.parentElement.previousElementSibling.textContent = newAmount;

      if (newAmount < 1) {
        removeID(id);
        clicked.closest(".cart-item").remove();
      }
    }

    displayCartTotal();
    displayCartItemCount();
    setStorageItem("cart", cart);
  });
};

const init = () => {
  displayCartItemsDOM();
  displayCartItemCount();
  displayCartTotal();
  setupCartFunctionality();
};
init();
