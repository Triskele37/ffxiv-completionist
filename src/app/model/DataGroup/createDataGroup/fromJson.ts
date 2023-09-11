import { loadJson } from '@data/loader';

import { DataGroup } from '../';
import { createDataGroup } from './';

export function fromJson(parent: DataGroup, path: string): DataGroup {
    const json = loadJson(path);
    return createDataGroup(json, parent);
}
