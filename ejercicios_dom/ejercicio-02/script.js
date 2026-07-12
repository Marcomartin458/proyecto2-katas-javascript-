// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement('div');
document.body.appendChild(div);
console.log(div);
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divP = document.createElement('div');
const p = document.createElement('p');
p.textContent = 'Soy una p dentro del div';
divP.appendChild(p);
document.body.appendChild(divP);
console.log(divP);
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
const divConSeisP = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Soy la p número ${i + 1}`;
  divConSeisP.appendChild(p);
}
document.body.appendChild(divConSeisP);
console.log(divConSeisP);
// 2.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

const Pdinamico = document.createElement('p');
Pdinamico.textContent = 'Soy dinámico!';
document.body.appendChild(Pdinamico);
console.log(Pdinamico);
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';
console.log(h2);
// 2.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);
console.log(ul);
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach(element => {
  element.remove();
});
console.log('Elementos eliminados:', elementsToRemove.length);
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll('div');
if (divs.length >= 2) {
  const pInMiddle = document.createElement('p');
  pInMiddle.textContent = 'Voy en medio!';
  document.body.insertBefore(pInMiddle, divs[1]);
}
console.log('P insertada entre los divs:', pInMiddle);
// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here
const divsInsert= document.querySelectorAll('div.fn-insert-here');
divsInsert.forEach(div => {
  const pInside = document.createElement('p');
    pInside.textContent = 'Voy dentro!'; 
    div.appendChild(pInside);
});
console.log('P insertadas dentro de los divs:', divsInsert.length);