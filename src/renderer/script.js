document.getElementById('getRate').addEventListener('click', async () => {
    try {
        const rate = await window.api.getExchangeRate();
        document.getElementById('rateDisplay').innerText = `1 USD = ${rate.rate} BRL`;
    } catch (error) {
        console.error('Failed to fetch exchange rate:', error);
        document.getElementById('rateDisplay').innerText = 'Error fetching rate';
    }
});
