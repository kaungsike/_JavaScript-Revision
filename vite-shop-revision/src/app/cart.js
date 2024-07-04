import { cartItemTemplate } from "../core/selectors"

export const createCartItem = (product,quantity) => {
    const template = cartItemTemplate.content.cloneNode(true); 
    template.querySelector(".cart-item-img").src = product.image;
    template.querySelector(".cart-item-title").innerText = product.title;
    template.querySelector(".cart-item-price").innerText = product.price;
    template.querySelector(".cart-item-quantity").innerText = quantity;

    return template;
}