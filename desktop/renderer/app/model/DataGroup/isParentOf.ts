import { DataGroup } from '@model/DataGroup/index';

export function isParentOf(
    parent: DataGroup | null,
    child: DataGroup | null,
): boolean {
    if(!parent || !child) return false;
    return child.fullStorageKey.startsWith(parent.fullStorageKey);
}
