import { url, productsUrl } from "../setting/api.js";

import displayMessage from "../components/displayMessage.js";
import { fetchApi } from "../setting/fetchApi.js";
import { productList } from "./productList.js";

export async function updateProduct(
    imageValue,
    titleValue,
    priceValue,
    descriptionValue,
    featuredValue,
    idValue
) {
  const urlUpdate = url + "products/" + _id;

  const data = JSON.stringify({
    img: imageValue,
    title: titleValue,
    price: priceValue,
    description: descriptionValue,
    popular: featuredValue,
  });

  const options = {
    method: "PUT",
    body: data,
    // headers: {
    //   "Content-Type": "application/json",
    //   Authorization: `Bearer ${token}`,
    // },
  };

  try {
    const response = await fetch(urlUpdate, options);
    const json = await response.json();

    if (json.updated_at) {
      displayMessage("message", "Product updated", ".message");
      fetchApi(productList, productsUrl);
    }

    if (json.error) {
      displayMessage("message message__error", json.message, ".message");
    }
  } catch (error) {
    console.log(error);
  }
}
