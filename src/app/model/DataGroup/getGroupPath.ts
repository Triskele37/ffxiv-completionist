import type { DataGroup } from './index';

export function getGroupPath(group: DataGroup): string[] {
    return group._parent ? [...getGroupPath(group._parent), group.name] : [group.name];
}
