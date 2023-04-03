import { storeUrl } from "./config.js";

const fetchData = async () => {
  try {
    const response = await fetch(storeUrl);

    if (response) {
      return response.json();
    }

    return response;
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;
