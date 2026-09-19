import type { Task } from '@model/Task';

import type { NoteService } from '../note.service';

export function deleteNote(service: NoteService) {
    return (task: Task): void => {
        // Remove from save
        const storedNotes = service.svcSave.get('notes');
        delete storedNotes[task.fullStorageKey];
        service.svcSave.set('notes', storedNotes);

        // Delete note from task and remove from note group
        const index = service.group.tasks
            .findIndex((t) => t.fullStorageKey === task.fullStorageKey);
        delete service.group.tasks[index][service.NOTE_KEY];
        service.group.tasks.splice(index, 1);
    };
}
