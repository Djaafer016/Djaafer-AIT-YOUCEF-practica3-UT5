class Pelicula {
    constructor({ title, poster_path, overview, release_date, vote_average }) {
        this.titulo = title;
        this.imagen = poster_path;
        this.descripcion = overview;
        this.fecha = release_date;
        this.puntuacion = vote_average;
    }

    static dibujaPopular(listaPeliculas, contenedor) {
        contenedor.innerHTML = '';
        listaPeliculas.forEach(peliculaData => {
            const pelicula = new Pelicula(peliculaData);
            
            const div = document.createElement('div');
            div.className = 'card m-2 popular-card';
            div.style.width = '18rem';
            div.innerHTML = `
                <img src="${IMAGE_BASE}${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${pelicula.titulo}</h5>
                    <p class="card-text">${pelicula.descripcion}</p>
                    <p class="card-text"><small class="text-muted">Estreno: ${pelicula.fecha} | Puntuación: ${pelicula.puntuacion}</small></p>
                </div>
            `;
            contenedor.appendChild(div);
        });
    }

    static dibujaCartelera(listaPeliculas, contenedor) {
        contenedor.innerHTML = '';
        listaPeliculas.forEach(peliculaData => {
            const pelicula = new Pelicula(peliculaData);
            const div = document.createElement('div');
            div.className = 'card m-2 cartelera-card';
            div.style.width = '18rem';
            div.innerHTML = `
                <img src="${IMAGE_BASE}${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${pelicula.titulo}</h5>
                    <p class="card-text">${pelicula.descripcion}</p>
                    <p class="card-text"><small class="text-muted">Estreno: ${pelicula.fecha} | Puntuación: ${pelicula.puntuacion}</small></p>
                </div>
            `;
            contenedor.appendChild(div);
        });
    }
}