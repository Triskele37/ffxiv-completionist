import type { DataGroup } from '@model/DataGroup';

import type { NoteService } from '../note.service';

export function createNoteTask(service: NoteService) {
    return (group: DataGroup) => {
        return service.svcData.createTask({
            id: group._key,
            name: group.name,
            contentLink: group.contentLink,
        }, group._parent!);
    };
}
