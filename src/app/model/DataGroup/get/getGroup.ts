import { Globals } from '@constant/Global';
import { DataGroup } from '@model/DataGroup';
import { getChild, ignoreGetMiss } from '@model/util/getChild';

/**
 * Overload for `getChild` to type assert `DataGroup`
 * */
export function getChildGroup(
    sourceGroup: DataGroup | null | undefined,
    path: string
): DataGroup {
    const group = getChild(sourceGroup, path) as DataGroup;

    if(!group && !ignoreGetMiss(path)) {
        console.error(`Invalid group path "${path}" from source "${sourceGroup?.fullStorageKey}"`);
    }

    return group;
}

/**
 * Helper for `getChildGroup` when lookup is from root
 * */
export function getGroup(path: string): DataGroup | undefined {
    if(!Globals.allData) {
        console.error('Error: Data not initialized');
        return;
    }

    return getChild(Globals.allData, path) as DataGroup;
}
