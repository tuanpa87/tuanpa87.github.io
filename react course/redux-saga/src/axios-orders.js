import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://redux-saga-burger.firebaseio.com/'
});

export default instance;