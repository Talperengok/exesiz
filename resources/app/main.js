const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  // Yeni bir pencere oluşturuyoruz
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Güvenlik açısından Node entegrasyonunu kapatabilir, 
      // eğer sadece web teknolojileri kullanacaksanız:
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  // index.html dosyasını yüklüyoruz
  win.loadFile('index.html');

  // Opsiyonel: Geliştirici araçlarını açar
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // macOS'ta aktif pencereler bitince yeniden yeni pencere açma
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Tüm pencereler kapatıldığında uygulamayı sonlandırır
app.on('window-all-closed', function () {
});
