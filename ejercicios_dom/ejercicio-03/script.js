// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulPaises = document.createElement('ul');
countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    ulPaises.appendChild(li);
});
document.body.appendChild(ulPaises);
console.log(ulPaises);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminarElemento = document.querySelector('.fn-remove-me');
if (eliminarElemento) {
    eliminarElemento.remove();
}
console.log(eliminarElemento);
// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCoches = document.createElement('ul');
cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = car;
    ulCoches.appendChild(li);
});
printHereDiv.appendChild(ulCoches);
console.log(printHereDiv);
// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countriesImagen = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const container = document.createElement('div');
countriesImagen.forEach(country => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = country.title;
    const img = document.createElement('img');
    img.src = country.imgUrl;
    div.appendChild(h4);
    div.appendChild(img);
    container.appendChild(div);
});
document.body.appendChild(container);
console.log(container);
// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.
const eliminarUltimoBoton = document.createElement('button');
eliminarUltimoBoton.textContent = 'Eliminar último div';
eliminarUltimoBoton.addEventListener('click', () => {
    const lastDiv = container.lastElementChild;
    if (lastDiv) {
        lastDiv.remove();
    }
});
document.body.appendChild(eliminarUltimoBoton);
console.log(eliminarUltimoBoton);
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.
const divs = container.querySelectorAll('div');
divs.forEach(div => {
    const eliminarButton = document.createElement('button');
    eliminarButton.textContent = 'Eliminar este div';
    eliminarButton.addEventListener('click', () => {
        div.remove();
    }); 
    div.appendChild(eliminarButton);
});
console.log(divs);