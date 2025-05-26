document.addEventListener("DOMContentLoaded", async function () {
    const popularesContainer = document.getElementById('populares-container');
    const carteleraContainer = document.getElementById('cartelera-container');

    let populares = await Populares.getMásPopulares(1);
    if (populares && populares.length) {
        Pelicula.dibujaPopular(populares.slice(0, 5), popularesContainer);
    }
    let cartelera = await Cartelera.getNuevasPelículas(1);
    if (cartelera && cartelera.length) {
        Pelicula.dibujaCartelera(cartelera.slice(0, 5), carteleraContainer);
    }

    document.getElementById('ver-todas-populares').addEventListener('click', () => {
        window.location.href = 'populares.html';
    });
    document.getElementById('ver-todas-cartelera').addEventListener('click', () => {
        window.location.href = 'cartelera.html';
    });
});