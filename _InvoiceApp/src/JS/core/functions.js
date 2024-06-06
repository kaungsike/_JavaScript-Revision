import { totalCost } from "./selectors.js";

export const updateTotalCost = () => {
    const allCost = document.querySelectorAll(".cost");
    let total = 0;
    // allCost.forEach((el) => total+=parseFloat(el.innerText));
    
    // totalCost.innerText = total 
    totalCost.innerText = [...allCost].reduce((pv, {innerText})  => 
        pv + parseFloat(innerText),0
    )
}