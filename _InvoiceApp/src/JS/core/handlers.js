import { createRecord } from "./records.js";
import { createForm, rowGroup, totalCost } from "./selectors.js";
import { products } from "./variables.js";

export const createFormHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(createForm);

    const productId = parseInt(formData.get("productSelect"));
    const productQuantity = formData.get("inputQuantity");
    const productInfo = products.find((product) => product.id === productId);

    rowGroup.append(createRecord(productInfo,productQuantity));

    createForm.reset();

    const allCost = document.querySelectorAll(".cost");
    let total = 0;
    allCost.forEach((el) => total+=parseFloat(el.innerText));
    
    totalCost.innerText = total 
}