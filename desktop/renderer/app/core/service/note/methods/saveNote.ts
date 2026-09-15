import type { Task } from '@model/Task';

import type { NoteService } from '../note.service';

export function saveNote(service: NoteService) {
    return (task: Task, note: string | undefined): void => {
        // Add to save
        const storedNotes = service.svcSave.get('notes');
        storedNotes[task.fullStorageKey] = note;
        service.svcSave.set('notes', storedNotes);

        // Add to task
        task[service.NOTE_KEY] = note;

        // Add to group
        const index = service.group.tasks.findIndex((t) => t.fullStorageKey === task.fullStorageKey);
        if(index === -1) service.group.tasks.push(task);
    };
}
