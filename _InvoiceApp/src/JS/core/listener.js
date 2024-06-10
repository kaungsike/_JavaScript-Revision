import { createFormHandler, createProductFormHandler, printHandler, rowGroupHandler } from "./handlers.js";
import { createForm, createProductForm, printBtn, rowGroup } from "./selectors.js";

const listener = () => {
    createForm.addEventListener("submit",createFormHandler);
    rowGroup.addEventListener("click",rowGroupHandler);
    createProductForm.addEventListener("submit",createProductFormHandler);
    printBtn.addEventListener("click",printHandler)
}

export default listener;