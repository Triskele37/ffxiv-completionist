import type { NoteService } from '../note.service';

export function initNotes(service: NoteService) {
    return (): void => {
        const notes = service.svcSave.get('notes');

        for(const k in notes) {
            // Remove 'game' step
            const path = k.replace(/^game./, '');

            // Get the data instance of the noted content
            const notable = service.svcData.getChild(service.svcData.data, path);

            if(!notable) {
                console.error('Unable to find task for note:', path);
                continue;
            }

            // Get the saved note value
            const note = service.getNote(notable);

            if(!note) {
                console.error('Unable to find note for task:', path);
                continue;
            }

            // Create task in place of group or use given task
            const task = notable.dataType === 'Group' ? service.createNoteTask(notable) : notable;

            // Setting allows mixed type links in the column
            task._mixedType = notable.dataType;

            // Add note to task
            task[service.NOTE_KEY] = note;

            // Add task to note group
            service.group.tasks.push(task);
        }
    };
}
