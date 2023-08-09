import axios from "axios";

// Función para obtener los users desde el backend
export const getUsers = async () => {
    try {
        const response = await axios.get('http://localhost:3000/users');
        return response.data;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        throw error;
    }
};