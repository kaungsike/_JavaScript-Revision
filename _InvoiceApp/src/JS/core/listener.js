import { createFormHandler, rowGroupHandler } from "./handlers.js";
import { createForm, rowGroup } from "./selectors.js";

const listener = () => {
    createForm.addEventListener("submit",createFormHandler);
    rowGroup.addEventListener("click",rowGroupHandler)
}

export default listener;