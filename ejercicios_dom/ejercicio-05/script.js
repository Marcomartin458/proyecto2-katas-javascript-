// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
// que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
const albumList = document.createElement("ul");
albums.forEach((album) => {
  const listItem = document.createElement("li");
  listItem.textContent = album;
  albumList.appendChild(listItem);
});
document.querySelector("main").appendChild(albumList);