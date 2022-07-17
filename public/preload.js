const { contextBridge } = require("electron")

contextBridge.exposeInMainWorld("files", {
  read: path => {
    return require("fs").readFileSync(path, "base64")
  }
})
