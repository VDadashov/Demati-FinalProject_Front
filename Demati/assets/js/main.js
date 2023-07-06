//#region flagDropdown-active
const haveFlagSelected = document.querySelector("#have-flag-selected");
const haveLanguageSelected = document.querySelector("#have-language-selected");

haveFlagSelected.addEventListener("click",flagsDropdown)
haveLanguageSelected.addEventListener("click",languagesDropdown);

function flagsDropdown(){
    let flagDropdown = document.querySelector("#flagDropdown");
    const flagsDropdownIcon = document.querySelector("#flagsDropdownIcon");
    let languageDropdown = document.querySelector("#languageDropdown");
    const languageDropdownIcon = document.querySelector("#languagesDropdownIcon");

    if(flagDropdown.classList.contains("active-flag")){
        flagDropdown.classList.remove("active-flag");
        flagsDropdownIcon.classList.remove("active-flag-icon");
    }else{
        languageDropdown.classList.remove("active-language");
        languageDropdownIcon.classList.remove("active-language-icon");
        flagDropdown.classList.add("active-flag");
        flagsDropdownIcon.classList.add("active-flag-icon");
    }
}
//#endregion

//#region languagesDropdown-active
function languagesDropdown(){
    let languageDropdown = document.querySelector("#languageDropdown");
    const languageDropdownIcon = document.querySelector("#languagesDropdownIcon");

    if(languageDropdown.classList.contains("active-language")){
        languageDropdown.classList.remove("active-language");
        languageDropdownIcon.classList.remove("active-language-icon");
    }else{
        flagDropdown.classList.remove("active-flag");
        flagsDropdownIcon.classList.remove("active-flag-icon");
        languageDropdown.classList.add("active-language");
        languageDropdownIcon.classList.add('active-language-icon');
    }
}
//#endregion

//#region category-animation
const parentItems = document.querySelectorAll('.categories-item');
parentItems.forEach((parentItem) => {
  const image = parentItem.querySelector('.categories-item__image');

  parentItem.addEventListener('mouseenter', () => {
    image.style.display = 'block';
  });

  parentItem.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX - parentItem.offsetLeft;

    image.style.left = `${mouseX}px`;
  });

  parentItem.addEventListener('mouseleave', () => {
    image.style.display = 'none';
  });
});
//#endregion

//#region header-scroll
window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (scrollPosition > 300) {
    header.style.position = "fixed";
    header.style.width = "100%";
  } else {
    header.style.position = "static";
    header.style.width = "auto";
  }
});
//#endregion

//#region product-card=>color-active
let productCards = document.querySelectorAll(".product-card");

  function setActiveColor(event) {
    let parent = event.currentTarget.closest(".product-card");
    let colorContents = parent.querySelectorAll(".product-card__color__content");

    for (let i = 0; i < colorContents.length; i++) {
      colorContents[i].classList.remove("active-color");
    }

    event.currentTarget.classList.add("active-color");
  }

  for (let i = 0; i < productCards.length; i++) {
    var colorContents = productCards[i].querySelectorAll(".product-card__color__content");

    for (let j = 0; j < colorContents.length; j++) {
      colorContents[j].addEventListener("click", setActiveColor);
    }
  }
//#endregion

//#region weekly-selection=>tablist
let tabLi = document.querySelectorAll('.tab-list__li');
let tabLiContent = document.querySelectorAll('.tab-list__content')

tabLi.forEach((item, index) => {
  item.addEventListener('click', () => {
    tabLi.forEach(item => {
      item.classList.remove('active-selected')
    })
    item.classList.add('active-selected');

    tabLiContent.forEach(item => {
      item.classList.remove("active-content");
    })
    tabLiContent[index].classList.add('active-content');

  })
});
//#endregion

//#region load
window.addEventListener('load', function() {
  var loadingAnimation = document.getElementById('loading-animation');
  loadingAnimation.style.display = 'block';
  loadingAnimation.style.display = 'none';
});
//#endregion

//#region product-color-hover-text
function productColorHoverText(){
  const colorContentDivs = document.querySelectorAll('.product-card__color__content');

colorContentDivs.forEach(colorContentDiv => {
    const colorBoxDiv = colorContentDiv.querySelector('.product-card__color--box');
    const hoverTextSpan = colorContentDiv.querySelector('.product-card__color--box__text');
    const hoverTextContent = colorContentDiv.querySelector('.product-card__color--box--hover-text');
  
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
productColorHoverText();
//#endregion



