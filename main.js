const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // L'app utilise déjà localStorage dans index.html : ça fonctionne
  // nativement dans la fenêtre Electron, aucun changement nécessaire.
  win.loadFile('index.html');

  // Menu simple (facultatif) — enlève le menu par défaut encombrant.
  win.setMenu(null);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
