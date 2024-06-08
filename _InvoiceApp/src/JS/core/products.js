import { productGroup, productSelect, productTemplate } from "./selectors.js";

export const productRender = (products) => {
    products.forEach((product) => {
        productSelect.append(new Option(product.name,product.id))
    })
}

export const createProduct = (product) => {
    const template = productTemplate.content.cloneNode(true);
    template.querySelector(".product-name").innerText = product.name;
    template.querySelector(".product-price").innerText = product.price;

    return template;
}

export const createProductRender = (products) => {
    products.forEach((product) => {
        productGroup.append(createProduct(product))
    })
}