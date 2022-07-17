const path = require("path")

const { app, BrowserWindow } = require("electron")
const isDev = require("electron-is-dev")
const express = require("express")
const expressApp = express()

const PORT = 3999

expressApp.use(express.static(path.join(__dirname, "../build")))
expressApp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"))
})

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    }
  })

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(isDev ? "http://localhost:3999" : `file://${path.join(__dirname, "../build/index.html")}`)
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" })
  } else {
    win.webContents.once("did-finish-load", () => {
      expressApp.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
      })
    })
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
