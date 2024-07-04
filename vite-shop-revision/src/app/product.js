import { products } from "../core/data";
import { cartItemGroup, productGroup, productTemplate } from "../core/selectors"
import { createCartItem } from "./cart";

export const createProduct = (product) => {
    const template = productTemplate.content.cloneNode(true);
    template.querySelector(".product-card").setAttribute("product-id",product.id);
    template.querySelector(".product-img").src = product.image;
    template.querySelector(".product-title").innerText = product.title;
    template.querySelector(".product-description").innerText = product.description;
    template.querySelector(".product-rating").innerText = `( ${product.rating.rate} / ${product.rating.count} )`
    template.querySelector(".product-price").innerText = product.price;

    return template;
}

export const renderProduct = (products) => {
    productGroup.innerHTML = ``;
    products.forEach((product) => productGroup.append(createProduct(product)))
}


export const handleProductGroup = (e) => {
     if(e.target.classList.contains("product-add-to-cart-btn")){
        const currentProduct = e.target.closest(".product-card");
        const currentProductId = parseInt(currentProduct.getAttribute("product-id"));
        
        const productInfo = products.find((product) => product.id===currentProductId);

        cartItemGroup.append(createCartItem(productInfo,1));
     }
}
