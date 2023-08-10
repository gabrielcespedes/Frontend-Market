import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

// Función para obtener favorites dede el backend
export const getFavorites = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/favorites`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los favoritos:', error);
        throw error;
    }
};

export const addFavorite = async (product_id, token) => {
    try {
        const response = await axios.post(`${BASE_URL}/favorites/${product_id}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('No se pudo agregar el favorito');
        }
    } catch(error) {
        console.error('Error al agregar favorito:', error);
        throw error;
    }
};

export const removeFavorite = async (product_id, token) => {
    try {
        const response = await axios.delete(`${BASE_URL}/favorites/${product_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('No se pudo eliminar el favorito');
        }
    } catch(error) {
        console.error('Error al eliminar el favorito:', error);
        throw error;
    }
};