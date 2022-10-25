import axios from 'axios';
import { config } from '../../config';

export const getAddress = async () => {
    const {token} = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios.get(`${config.api_host}/api/delivery-address?limit=`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
}


export const addAddress = async () => {
    const {token} = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios.post(`${config.api_host}/api/delivery-address`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
}