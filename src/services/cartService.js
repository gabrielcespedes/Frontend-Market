import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

export const getCart = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/cart/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el carro de compras:', error);
        throw error;
    }
};
