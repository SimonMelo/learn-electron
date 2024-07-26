const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:3000', // URL do json-server
});

module.exports = { api };
