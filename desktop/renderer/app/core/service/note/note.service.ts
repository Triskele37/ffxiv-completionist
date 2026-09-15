import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';

import type { DataGroup } from '@model/DataGroup';
import { createDummyGroup } from '@model/DataGroup/createDummyGroup';
import type { Task } from '@model/Task';
import { DataService } from '@service/data/data-service';
import { SaveStoreService } from '@service/store/save-store.service';

const NOTE_KEY = '_note';

type Notable = DataGroup | Task;

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
            // Remove 'game' step
            const path = k.replace(/^game./, '');

            // Add the notable to this group
            const notable = this.svcData.get.getChild(this.svcData.data, path);
            if(notable) {
                const note = this.getNote(notable);

                if(note) {
                    const task = notable.dataType === 'Group' ? this.createNoteTask(notable) : notable;
                    task._mixedType = notable.dataType;
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

    private createNoteTask(group: DataGroup) {
        return this.svcData.task.createTask({
            id: group._key,
            name: group.name,
            contentLink: group.contentLink,
        }, group._parent!);
    }

    getNote(notable: Notable | undefined): string | undefined {
        if(!notable) return;
        const notes = this.svcSave.get('notes');
        return notes[notable.fullStorageKey];
    }

    getNoteTask(notable: Notable | undefined): Task | undefined {
        if(!notable) return;

        for(const task of this.group.tasks) {
            if(task.fullStorageKey === notable.fullStorageKey) return task;
        }
    }

    editNote(notable: Notable | undefined, note: string | undefined): void {
        if(!notable) return;

        const task = this.getNoteTask(notable) ?? (
            notable.dataType === 'Group' ? this.createNoteTask(notable) : notable
        );
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
