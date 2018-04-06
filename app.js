const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

function createWindow(){
  //Create New Window
  mainWindow = new BrowserWindow({});
  // Load HTML into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes: true
  }));

  // When window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // Makes sure that the application does not
  // quit unless explicitly told to on Mac
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('activate', ()=> {
  if(win === null){
    createWindow();
  }
});
