const { api } = require('../../config/api');
const ExchangeRate = require('../models/exchangeRate');

const fetchExchangeRate = async () => {
    try {
        const response = await api.get('/exchangeRates');
        const rate = response.data.BRL;
        return new ExchangeRate('USD', 'BRL', rate);
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        throw error;
    }
};

module.exports = {
    fetchExchangeRate
};
