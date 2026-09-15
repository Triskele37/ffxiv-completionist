import { DataGroup } from '@model/DataGroup';
import { createDummyGroup } from '@model/DataGroup/createDummyGroup';

import type { NoteService } from '../note.service';

export function initGroup(service: NoteService) {
    return (): DataGroup => {
        const group = service.svcData.loadGroupShallow(service.svcData.data, 'notes');

        if(group) {
            // Put this group in its placeholder
            service.svcData.data.subGroups?.set(group._key, group);

            // Keep task counts in sync when root data updates
            service.svcData.data.onUpdated$.subscribe(() => group.updated$.next());

            return group;
        }
        else {
            console.error('Failed to load Notes group');
            return createDummyGroup();
        }
    };
}
