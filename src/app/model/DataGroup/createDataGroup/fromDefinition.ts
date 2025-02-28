import { GroupDefinition } from '@model/Definition';

import { DataGroup } from '../';
import { fromJson } from './fromJson';

export function fromDefinition(parent: DataGroup, definition: GroupDefinition): DataGroup {
    if(definition.subGroups) {
        if(Array.isArray(definition.subGroups)) {
            const group = fromJson(parent, `${definition.path}`);
            group.subGroups = new Map();

            definition.subGroups.forEach((subGroupDef) => {
                let subGroup;

                if(typeof subGroupDef === 'string') {
                    subGroup = fromJson(group, `${definition.path}.${subGroupDef}`);
                }
                else {
                    subGroupDef.path = `${definition.path}.${subGroupDef.path}`;
                    subGroup = fromDefinition(group, subGroupDef);
                }

                group.subGroups.set(subGroup._key, subGroup);
            });

            return group;
        }
        else {
            return definition.subGroups(parent, definition.path);
        }
    }
    else {
        return fromJson(parent, definition.path);
    }
}
