//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
    const count = {};
    for (element of list) {
        count[element] = (count[element] || 0) + 1;
    }
    return count;
}
console.log(repeatCounter(words));
