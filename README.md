# FFXIV Completionist

## Documentation
[License](LICENSE.txt)  
[Development Setup](_documentation/Development.md)  
[Localization](_documentation/Localization%20Notes.md)

## Electron Main Process
ALL code that accesses the file system directly or opens remote sites
will be contained in the electron main process under `*/main`  

## Electron Renderer Process
All UI code exists in this process under `*/renderer`  
Use `ipcRenderer` actions to delegate any file system or remote logic to the main process  

## Branch Strategy
`master` - Currently released version  
`development` - Working branch for current release
`release-x-y-z` - Working branch for upcoming release

Tag `master` each release for historical reference

## Workspaces
desktop - named workspace for main app
translate - named workspace for translation helper app

Commands can be run from root using `npm run <command> -w <workspace>`  
Commands can also be run directly from workspace roots without `-w`  

## Commands
`npm run start` - Main development command
* Combines other commands to serve the electron app in dev mode

`npm run electron:build` - Windows build
* Must be run as admin on win 11

`npm run electron:build-linux` - Linux build  

`npm run electron:build-mac` - Mac build  
