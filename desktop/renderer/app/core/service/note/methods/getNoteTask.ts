import type { Task } from '@model/Task';

import type { NoteService } from '../note.service';
import type { Notable } from '../types';

export function getNoteTask(service: NoteService) {
    return (notable: Notable | undefined): Task | undefined => {
        if(!notable) return;

        for(const task of service.group.tasks) {
            if(task.fullStorageKey === notable.fullStorageKey) return task;
        }
    };
}
