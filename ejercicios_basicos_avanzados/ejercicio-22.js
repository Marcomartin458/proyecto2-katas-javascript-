//Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
//Recuerda no usar frutas duplicadas.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for(const food of foodSchedule){
    if(!food.isVegan){
        const fruit = fruits.shift();
        food.name = fruit;
        food.isVegan = true;
    }
}

console.log(foodSchedule);
