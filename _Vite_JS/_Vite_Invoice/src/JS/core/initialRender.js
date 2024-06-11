import { createProductRender, productRender } from "./products.js";
import { products } from "./variables.js";

const initialRender = () => {
    productRender(products)
    createProductRender(products)
}

export default initialRender;