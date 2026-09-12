import fs from 'fs';

export function loadJson(jsonPath: string) {
    return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
}
