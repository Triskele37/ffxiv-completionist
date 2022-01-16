import { app } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

const paths = {
    config: path.join(app.getPath('userData'), 'config.json'),
    save: null
};

const store: Store = {

};

export { paths, store };

type Store = {
    config?;
    save?;
};

export function saveConfig() {
    fs.writeFileSync(paths.config, JSON.stringify(store.config, null, 4));
}
