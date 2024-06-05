import { rowTemplate } from "./selectors.js"

export const createRecord = (product,quantity) => {
    const template = rowTemplate.content.cloneNode(true);

    template.querySelector(".name").innerText = product.name;
    template.querySelector(".price").innerText = product.price;
    template.querySelector(".quantity").innerText = quantity;
    template.querySelector(".cost").innerText = product.price * quantity;

    return template;

}