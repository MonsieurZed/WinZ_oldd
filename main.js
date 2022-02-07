import { app, BrowserWindow, globalShortcut } from "electron";

import { format } from "url";
import { join } from "path";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === "development") {
    console.log("IF");
    mainWindow.loadURL("http://localhost:8080");
  } else {
    console.log("ELSE");

    mainWindow.loadURL(
      format({
        pathname: join(__dirname, `./dist/index.html`),
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
