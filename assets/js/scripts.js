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

    btnSubmit.addEventListener('click', (evt) => {
        calcNew.classList.add('d-none');

        if (tbWidth.value && tbHeight.value) {
            calcNew.classList.remove('d-none');
            disableWidthHeight();
        }
    });
  
    tbWidthNew.addEventListener('keyup', (evt) => {
        isWidthNew = true;
        calculate();
    });

    tbHeightNew.addEventListener('keyup', (evt) => {
        isWidthNew = false;
        calculate();
    });
}

function resetCalculator() {
    textFields.forEach((tb) => tb.value = '');
    calcNew.classList.add('d-none');
    enableWidthHeight();
}

function disableWidthHeight() {
    tbWidth.disabled = true;
    tbHeight.disabled = true;
}

function enableWidthHeight() {
    tbWidth.disabled = false;
    tbHeight.disabled = false;
}

function calculate() {
    if (isWidthNew) {
        tbHeightNew.value = (tbWidthNew.value * tbHeight.value) / tbWidth.value;
    }
    else {
        tbWidthNew.value = (tbHeightNew.value * tbWidth.value) / tbHeight.value;
    }
}
