import fs from 'fs';
import path from 'path';

import { Features } from '../../../common/Features';
import { getResourcesRoot } from '../util/getResourcesRoot';

export function getFeature<K extends keyof Features>(
    featureKey: K
): Features[K] | undefined {
    // SEC: Prevent anything that isn't lowercase or dash from touching fs
    if(featureKey.match(/[^a-z\-]/)) return;

    const resourceRoot = getResourcesRoot();
    const featurePath = path.join(
        path.normalize(resourceRoot),
        'features',
        `${featureKey}.json`
    );

    if(fs.existsSync(featurePath)) {
        return JSON.parse(fs.readFileSync(featurePath, 'utf8')) as Features[K];
    }
}
