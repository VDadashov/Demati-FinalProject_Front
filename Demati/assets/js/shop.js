//#region filter-categories-view-more-button=>active
function categoriesViewMoreActive() {
    let categoryViewMoreBtn = document.querySelector(".shop__filter__categories--view-more");
    let filterItems = document.querySelectorAll('.shop__filter__categories__item');
    let categoryViewMoreBtnSimvol = document.querySelector('.shop__filter__categories--view-more--simvol')
    let categoryViewMoreBtnText = document.querySelector('.shop__filter__categories--view-more--text');
    categoryViewMoreBtn.addEventListener('click', function () {
        if (categoryViewMoreBtn.classList.contains('active-c-btn')) {
            filterItems.forEach((item, index) => {
                if (index > 4) {
                    item.classList.add('deactivate');
                }
            });
            categoryViewMoreBtnSimvol.textContent = "+";
            categoryViewMoreBtnText.textContent = "View more";
            categoryViewMoreBtn.classList.remove('active-c-btn');
        } else {
            filterItems.forEach(item => {
                item.classList.remove('deactivate');
            });
            categoryViewMoreBtnSimvol.textContent = "-";
            categoryViewMoreBtnText.textContent = "View less";
            categoryViewMoreBtn.classList.add('active-c-btn');
        }
    })

}
categoriesViewMoreActive();
//#endregion

//#region filter-categories-display-close
function filterCategoryDisplay() {
    let categoryClose = document.querySelector('.shop__filter__categories__title--close');
    let categoryDisplay = document.querySelector('.shop__filter__categories__display');
    const categoriesCloseIcon = categoryClose.children;


    categoryClose.addEventListener('click', function () {
        if (categoryDisplay.classList.contains('display-c-active')) {
            for (let i = 0; i < categoriesCloseIcon.length; i++) {
                const categoryCloseIcon = categoriesCloseIcon[i];
                categoryCloseIcon.style.transform = 'rotate(0deg)';
            }
            categoryDisplay.classList.remove('display-c-active');
        } else {
            for (let i = 0; i < categoriesCloseIcon.length; i++) {
                const categoryCloseIcon = categoriesCloseIcon[i];
                categoryCloseIcon.style.transform = 'rotate(180deg)';
                // categoriesCloseIcon.style.transform = 'all 0.6s'
            }
            categoryDisplay.classList.add('display-c-active');
        }
    })
}
filterCategoryDisplay();
function categoriestoggleCheck(clickedCheckbox) {
    const availabilityCheckboxes = document.querySelectorAll('input[type="checkbox"][class^="categories-checkbox"]');

    availabilityCheckboxes.forEach((checkbox) => {
        if (checkbox !== clickedCheckbox) {
            checkbox.checked = false;
        }
    });
}
//#endregion

//#region filter-price-range-slider
function filterPriceRangeSlider() {
    const priceInputs = document.querySelectorAll(".price-input input");
    const rangeInputs = document.querySelectorAll(".range-input input");
    const range = document.querySelector(".slider .progress");

    let priceGap = 9;

    priceInputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrice = parseInt(priceInputs[0].value);
            let maxPrice = parseInt(priceInputs[1].value);

            if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInputs[1].max) {
                if (e.target.className === "min-input") {
                    rangeInputs[0].value = minPrice;
                    range.style.left = (minPrice / rangeInputs[0].max) * 100 + "%";
                } else {
                    rangeInputs[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInputs[1].max) * 100 + "%";
                }
            }
        });
    });

    rangeInputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInputs[0].value);
            let maxVal = parseInt(rangeInputs[1].value);

            if (maxVal - minVal < priceGap) {
                if (e.target.className === "min-range") {
                    rangeInputs[0].value = maxVal - priceGap;
                } else {
                    rangeInputs[1].value = minVal + priceGap;
                }
            } else {
                priceInputs[0].value = minVal;
                priceInputs[1].value = maxVal;
                range.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
                range.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
            }
        });
    });
}
filterPriceRangeSlider();
//#endregion

//#region filter-avialability-display-close
function filterAvailabilityDisplay() {
    let availabilityClose = document.querySelector('.shop__filter__availability__title--close');
    let availabilityDisplay = document.querySelector('.shop__filter__availability__display');
    const availabilitiesCloseIcon = availabilityClose.children;


    availabilityClose.addEventListener('click', function () {
        if (availabilityDisplay.classList.contains('display-a-active')) {
            for (let i = 0; i < availabilitiesCloseIcon.length; i++) {
                const availabilitiyCloseIcon = availabilitiesCloseIcon[i];
                availabilitiyCloseIcon.style.transform = 'rotate(0deg)';
            }
            availabilityDisplay.classList.remove('display-a-active');
        } else {
            for (let i = 0; i < availabilitiesCloseIcon.length; i++) {
                const availabilitiyCloseIcon = availabilitiesCloseIcon[i];
                availabilitiyCloseIcon.style.transform = 'rotate(180deg)';
            }
            availabilityDisplay.classList.add('display-a-active');
        }
    })
}

filterAvailabilityDisplay();

function availabilitytoggleCheck(clickedCheckbox) {
    const availabilityCheckboxes = document.querySelectorAll('input[type="checkbox"][class^="availability-checkbox"]');

    availabilityCheckboxes.forEach((checkbox) => {
        if (checkbox !== clickedCheckbox) {
            checkbox.checked = false;
        }
    });
}
//#endregion

