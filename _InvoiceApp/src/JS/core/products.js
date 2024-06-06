import { productSelect } from "./selectors.js";

// export const createProducts = (product) => {
//     const option = document.createElement("option");
//     option.innerText = product.name;
//     option.value = product.id;

//     return option;
// }

export const productRender = (products) => {
    products.forEach((product) => {
        productSelect.append(new Option(product.name,product.id))
    })
}