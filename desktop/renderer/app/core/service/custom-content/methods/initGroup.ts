import { DataGroup } from '@model/DataGroup';
import { createDummyGroup } from '@model/DataGroup/createDummyGroup';

import type { CustomContentService } from '../custom-content.service';

export function initGroup(service: CustomContentService) {
    return (): DataGroup => {
        const group = service.svcData.loadGroupShallow(service.svcData.data, 'custom');

        if(group) {
            group.draggable = true;

            // Replace the placeholder for this group
            service.svcData.data.subGroups?.set(group._key, group);

            return group;
        }
        else {
            console.error('Failed to load Custom Content group');
            return createDummyGroup();
        }
    };
}
