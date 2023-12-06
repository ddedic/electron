var fs = require('fs')
var path = require('path')
var os = require('os')

function getPlatformPath () {
    var platform = process.env.npm_config_platform || os.platform()

    switch (platform) {
      case 'darwin':
        return 'dist/Electron.app/Contents/MacOS/Electron'
      case 'freebsd':
      case 'linux':
        return 'dist/electron'
      case 'win32':
        return 'dist/electron.exe'
      default:
        throw new Error('Electron builds are not available on platform: ' + platform)
    }
}

module.exports = path.join(__dirname, getPlatformPath())