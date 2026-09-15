import type { NoteService } from '../note.service';
import type { Notable } from '../types';

export function editNote(service: NoteService) {
    return (notable: Notable | undefined, note: string | undefined): void => {
        if(!notable) return;

        // Get existing task, create a new one from group, or use the new task
        const task = service.getNoteTask(notable)
            ?? (notable.dataType === 'Group' ? service.createNoteTask(notable) : notable);

        // Dip if the note didn't change
        if(task[service.NOTE_KEY] === note) return;

        // Save/Delete branch
        if(note) service.saveNote(task, note);
        else service.deleteNote(task);

        // Trigger Updates
        service.onGroupUpdated$.next();
        service.group.tasks = [...service.group.tasks]
    };
}
