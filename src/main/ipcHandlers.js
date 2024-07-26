const { ipcMain } = require('electron')
const { fetchExchangeRate } = 

module.exports = () => {
    ipcMain.on('get-exchange-rate', async (event) => {
        try {
            const rate = await fetchExchangeRate()
            event.reply('exchange-rate-response', rate)
        } catch (error) {
            console.error('Erro ao obter a taxa de câmbio:', error);
            event.reply('exchange-rate-response', 'Erro ao obter a taxa de câmbio')
        }
    })
}