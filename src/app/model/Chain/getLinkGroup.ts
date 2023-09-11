import { Globals } from '@constant/Global';
import { DataGroup } from '@model/DataGroup';
import { getChildGroup } from '@model/DataGroup/children/getChild';

import { Chainer } from './Chainer';
import { Links } from './ChainLink';

// Returns the group for a chain task
export function getLinkGroup(
    chainer: Chainer,
    linkedPath: Links,
    linkedId: string
): DataGroup {
    // Allow linkedPath to be passed as a dot string or already split array of path
    const path = Array.isArray(linkedPath) ? linkedPath.join('.') :
        (typeof linkedPath === 'number') ? linkedPath.toString() :
            linkedPath;

    const group = getChildGroup(Globals.allData, path);
    if(!group) console.error(`Invalid path:`, linkedPath, linkedId);
    return group;
}
