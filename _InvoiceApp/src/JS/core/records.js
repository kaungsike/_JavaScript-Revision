import { updateTotalCost } from "./functions.js";
import { rowGroup, rowTemplate } from "./selectors.js"

export const createRecord = (product,quantity) => {
    const template = rowTemplate.content.cloneNode(true);

    template.querySelector(".rowRecord").setAttribute("number",product.id)
    template.querySelector(".name").innerText = product.name;
    template.querySelector(".price").innerText = product.price;
    template.querySelector(".quantity").innerText = quantity;
    template.querySelector(".cost").innerText = product.price * quantity;

    return template;

}

export const deleteRecord = (e) => {
    const row = e.target.closest(".rowRecord");
    if(confirm("Are you sure to delete?")){
        row.remove()
        updateTotalCost()
    }
    
}

export const addReduceRecordQuantity = (e,number) => {
    const row = e.target.closest(".rowRecord");
    const price = row.querySelector(".price").innerText;
    const currentCost = row.querySelector(".cost");
    const quantity = row.querySelector(".quantity");

    if(quantity.innerText < 1){
        deleteRecord(e)
    } 
    else{
        quantity.innerText = parseInt(quantity.innerText) + number;
        currentCost.innerText = quantity.innerText * price;
    }

    

    updateTotalCost()
}