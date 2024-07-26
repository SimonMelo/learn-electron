const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(() => {
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
})

api.interceptors.response.use(() => {
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
})

module.exports = { api };
