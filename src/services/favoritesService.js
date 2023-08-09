import axios from 'axios';

// Función para obtener favorites dede el backend
export const getFavorites = async () => {
    try {
        const response = await axios.get('http://localhost:3000/favorites');
        return response.data;
    } catch (error) {
        console.error('Error al obtener los favoritos:', error);
        throw error;
    }
};

export const addFavorite = async (product_id, token) => {
    try {
        const response = await axios.post(`http://localhost:3000/favorites/${product_id}`, {}, {
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
        const response = await axios.delete(`http://localhost:3000/favorites/${product_id}`, {
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