const { app, BrowserWindow } = require('electron');
const requirejs = require('requirejs');

// Declares a mainWindow at the top level so that it wont be garbage collected after the ready state completes
let mainWindow = null;

// Creates a new browser window using the default properties
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        show: false, 
        webPreferences: {
        nodeIntegration: true
      }});

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });
    
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

