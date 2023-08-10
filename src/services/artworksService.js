import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

// Función para obtener las obras de arte desde el backend
export const getArtworks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/artworks`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las obras de arte:', error);
        throw error;
    }
};

export const addArtwork = async (artwork, token) => {
    try {
        const response = await axios.post(`${BASE_URL}/artworks`, artwork, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }); 
        return response.data;            
    } catch(error) {
        console.error('Error al agregar el producto: ', error);
        throw error;
    }
};
