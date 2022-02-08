/* eslint-disable @typescript-eslint/no-var-requires */
const { app, BrowserWindow, globalShortcut } = require("electron");

const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:8080");
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, `./dist/index.html`),
        protocol: "file:",
        slashes: true,
      })
    );
  }

  globalShortcut.register("CommandOrControl+R", () => {
    mainWindow.reload();
  });

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}
console.log(app);
app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
