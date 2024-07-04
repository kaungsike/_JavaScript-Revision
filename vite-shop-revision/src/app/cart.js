
import Swal from "sweetalert2";
import { cartItemCount, cartItemTemplate, cartTotal } from "../core/selectors"

export const createCartItem = (product,quantity) => {
    const template = cartItemTemplate.content.cloneNode(true); 
    template.querySelector(".cart-item-img").src = product.image;
    template.querySelector(".cart-item-title").innerText = product.title;
    template.querySelector(".cart-item-price").innerText = product.price;
    template.querySelector(".cart-item-quantity").innerText = quantity;

    return template;
}

export const countCartItem = () => {
     const totalItemInCart = document.querySelectorAll(".cart-item").length;

     return totalItemInCart;
}

export const updateCartItemCount = () => {
    cartItemCount.innerText = countCartItem();
}

export const calculateTotal = () => {
    const totalCost = [...document.querySelectorAll(".cart-item-price")].reduce((pv,cv) => pv+parseFloat(cv.innerText),0);

    return totalCost;

}

export const updateTotalCost = () => {
    cartTotal.innerText = parseFloat(calculateTotal()).toFixed(2);
}


export const handleCartGroup = (e) => {
    if(e.target.classList.contains("delBtn")){
        deleteCart(e)
    } 

    updateCartItemCount();
    updateTotalCost();
}

export const deleteCart = (e) => {
    const cart = e.target.closest(".cart-item");
    Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4b5563",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            cart.remove();
            updateCartItemCount();
            updateTotalCost();
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-end",
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
                title: "Deleted in successfully"
              });
        }
      });

}