//#region filter-price-display-close
function filterPriceDisplay() {
    let priceClose = document.querySelector('.shop__filter__price__title--close');
    let priceDisplay = document.querySelector('.shop__filter__price__display');
    const pricesCloseIcon = priceClose.children;


    priceClose.addEventListener('click', function () {
        if (priceDisplay.classList.contains('display-p-active')) {
            for (let i = 0; i < pricesCloseIcon.length; i++) {
                const priceCloseIcon = pricesCloseIcon[i];
                priceCloseIcon.style.transform = 'rotate(0deg)';
            }
            priceDisplay.classList.remove('display-p-active');
        } else {
            for (let i = 0; i < pricesCloseIcon.length; i++) {
                const priceCloseIcon = pricesCloseIcon[i];
                priceCloseIcon.style.transform = 'rotate(180deg)';
            }
            priceDisplay.classList.add('display-p-active');
        }
    })
}

filterPriceDisplay();
//#endregion

//#region filter-color-hover-text
function filterColorHoverText() {
    const colorContentDivs = document.querySelectorAll('.shop__filter__color__content');

    colorContentDivs.forEach(colorContentDiv => {
        const colorBoxDiv = colorContentDiv.querySelector('.shop__filter__color--box');
        const hoverTextSpan = colorContentDiv.querySelector('.shop__filter__color--box__text');
        const hoverTextContent = colorContentDiv.querySelector('.shop__filter__color--box--hover-text');

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
filterColorHoverText();
//#endregion

//#region filter-color-display-close
function filterColorDisplay() {
    let colorClose = document.querySelector('.shop__filter__color__title--close');
    let colorDisplay = document.querySelector('.shop__filter__color__display');
    const colorsCloseIcon = colorClose.children;


    colorClose.addEventListener('click', function () {
        if (colorDisplay.classList.contains('display-c-active')) {
            for (let i = 0; i < colorsCloseIcon.length; i++) {
                const colorCloseIcon = colorsCloseIcon[i];
                colorCloseIcon.style.transform = 'rotate(0deg)';
            }
            colorDisplay.classList.remove('display-c-active');
        } else {
            for (let i = 0; i < colorsCloseIcon.length; i++) {
                const colorCloseIcon = colorsCloseIcon[i];
                colorCloseIcon.style.transform = 'rotate(180deg)';
            }
            colorDisplay.classList.add('display-c-active');
        }
    })
}

filterColorDisplay();
//#endregion

//#region filter-size=>active-filter-size
function filterSizeActive() {
    let allFilterSize = document.querySelectorAll(".shop__filter__size__item");

    allFilterSize.forEach(item => {
        item.addEventListener('click', function () {
            sizeBtn = item.querySelector(".shop__filter__size__item--button");
            if (sizeBtn.classList.contains("active-filter-size")) {
                sizeBtn.classList.remove("active-filter-size");
            } else {
                sizeBtn.classList.add("active-filter-size");
            }
        })
    });
}
filterSizeActive();
//#endregion

//#region filter-size-display-close
function filterSizeDisplay() {
    let sizeClose = document.querySelector('.shop__filter__size__title--close');
    let sizeDisplay = document.querySelector('.shop__filter__size__display');
    const sizesCloseIcon = sizeClose.children;


    sizeClose.addEventListener('click', function () {
        if (sizeDisplay.classList.contains('display-s-active')) {
            for (let i = 0; i < sizesCloseIcon.length; i++) {
                const sizeCloseIcon = sizesCloseIcon[i];
                sizeCloseIcon.style.transform = 'rotate(0deg)';
            }
            sizeDisplay.classList.remove('display-s-active');
        } else {
            for (let i = 0; i < sizesCloseIcon.length; i++) {
                const sizeCloseIcon = sizesCloseIcon[i];
                sizeCloseIcon.style.transform = 'rotate(180deg)';
            }
            sizeDisplay.classList.add('display-s-active');
        }
    })
}
filterSizeDisplay();
//#endregion

//#region pagination-move
function paginationMove() {
    const paginationLinks = document.querySelectorAll('.pagination__item');
    const prevBtn = document.querySelector('.pagination__prev-btn');
    const nextBtn = document.querySelector('.pagination__next-btn');

    paginationLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Aktif sınıfı diğer tüm linklerden kaldır
            paginationLinks.forEach(link => {
                link.classList.remove('pagination-active');
            });

            // Seçilen linki aktif yap
            link.classList.add('pagination-active');
        });
    });

    prevBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const activeLink = document.querySelector('.pagination__item.pagination-active');
        const prevLink = activeLink.previousElementSibling;

        if (prevLink && !prevLink.classList.contains('pagination__prev-btn')) {
            activeLink.classList.remove('pagination-active');
            prevLink.classList.add('pagination-active');
        }
    });

    nextBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const activeLink = document.querySelector('.pagination__item.pagination-active');
        const nextLink = activeLink.nextElementSibling;

        if (nextLink && !nextLink.classList.contains('pagination__next-btn')) {
            activeLink.classList.remove('pagination-active');
            nextLink.classList.add('pagination-active');
        }
    });


}
paginationMove();
//#endregion

function toggleActiveColor(clickedElement) {
    const colorContents = document.querySelectorAll('.shop__filter__color__content');
    colorContents.forEach((element) => {
        if (element === clickedElement) {
            element.classList.add('active-color');
        } else {
            element.classList.remove('active-color');
        }
    });
}


