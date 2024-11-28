const form = document.getElementById('game-form');
const gamesContainer = document.getElementById('games-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById('game-name').value;
    const price = document.getElementById('game-price').value;
    const imageFile = document.getElementById('game-image').files[0];

    if (imageFile) {
        const reader = new FileReader();

        reader.onload = function(event) {
            // Crear una tarjeta de juego
            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');

            gameCard.innerHTML = `
                <img src="${event.target.result}" alt="${name}">
                <h3>${name}</h3>
                <p>Precio: $${price}</p>
            `;

            // Agregar la tarjeta al contenedor
            gamesContainer.appendChild(gameCard);

            // Limpiar el formulario
            form.reset();
        };

        reader.readAsDataURL(imageFile);
    }
});