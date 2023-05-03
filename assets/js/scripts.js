const calcNew = document.querySelector('.calc-new');
const btnSubmit = document.querySelector('.btn-submit');
const btnReset = document.querySelector('.btn-reset');
const textFields = document.querySelectorAll('.form-control');
const tbWidth = document.querySelector('.tb-width');
const tbHeight = document.querySelector('.tb-height');
const tbWidthNew = document.querySelector('.tb-width-new');
const tbHeightNew = document.querySelector('.tb-height-new');
let isWidthNew;

addEventListeners();

function addEventListeners() {
    btnReset.addEventListener('click', (evt) => resetCalculator());

    // Submit to active new width and height fields
    btnSubmit.addEventListener('click', (evt) => {
        calcNew.classList.add('d-none');

        if (tbWidth.value && tbHeight.value) {
            calcNew.classList.remove('d-none');
            inputsDisabled(true);
        }
    });
  
    // New width field listener while typing
    tbWidthNew.addEventListener('keyup', (evt) => {
        isWidthNew = true;
        calculate();
    });

    // New height field listener while typing
    tbHeightNew.addEventListener('keyup', (evt) => {
        isWidthNew = false;
        calculate();
    });
}

// Reset calculator to clear all fields and hide new fields
function resetCalculator() {
    textFields.forEach((tb) => tb.value = '');
    calcNew.classList.add('d-none');
    inputsDisabled(false);
}

// Update the input disabled status on width and height fields
function inputsDisabled(status) {
    tbWidth.disabled = status;
    tbHeight.disabled = status;
}

// Run proportion formula on new width and height input changes
function calculate() {
    if (isWidthNew) {
        tbHeightNew.value = (tbWidthNew.value * tbHeight.value) / tbWidth.value;
    }
    else {
        tbWidthNew.value = (tbHeightNew.value * tbWidth.value) / tbHeight.value;
    }
}
