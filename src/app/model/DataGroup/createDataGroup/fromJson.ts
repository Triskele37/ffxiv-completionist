import { loadJson } from '@data/loader';
import { JSONResource } from '@model/JSONResource';

import { DataGroup } from '../';
import { createDataGroup } from './';

export function fromJson(parent: DataGroup | null, key: string): DataGroup {
    const json = loadJson(key);
    return createDataGroup(json, parent);
}

export function fromMappedJson(
    parent: DataGroup,
    key: string,
    map: (json: JSONResource) => JSONResource,
) {
    const json = map(loadJson(key));
    return createDataGroup(json, parent);
}
