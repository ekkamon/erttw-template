import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import installExtension, {
  REDUX_DEVTOOLS,
  REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer';
import channels from 'common/channels';

function initializeApp() {
  let mainWindow: BrowserWindow | null;

  const createWindow = () => {
    mainWindow = new BrowserWindow({
      width: 1280,
      height: 800,
      minWidth: 1280,
      minHeight: 800,
      resizable: false,
      frame: false,
      backgroundColor: '#191919',
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    mainWindow.center();

    const isServe = process.argv.slice(1).some((arg) => arg === '--serve');

    if (isServe) {
      mainWindow.loadURL('http://localhost:8080/index.html');
    } else {
      mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
    }

    mainWindow.on('closed', () => {
      mainWindow?.removeAllListeners();
      app.quit();
    });
  };

  const appListeners = async () => {
    ipcMain.on(channels.window.minimize, () => {
      mainWindow?.minimize();
    });

    ipcMain.on(channels.window.maximize, () => {
      !mainWindow.isMaximized()
        ? mainWindow.maximize()
        : mainWindow.unmaximize();
    });

    ipcMain.on(channels.window.close, () => {
      mainWindow?.destroy();
    });
  };

  const installTools = () => {
    // Inspect (F12)
    mainWindow.webContents.openDevTools();

    // Install extensions
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));

    installExtension(REDUX_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
  };

  app.on('ready', () => {
    createWindow();
    appListeners();

    if (process.env.NODE_ENV == 'development') {
      installTools();
    }
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
}

initializeApp();
