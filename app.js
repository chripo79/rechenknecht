const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');


/*function createWindow() {
    let win = new BrowserWindow({width:800, heigth:600});
    win.loadFile('index.html');

   // win.openDevTools();
*/
let win =null;

function initialize(){
   function createWindow(){ 
   const windowOptions = {
      width:800,
      heigth:600,
      //title: app.getName()
      backgroundColor: "#cedae2",
      webPreferences:{nodeIntegration:true}
      //nodeIntegration=true    
          
   }


   win =new BrowserWindow(windowOptions);
   win.loadURL(path.join('file://',__dirname, '/index.html'))
    win.openDevTools();
    
   win.on('closed',()=>{
    win = null
    });
    }

    app.on("ready",()=>{createWindow()});

app.on('window-all-closed',()=>{ app.quit()});

app.on('activate',()=>{
    if(win===null){
        createWindow()
    }
});

}

initialize();



