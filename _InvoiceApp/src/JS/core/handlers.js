import { updateTotalCost } from "./functions.js";
import { createProductRender, productRender } from "./products.js";
import { createRecord, deleteRecord, updateRecord } from "./records.js";
import { createForm, createProductForm, rowGroup } from "./selectors.js";
import { products } from "./variables.js";

export const createFormHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(createForm);

    const productId = parseInt(formData.get("productSelect"));
    const productQuantity = parseInt(formData.get("inputQuantity"));
    const productInfo = products.find((product) => product.id === productId);

    const isExistRow = rowGroup.querySelector(`[number='${productId}']`);

    if(isExistRow){
        // const price = isExistRow.querySelector(".price").innerText;
        // const currentQuantity = isExistRow.querySelector(".quantity");
        // const cost = isExistRow.querySelector(".cost");

        // currentQuantity.innerText = parseInt(currentQuantity.innerText) + productQuantity;

        // cost.innerText = price * currentQuantity.innerText;
        updateRecord(isExistRow.getAttribute("number"),productQuantity)
    }
    else{
        rowGroup.append(createRecord(productInfo,productQuantity));
    }

    createForm.reset();

    updateTotalCost()

}


export const rowGroupHandler = (e) => {
    if(e.target.classList.contains("delBtn")){
        const row = e.target.closest(".rowRecord");
    }
    else if(e.target.classList.contains("addQuantity")){
        updateRecord(e.target.closest(".rowRecord").getAttribute("number"),1)
    }
    else if(e.target.classList.contains("reduceQuantity")){
        updateRecord(e.target.closest(".rowRecord").getAttribute("number"),-1)
    }
}

export const createProductFormHandler = (e) => {
    e.preventDefault();
    
    const formData = new FormData(createProductForm);
    const newProduct = {
        id : Date.now(),
        name : formData.get("inputName"),
        price : formData.get("inputPrice")
    };

    products.push(newProduct);
    productRender(products);
    createProductRender(products)

    createProductForm.reset();

}


export const printHandler = () => {
    window.print();
}