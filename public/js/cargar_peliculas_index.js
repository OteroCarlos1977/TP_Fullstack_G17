document.addEventListener('DOMContentLoaded', () => {
const API_REST = 'http://localhost:3000/api/';

// Función para cargar películas en la cuadrícula de tendencias
const cargarPeliculasTendencia = async () => {
    try {
        // Realizamos una petición fetch a la API para obtener las películas populares
        const response = await fetch(API_REST + 'movies');
        
        if (!response.ok) {
            throw new Error('Respuesta de la red negativa');
        }
        const data = await response.json();
        console.log(data);
        if (!Array.isArray(data.body)) {
            throw new Error('Se esperaba que data.body fuera un array pero se obtuvo ' + typeof data.body);
        }

        return data.body;
    } catch (error) {
        console.error('Error al cargar las películas de tendencia:', error);
        return [];
    }
};

const mostrarPeliculasTendencia = async () => {
    const movies = await cargarPeliculasTendencia();
    const tendenciasContainer = document.querySelector('.peliculasTendencia .peliculas'); 
    tendenciasContainer.innerHTML = ''; 

    movies.forEach(movie => {
        // creo el ancla
        const ancla = document.createElement('a');
        ancla.href = './pages/detalle.html';
        // creo el div pelicula
        const pelicula = document.createElement('div');
        pelicula.classList.add('pelicula');
        // creo la imagen
        const img = document.createElement('img');
        img.classList.add('imgTendencia');
        img.src = movie.imagen;
        img.alt = movie.titulo;
        img.loading = 'lazy';
        // creo el div tituloPelicula
        const tituloPelicula = document.createElement('div');
        tituloPelicula.classList.add('tituloPelicula');
        // creo el h4
        const titulo = document.createElement('h4');
        titulo.textContent = movie.titulo;
        // relaciono los elementos
        ancla.appendChild(pelicula);
        pelicula.appendChild(img);
        pelicula.appendChild(tituloPelicula);
        tituloPelicula.appendChild(titulo);
        tendenciasContainer.appendChild(ancla);
    });
};

// Llamamos a la función para mostrar las películas de tendencia



// Función para cargar películas en el carrusel de películas aclamadas
const cargarPeliculasAclamadas = async () => {
    try {
        // Realizamos una petición fetch a la API para obtener las películas populares
        const response = await fetch(API_REST + 'aclamadas');
        
        if (!response.ok) {
            throw new Error('Respuesta de la red negativa');
        }
        const data = await response.json();
        console.log(data);
        if (!Array.isArray(data.body)) {
            throw new Error('Se esperaba que data.body fuera un array pero se obtuvo ' + typeof data.body);
        }

        return data.body;
    } catch (error) {
        console.error('Error al cargar las películas de tendencia:', error);
        return [];
    }
    
    
};

const mostrarPeliculasAclamadas = async () => {
    const movies = await cargarPeliculasAclamadas();
    const aclamadasContainer = document.querySelector('.peliculasAclamadas .aclamadas'); 
    aclamadasContainer.innerHTML = ''; 

    movies.forEach(movie => {
        // creo el div peliculaItem
        const peliculaItem = document.createElement('div');
        peliculaItem.classList.add('peliculaItem');
        // creo la imagen
        const img = document.createElement('img');
        img.classList.add('imgAclamada');
        img.src = movie.imagen;
        img.alt = movie.titulo;
        img.loading = 'lazy';
        // relaciono los elementos
        peliculaItem.appendChild(img);
        aclamadasContainer.appendChild(peliculaItem);
    });
};

mostrarPeliculasAclamadas();

mostrarPeliculasTendencia();

 
});
