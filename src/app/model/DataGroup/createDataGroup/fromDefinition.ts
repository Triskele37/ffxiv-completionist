import { DataGroup } from '../';
import { fromJson } from './fromJson';

export function fromDefinition(parent: DataGroup, groupKey: string): DataGroup | undefined {
    if(['..', '/', '\\'].some((restrict) => groupKey.includes(restrict))) {
        return undefined;
    }

    const group = fromJson(parent, groupKey);
    group.order?.forEach((subGroupKey) => {
        const subGroup = fromDefinition(group, `${groupKey}.${subGroupKey}`);

        if(!subGroup) {
            console.error('Error: could not generate subGroup', subGroupKey, group);
            return;
        }

        if(!group.subGroups) group.subGroups = new Map();

        group.subGroups.set(subGroup._key, subGroup);
    });

    return group;
}
