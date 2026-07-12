// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.



document.addEventListener('DOMContentLoaded', () => {
    const btnToClick = document.querySelector('#btnToClick');
    const focusInput = document.querySelector('.focus');
    const valueInput = document.querySelector('.value');

    if (btnToClick) {
        btnToClick.addEventListener('click', function () {
            const clickInput = document.querySelector('#inputClick');
            console.log('informacion del click:', clickInput.value);
        });
    }

    if (focusInput) {
        focusInput.addEventListener('focus', function (event) {
            console.log('informacion del focus:', event.target.value);
        });
    }

    if (valueInput) {
        valueInput.addEventListener('input', function (event) {
            console.log('informacion del input:', event.target.value);
        });
    }
});