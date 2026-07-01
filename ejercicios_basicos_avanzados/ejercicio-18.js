//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
for(const place of placesToTravel){
    if(place.id === 11 || place.id === 40){
        const index = placesToTravel.indexOf(place);
        placesToTravel.splice(index, 1);
    }
}
console.log(placesToTravel);