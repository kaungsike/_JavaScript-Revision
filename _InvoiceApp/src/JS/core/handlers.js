import { updateTotalCost } from "./functions.js";
import { addReduceRecordQuantity, createRecord, deleteRecord } from "./records.js";
import { createForm, rowGroup } from "./selectors.js";
import { products } from "./variables.js";

export const createFormHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(createForm);

    const productId = parseInt(formData.get("productSelect"));
    const productQuantity = parseInt(formData.get("inputQuantity"));
    const productInfo = products.find((product) => product.id === productId);

    const isExistRow = rowGroup.querySelector(`[number='${productId}']`);

    if(isExistRow){
        const price = isExistRow.querySelector(".price").innerText;
        const currentQuantity = isExistRow.querySelector(".quantity");
        const cost = isExistRow.querySelector(".cost");

        currentQuantity.innerText = parseInt(currentQuantity.innerText) + productQuantity;

        cost.innerText = price * currentQuantity.innerText;
    }
    else{
        rowGroup.append(createRecord(productInfo,productQuantity));
    }

    createForm.reset();

    updateTotalCost()

}


export const rowGroupHandler = (e) => {
    if(e.target.classList.contains("delBtn")){
        deleteRecord(e)
    }
    else if(e.target.classList.contains("addQuantity")){
        console.log("U Add");
        addReduceRecordQuantity(e,1)
    }
    else if(e.target.classList.contains("reduceQuantity")){
        console.log("U Reduce");
        addReduceRecordQuantity(e,-1)
    }
}