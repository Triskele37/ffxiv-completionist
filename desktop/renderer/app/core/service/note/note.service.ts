import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';

import type { DataGroup } from '@model/DataGroup';
import { DataService } from '@service/data/data-service';
import { SaveStoreService } from '@service/store/save-store.service';

//#region ------------------------------------------------------- Methods
import { initGroup } from './methods/initGroup';
import { initNotes } from './methods/initNotes';
import { createNoteTask } from './methods/createNoteTask';
import { getNote } from './methods/getNote';
import { getNoteTask } from './methods/getNoteTask';
import { editNote } from './methods/editNote';
import { saveNote } from './methods/saveNote';
import { deleteNote } from './methods/deleteNote';

//#endregion

/**
 * Handles Task notes
 * */
@Injectable({
    providedIn: 'root'
})
export class NoteService {
    svcData = inject(DataService);
    svcSave = inject(SaveStoreService);

    NOTE_KEY = '_note'

    group: DataGroup;

    onGroupUpdated$ = new Subject<void>();

    constructor() {
        this.group = initGroup(this)();
    }

    get initNotes() { return initNotes(this); }
    get createNoteTask() { return createNoteTask(this); }
    get getNote() { return getNote(this); }
    get getNoteTask() { return getNoteTask(this); }
    get editNote() { return editNote(this); }
    get saveNote() { return saveNote(this); }
    get deleteNote() { return deleteNote(this); }
}
