// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

// Retorna el array resultante.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  array[index1] = array.splice(index2, 1, array[index1])[0];
  return array;
}

console.log(swap(fantasticFour, 2, 3)); // Devuelve ["Mr. Fantástico", "La antorcha humana", "La cosa", "La mujer invisible"]