import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';

import { DataService } from '@service/data/data-service';
import type { DataGroup } from '@model/DataGroup';
import { createDummyGroup } from '@model/DataGroup/createDummyGroup';
import type { Task } from '@model/Task';
import { SaveStoreService } from '@service/store/save-store.service';

const NOTE_KEY = '_note';

/**
 * Handles Task notes
 * */
@Injectable({
    providedIn: 'root'
})
export class NoteService {
    private svcData = inject(DataService);
    private svcSave = inject(SaveStoreService);

    group: DataGroup;

    onGroupUpdated$ = new Subject<void>();

    constructor() {
        const group = this.svcData.loader.loadGroupShallow(this.svcData.data, 'notes');

        if(group) {
            this.group = group;

            // Put this group in its placeholder
            this.svcData.data.subGroups?.set(this.group._key, this.group);

            // Keep task counts in sync when root data updates
            this.svcData.data.onUpdated$.subscribe(() => this.group.updated$.next());
        }
        else {
            console.error('Failed to load Notes group');
            this.group = createDummyGroup();
        }
    }

    initializeNotes(): void {
        const notes = this.svcSave.get('notes');

        for(const k in notes) {
            // Remove 'Overall' step
            const path = k.replace(/^overall./, '');

            // Add the task to this group
            const task = this.svcData.get.getTask(path);
            if(task) {
                const note = this.getNote(task);
                if(note) {
                    task[NOTE_KEY] = note;
                    this.group.tasks.push(task);
                }
                else {
                    console.error('Unable to find note for task:', path);
                }
            }
            else {
                console.error('Unable to find task for note:', path);
            }
        }
    }

    getNote(task: Task): string | undefined {
        const notes = this.svcSave.get('notes');
        return notes[task.fullStorageKey];
    }

    editNote(task: Task, note: string | undefined): void {
        if(task[NOTE_KEY] === note) return;

        if(note) this.saveNote(task, note);
        else this.deleteNote(task);

        this.onGroupUpdated$.next();
        this.group.tasks = [...this.group.tasks]
    }

    private saveNote(task: Task, note: string | undefined): void {
        const notes = this.svcSave.get('notes');
        notes[task.fullStorageKey] = note;
        this.svcSave.set('notes', notes);
        task[NOTE_KEY] = note;

        const index = this.group.tasks.findIndex((t) => t.fullStorageKey === task.fullStorageKey);
        if(index === -1) {
            this.group.tasks.push(task);
        }
    }

    private deleteNote(task: Task): void {
        const notes = this.svcSave.get('notes');
        delete notes[task.fullStorageKey];
        this.svcSave.set('notes', notes);

        const index = this.group.tasks.findIndex((t) => t.fullStorageKey === task.fullStorageKey);
        delete this.group.tasks[index][NOTE_KEY];
        this.group.tasks.splice(index, 1);
    }

}
