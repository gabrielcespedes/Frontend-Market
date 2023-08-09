import axios from 'axios';

// Función para obtener las obras de arte desde el backend
export const getArtworks = async () => {
    try {
        const response = await axios.get('http://localhost:3000/artworks');
        return response.data;
    } catch (error) {
        console.error('Error al obtener las obras de arte:', error);
        throw error;
    }
};

export const addArtwork = async (artwork, token) => {
    try {
        const response = await axios.post('http://localhost:3000/artworks', artwork, {
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
