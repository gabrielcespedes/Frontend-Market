import axios from "axios";

const BASE_URL = 'http://localhost:3000';

// Función para obtener los verified_artists desde el backend
export const getVerifiedArtists = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/artist`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los artistas verificados:', error);
        throw error;
    }
};