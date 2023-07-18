//#region productModal
function productModal() {
    const productModal = document.querySelector('#productModal');
    const productModalClose = document.querySelector('#productModalClose');
  
    productModalClose.addEventListener('click', () => {
      productModal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === productModal) {
        productModal.style.display = 'none';
      }
    });
  }
  function openModal() {
    const productModal = document.querySelector('#productModal');
    productModal.style.display = "block";
  }
  productModal();
  //#endregion
  
//#region productModalColorHoverSize
  function modalColorHoverSize() {
    const colorContentDivs = document.querySelectorAll('.productModal__color__box');
  
    colorContentDivs.forEach(colorContentDiv => {
      const colorBoxDiv = colorContentDiv.querySelector('.productModal__color--box');
      const hoverTextSpan = colorContentDiv.querySelector('.productModal__color--box__text');
      const hoverTextContent = colorContentDiv.querySelector('.productModal__color--box--hover-text');
  
      colorContentDiv.addEventListener('mouseover', () => {
        hoverTextSpan.textContent = colorBoxDiv.style.backgroundColor;
        hoverTextContent.style.display = "flex";
        hoverTextSpan.style.position = 'absolute';
      });
  
      colorContentDiv.addEventListener('mouseout', () => {
        hoverTextSpan.textContent = '';
        hoverTextContent.style.display = "none";
        hoverTextSpan.style.position = '';
      });
    });
  }
  modalColorHoverSize();
  //#endregion
  
//#region productModalColorActive
  function modalColorActive() {
    let colors = document.querySelectorAll('.productModal__color__box');
    let colorValue = document.querySelector('.productModal__color__value');
  
    colors.forEach(color => {
      color.addEventListener('click', function () {
        colors.forEach(item => {
          item.classList.remove('active-color');
        })
        colorName = color.querySelector('.productModal__color--box').style.backgroundColor;
        colorValue.textContent = colorName;
        color.classList.add('active-color');
      })
    })
  }
  modalColorActive();
  //#endregion
  
//#region productModalSizeActive
  function modalSizeActive() {
    let boxSize = document.querySelectorAll('.productModal__size__box');
    let sizeValue = document.querySelector('.productModal__size__value');
  
    boxSize.forEach(item => {
      item.addEventListener('click', function () {
        boxSize.forEach(item => {
          item.classList.remove('active-size');
        })
        let span = item.querySelector('span');
        sizeValue.textContent = span.textContent;
        item.classList.add('active-size');
      })
      boxSize.forEach(item => {
        if (item.classList.contains('active-size')) {
          let span = item.querySelector('span');
          sizeValue.textContent = span.textContent;
        }
      })
    });
  }
  modalSizeActive();
  //#endregion
  
//#region productModalcountQty
  function productModalcountQty() {
    document.querySelector('.productModal__qty-minus').addEventListener('click', function () {
      let inputElement = document.getElementById('productModal--count');
      let value = parseInt(inputElement.value);
  
      if (value > 1) {
        inputElement.value = value - 1;
      }
    });
  
    document.querySelector('.productModal__qty-plus').addEventListener('click', function () {
      let inputElement = document.getElementById('productModal--count');
      let value = parseInt(inputElement.value);
  
      inputElement.value = value + 1;
    });
  }
  productModalcountQty();
  //#endregion
  