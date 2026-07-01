// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
// Haz varios ejemplos y compruébalos.


const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
function findArrayIndex(array, text) {
    for (element of array) {
        if (element === text) {
            return array.indexOf(element);
        }
    }
    return -1;
}

console.log(findArrayIndex(mainCharacters, "Rey")); // Devuelve 4
console.log(findArrayIndex(mainCharacters, "Yoda")); // Devuelve -1

// Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

console.log(mainCharacters); // Devuelve ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
removeItem(mainCharacters, "Rey");
console.log(mainCharacters); // Devuelve ["Luke", "Leia", "Han Solo", "Chewbacca", "Anakin", "Obi-Wan"]