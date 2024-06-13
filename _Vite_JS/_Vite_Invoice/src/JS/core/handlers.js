import { updateTotalCost } from "./functions.js";
import { createProductRender, productRender } from "./products.js";
import { createRecord, updateRecord } from "./records.js";
import { createForm, createProductForm, rowGroup } from "./selectors.js";
import { products } from "./variables.js";
import Swal from "sweetalert2";

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

    // updateTotalCost()

}


export const rowGroupHandler = (e) => {
    if(e.target.classList.contains("delBtn")){
        const row = e.target.closest(".rowRecord");
        Swal.fire({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0072f5",
            // cancelButtonColor: "#e8e8e8",
            confirmButtonText: "Conform"
          }).then((result) => {
            if (result.isConfirmed) {
                row.remove()
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "Deleted row successfully"
                  });
            }
          });
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