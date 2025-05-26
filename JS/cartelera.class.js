class Cartelera {
    static async getNuevasPelículas(página = 1) {
        const url = `${API_BASE_URL}/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=${página}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error al obtener las películas de cartelera:', error);
            return [];
        }
    }
}