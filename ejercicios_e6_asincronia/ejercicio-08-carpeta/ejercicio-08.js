// Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así:
// Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

const selectElement = document.getElementById('character-list');
const characterImage = document.querySelector('.character-image');
const apiUrl = 'https://thronesapi.com/api/v2/Characters';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(character => {
            const option = document.createElement('option');
            option.value = character.imageUrl;
            option.textContent = character.fullName;
            selectElement.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


selectElement.addEventListener('change', (event) => {
    const selectedImageUrl = event.target.value;
    characterImage.src = selectedImageUrl;
});
