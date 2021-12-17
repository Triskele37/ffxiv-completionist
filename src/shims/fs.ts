import * as fs from 'fs';

let log = true;

export function existsSync(path) {
    if(log) {
        console.trace();
        log = false;
    }

    return fs.existsSync(path);
}

export function readFileSync(path, encoding) {
    return fs.readFileSync(path, encoding);
}
