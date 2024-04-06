import axios from 'axios';
const BASE_URL = 'http://localhost:3000/user';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const signup = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};
