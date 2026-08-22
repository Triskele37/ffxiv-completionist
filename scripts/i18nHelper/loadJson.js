import fs from 'fs';

export function loadJson(jsonPath) {
    return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
}
