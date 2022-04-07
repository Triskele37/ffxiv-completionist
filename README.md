# FFXIV Completionist

## Documentation
[Development Setup](_documentation/Development.md)
[Localization](_documentation/Localization%20Notes.md)

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
