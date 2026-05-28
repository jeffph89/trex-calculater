const { app, BrowserWindow } = require('electron');

function createWindow() {

  const win = new BrowserWindow({
    width: 500,
    height: 850,
    autoHideMenuBar: true
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
});