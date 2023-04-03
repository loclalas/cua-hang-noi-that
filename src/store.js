import { getStorageItem, setStorageItem } from "./config.js";

let store = getStorageItem("store");
const setupStore = (datas) => {
  store = datas.map((data) => {
    const {
      id,
      fields: { colors, company, featured, name, price, image: img },
    } = data;

    const image = img[0].thumbnails.large;

    return { id, colors, company, featured, name, price, image };
  });

  setStorageItem("store", store);
};

const findProduct = (id) => {
  const product = store.find((product) => product.id === id);

  return product;
};

export { setupStore, store, findProduct };
