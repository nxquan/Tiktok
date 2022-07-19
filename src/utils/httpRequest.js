import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (url, config) => {
    const response = await httpRequest.get(url, config);

    return response.data;
};

export default httpRequest;
