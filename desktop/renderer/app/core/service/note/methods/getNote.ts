import type { NoteService } from '../note.service';
import type { Notable } from '../types';

export function getNote(service: NoteService) {
    /**
     * Retrieve saved note string
     * */
    return (notable: Notable | undefined): string | undefined => {
        if(!notable) return;
        return service.svcSave.get('notes')[notable.fullStorageKey];
    };
}
