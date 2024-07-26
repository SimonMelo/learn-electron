const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    getExchangeRate: () => ipcRenderer.invoke('get-exchange-rate')
});
