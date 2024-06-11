import { updateTotalCost } from "./functions.js";
import { rowGroup, rowTemplate } from "./selectors.js";

export const createRecord = (product, quantity) => {
  const template = rowTemplate.content.cloneNode(true);

  template.querySelector(".rowRecord").setAttribute("number", product.id);
  template.querySelector(".name").innerText = product.name;
  template.querySelector(".price").innerText = product.price;
  template.querySelector(".quantity").innerText = quantity;
  template.querySelector(".cost").innerText = product.price * quantity;

  return template;
};

export const deleteRecord = (e) => {
  const row = e.target.closest(".rowRecord");
  if (confirm("Are you sure to delete?")) {
    row.remove();
    // updateTotalCost()
  }
};

export const updateRecord = (productId, number) => {
  const row = document.querySelector(`[number='${productId}']`);
  const price = row.querySelector(".price").innerText;
  const currentCost = row.querySelector(".cost");
  const quantity = row.querySelector(".quantity");

  if (number > 0 || quantity.innerText > 1) {
    quantity.innerText = parseInt(quantity.innerText) + number;
    currentCost.innerText = quantity.innerText * price;
  }
  // updateTotalCost()
};

export const recordObserver = () => {
  const run = () => {
    updateTotalCost();
  };

  const observerOptions = {
    childList: true,
    subtree: true,
  };

  const observer = new MutationObserver(run);
  observer.observe(rowGroup,observerOptions)
};
