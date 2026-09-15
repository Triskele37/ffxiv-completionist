import path from 'path';
import fs from 'fs';

import { Migration } from '../../../common/Migration';
import { getResourcesRoot } from '../util/getResourcesRoot';

export function getMigration(version: string): Migration | undefined {
    const resourceRoot = getResourcesRoot();
    const migrationFile = path.join(
        path.normalize(resourceRoot),
        'migrations',
        `${version}.json`
    );

    if(fs.existsSync(migrationFile)) {
        return JSON.parse(fs.readFileSync(migrationFile, 'utf8'));
    }
}
