import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://5b4d54899d87020014f1b2f4.mockapi.io/cw/news'
});

export default instance;