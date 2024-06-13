import { updateTotalCost } from "./functions.js";
import { rowGroup, rowTemplate } from "./selectors.js";
import Swal from "sweetalert2";

export const createRecord = (product, quantity) => {
  const template = rowTemplate.content.cloneNode(true);

  template.querySelector(".rowRecord").setAttribute("number", product.id);
  template.querySelector(".name").innerText = product.name;
  template.querySelector(".price").innerText = product.price;
  template.querySelector(".quantity").innerText = quantity;
  template.querySelector(".cost").innerText = product.price * quantity;

  return template;
};

// export const deleteRecord = (e) => {
//   const row = e.target.closest(".rowRecord");
//   // if (confirm("Are you sure to delete?")) {
//   //   row.remove();
//   //   // updateTotalCost()
//   // }
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#0072f5",
//     // cancelButtonColor: "#e8e8e8",
//     confirmButtonText: "Conform"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: "Deleted!",
//         text: "Your file has been deleted.",
//         icon: "success",
//         confirmButtonColor: "#0072f5",
//       });
//     }
//   });
// };

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
