const storeUrl = "https://course-api.com/javascript-store-products";

const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";

const localPrice = (price) => {
  const newPrice = ((price / 100) * 23000).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
  return newPrice;
};

const getStorageItem = (name) => {
  const storageItem = localStorage.getItem(name);
  if (storageItem) {
    return JSON.parse(storageItem);
  }
  return [];
};

const setStorageItem = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

const errorFilter = `<h2 class="filter-error">Không có mặt hàng mà quý khách đang tìm kiếm</h2>`;

export {
  errorFilter,
  storeUrl,
  singleProductUrl,
  localPrice,
  getStorageItem,
  setStorageItem,
};
