# FFXIV Completionist

## License
The "source code" in this repository and "source code" conveyed and/or propagated 
from it are subject to the following license

> FFXIV Completionist is an application for tracking progress in Final Fantasy XIV  
> Copyright (C) 2022  Triskele37
> 
> This program is free software: you can redistribute it and/or modify
> it under the terms of the GNU General Public License as published by
> the Free Software Foundation, either version 3 of the License, or
> (at your option) any later version.
> 
> This program is distributed in the hope that it will be useful,
> but WITHOUT ANY WARRANTY; without even the implied warranty of
> MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
> GNU General Public License for more details.
> 
> You should have received a copy of the GNU General Public License
> along with this program.  If not, see <http://www.gnu.org/licenses/>.

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
`development` - Working branch for upcoming release

Tag `master` each release for historical reference

## Commands
`npm run start` - Main development command
* Combines other commands to serve the electron app in dev mode

`npm run electron:build` - Windows build
* Must be run as admin on win 11

`npm run electron:build-linux` - Linux build  

`npm run electron:build-mac` - Mac build  
