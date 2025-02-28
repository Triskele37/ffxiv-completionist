import { loadJson, JSON } from '@data/loader';

import { DataGroup } from '../';
import { createDataGroup } from './';

export function fromJson(parent: DataGroup, key: string): DataGroup {
    const json = loadJson(key);
    return createDataGroup(json, parent);
}

export function fromMappedJson(
    parent: DataGroup,
    key: string,
    map: (json: JSON) => JSON,
) {
    const json = map(loadJson(key));
    return createDataGroup(json, parent);
}
