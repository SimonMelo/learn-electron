const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const { fetchExchangeRate } = require('../domain/services/exchangeService');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, '../renderer/preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
        }
    });

    win.loadFile(path.join(__dirname, '../renderer/index.html'));

    const menu = Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                { role: 'quit' }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
            ]
        }
    ]);

    Menu.setApplicationMenu(menu);
};

app.whenReady().then(() => {
    createWindow();

    ipcMain.handle('get-exchange-rate', async () => {
        try {
            const rate = await fetchExchangeRate();
            return rate;
        } catch (error) {
            console.error('Error fetching exchange rate:', error);
            throw error;
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
