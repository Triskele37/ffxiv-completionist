# FFXIV Completionist

## Setup
Requires at least Node 14.16.0  

`npm install` in the main directory and `/app`  

`npm run start` will serve the app on your machine using a different `config.json` 
to prevent overwriting your live config properties  

`npm run build:electron` will build the app for release based on your system  

## Electron Main Process
ALL code that accesses the file system directly or opens remote sites
will be contained in the electron main process under `/app`  

## Electron Renderer Process
All UI code exists in this process under `/src`  
Use `ipcRenderer` actions to delegate any file system or remote logic to the main process  

## Branch Strategy
`master` - Currently released version  
`development` - Working branch for upcoming release

Tag `master` each release for historical reference
