'use strict';

/* imports ********************************************************************/

// native
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// conf
const conf = {
  ui: require('./conf/ui.json')
}

/* decl ***********************************************************************/

let window;

/* process ********************************************************************/

/**
* creates & initializes the mainWindow
*/
function createWindow(){
  if(window) return; // singleton
  window = new BrowserWindow(conf.ui.window);
  window.loadURL('file://' + __dirname + '/index.html');
  if(conf.ui.devTools) window.webContents.openDevTools();
  window.on('closed', ()=>{
    window = null; // Dereference the window object
  });
}


app.on('ready', createWindow);
app.on('activate', createWindow); // ensure mainWindow

app.on('window-all-closed', ()=>{
  if(process.platform !== 'darwin') app.quit(); // non OS X
});
