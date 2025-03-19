import { DataGroup } from '../';
import { fromJson } from './fromJson';

export function fromDefinition(parent: DataGroup, groupKey: string): DataGroup {
    if(['..', '/', '\\'].some((restrict) => groupKey.includes(restrict))) {
        return undefined;
    }

    const group = fromJson(parent, groupKey);

    if(group.order) {
        group.subGroups = new Map();
        group.order.forEach((subGroupKey) => {
            const subGroup = fromDefinition(group, `${groupKey}.${subGroupKey}`);
            if(!subGroup) console.log(subGroupKey, group);
            group.subGroups.set(subGroup._key, subGroup);
        });
    }

    return group;
}
