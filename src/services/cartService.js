import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getCart = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/cart/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el carro de compras:', error);
        throw error;
    }
};
