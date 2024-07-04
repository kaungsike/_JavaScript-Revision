import { products } from "../core/data";
import { categoryGroup, categoryTemplate } from "../core/selectors"
import { renderProduct } from "./product";

export const createCategory = (categoryName) => {
    const template = categoryTemplate.content.cloneNode(true);
    template.querySelector(".category-btn").innerText = categoryName;

    return template;
}

export const renderCategory =(categories) => {
    categories.forEach((category) =>  categoryGroup.append(createCategory(category))
    )
}


export const handleCategoryGroup = (e) => {
    if(e.target.classList.contains("category-btn")){
        if(e.target.innerText==="All"){
            renderProduct(products);
        }
        else{
            renderProduct(products.filter((product) => product.category===e.target.innerText))
        }
    }
}