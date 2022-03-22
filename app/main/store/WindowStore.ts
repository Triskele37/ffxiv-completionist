import { BrowserWindow, IpcMainEvent, screen } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';

import { ConfigStore } from './ConfigStore';

export class WindowStore {
    private static isServe: boolean;
    private static maxOnShow: boolean;
    static splash: BrowserWindow;
    static main: BrowserWindow;

    static create(isServe: boolean): void {
        WindowStore.isServe = isServe;

        WindowStore.loadSplashWindow();
        WindowStore.loadMainWindow(isServe);
        WindowStore.initEvents();
    }

    static initEvents(): void {
        // Capture window state before close
        WindowStore.main.on('close', () => {
            WindowStore.saveWindowState();
        });

        // Emitted when the window is closed
        WindowStore.main.on('closed', () => {
            // Dereference the window object, usually you would store window
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            WindowStore.main = null;
        });
    }

    static showMainWindow(event: IpcMainEvent): void {
        if(WindowStore.isServe) {
            WindowStore.main.webContents.openDevTools();
        }

        WindowStore.splash.destroy();
        WindowStore.main.show();

        if(WindowStore.maxOnShow) WindowStore.main.maximize();

        event.returnValue = null;
    }

    //#region------------------------------------------------------- Splash Window
    static loadSplashWindow(): void {
        WindowStore.splash = new BrowserWindow({
            width: 200,
            height: 200,
            transparent: true,
            frame: false,
            // alwaysOnTop: true,
            center: true
        });

        // WindowStore.splash.webContents.openDevTools();
        WindowStore.splash.loadURL(`file://${__dirname}/../../splash.html`);
    }

    //#endregion

    //#region------------------------------------------------------- Main Window
    static loadMainWindow(isServe: boolean): void {
        const oldState = WindowStore.loadWindowState();

        WindowStore.main = new BrowserWindow({
            ...oldState,
            autoHideMenuBar: true,
            backgroundColor: '#1e1e1e',
            show: false,
            webPreferences: {
                nodeIntegration: true,
                // true if you want to run e2e test with Spectron or use remote module in renderer context (ie. Angular)
                enableRemoteModule: true,
                // Necessary for ElectronService to function
                contextIsolation: false,
            },
        });

        WindowStore.maxOnShow = !!oldState.max;
        WindowStore.loadWindowUrl(isServe);
    }

    static loadWindowUrl(isServe: boolean): void {
        if(isServe) {
            require('electron-reload')(__dirname, {
                electron: require(path.join(__dirname, '../../../node_modules/electron'))
            });
            WindowStore.main.loadURL('http://localhost:4200');
        }
        else {
            // Path when running electron executable
            let pathIndex = './index.html';

            if(fs.existsSync(path.join(__dirname, '../../../dist/index.html'))) {
                // Path when running electron in local folder
                pathIndex = '../../../dist/index.html';
            }

            if(fs.existsSync(path.join(__dirname, '../../../app/index.html'))) {
                // Path when running release
                pathIndex = '../../../app/index.html';
            }

            WindowStore.main.loadURL(url.format({
                pathname: path.join(__dirname, pathIndex),
                protocol: 'file:',
                slashes: true
            }));
        }
    }

    //#endregion

    //#region------------------------------------------------------- State
    static loadWindowState() {
        if(!ConfigStore.store) ConfigStore.load();

        if(!ConfigStore.store.window) {
            const primaryDisplay = screen.getPrimaryDisplay();

            return {
                x: primaryDisplay.bounds.x,
                y: primaryDisplay.bounds.y,
                height: primaryDisplay.workAreaSize.height,
                width: primaryDisplay.workAreaSize.width
            };
        }
        else {
            return ConfigStore.store.window;
        }
    }

    static saveWindowState(): void {
        ConfigStore.store.window = {
            ...WindowStore.main.getBounds(),
            max: WindowStore.main.isMaximized()
        };

        ConfigStore.save();
    }

    //#endregion

}
