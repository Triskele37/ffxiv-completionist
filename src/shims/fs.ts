import * as fs from 'fs';

export function existsSync(path) {
    return fs.existsSync(path);
}
