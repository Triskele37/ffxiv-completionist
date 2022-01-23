import { app, IpcMainEvent } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

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
            'last-breadcrumbs': ['FFXIV Completionist'],
            'chaining-enabled': false,
            'chain-history-limit': 10,
            'chain-min-threshold': 10,
            'table-filters': {
                completed: true,
                incomplete: true,
                excluded: true
            },
            'bookmarked-groups': [],
            'bookmarked-tasks': [],
            'window': {
                x: 100,
                y: 100,
                width: 800,
                height: 600,
                max: false
            }
        };

        // Get if it exists
        let config = {};
        if(fs.existsSync(configStore.path)) {
            config = JSON.parse(fs.readFileSync(configStore.path, 'utf8'));
        }

        // Overwrite with defined properties matching default keys
        Object.keys(configStore.store).forEach((key) => {
            if(config[key] !== undefined) configStore.store[key] = config[key];
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
    }
};
