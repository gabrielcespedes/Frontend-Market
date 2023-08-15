import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

export const getBuys = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/buys/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las compras:', error);
        throw error;
    }
};
