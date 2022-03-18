import { app, dialog, IpcMainEvent, shell } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import { playerStore } from './player';

export const configStore = {
    path: path.join(app.getPath('userData'), 'config.json'),
    store: null,
    save: () => {
        fs.writeFileSync(
            configStore.path,
            JSON.stringify(configStore.store, null, 4)
        );
    },
    load: () => {
        // Default config structure
        configStore.store = {
            'store-name': 'completion',
            'store-loc': app.getPath('userData'),
            'lang': 'en',
            'starting-class': '',
            'last-breadcrumbs': ['main-menu'],
            'chaining-enabled': false,
            'chain-history-limit': 10,
            'chain-min-threshold': 10,
            'table-filters': {
                completed: true,
                incomplete: true,
                excluded: true
            },
            'window': {
                x: 100,
                y: 100,
                width: 800,
                height: 600,
                max: false
            },
            'theme': {
                'primary-color': '#0f4c75',
                'primary-text': '#121212',
                'font-family': 'sans-serif'
            }
        };

        // Get if it exists
        let config = {};
        if(fs.existsSync(configStore.path)) {
            config = JSON.parse(fs.readFileSync(configStore.path, 'utf8'));
        }

        // Overwrite with defined properties matching default keys
        Object.keys(configStore.store).forEach((key) => {
            if(config[key] === undefined) return;
            let overwriteDefault = true;

            if(Array.isArray(config[key])) {
                overwriteDefault = config[key].length > 0;
            }

            if(overwriteDefault) configStore.store[key] = config[key];
        });
    },
    get: (event: IpcMainEvent) => {
        configStore.load();
        event.returnValue = configStore.store;
    },
    set: (event, config) => {
        configStore.store = config;
        configStore.save();

        event.returnValue = null;
    },
    open: (event: IpcMainEvent) => {
        shell.openPath(app.getPath('userData'));
        event.returnValue = null;
    },
    backup: (event: IpcMainEvent) => {
        const fileName = `config-${playerStore.store.version}-backup.json`;
        const result = dialog.showSaveDialogSync({
            defaultPath: path.join(app.getPath('userData'), fileName),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });

        if(result) {
            fs.writeFileSync(
                result,
                JSON.stringify(configStore.store, null, 4)
            );
        }

        event.returnValue = null;
    },
    loadBackup: (event: IpcMainEvent) => {
        const result = dialog.showOpenDialogSync(null, {
            defaultPath: app.getPath('userData'),
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });

        // Do stuff only if something was selected
        if(result?.[0]) {
            const originalPath = configStore.path;
            configStore.path = result[0];
            configStore.load();
            configStore.path = originalPath;
            configStore.save();

            event.returnValue = true;
        }
        else {
            event.returnValue = false;
        }
    }
};
