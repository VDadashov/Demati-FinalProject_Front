//#region checkBoxChanged
function cartCheckboxChanged() {
    let checkbox = document.querySelector('#terms');
    const checkOutBtn = document.querySelector('.shopping-cart--checkOut-btn');
  
    if (checkbox.checked) {
      checkOutBtn.classList.add('shopping-cart-activeBtn');
      checkOutBtn.href = "./checkout.html";
    } else {
      checkOutBtn.classList.remove('shopping-cart-activeBtn');
      checkOutBtn.href = '';
    }
  }
  cartCheckboxChanged();
  //#endregion