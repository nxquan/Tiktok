import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api',
});

export const get = async (url, config) => {
    const response = await request.get(url, config);

    return response.data;
};

export default request;
