import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';

import { DataService } from '@service/data/data-service';
import type { DataGroup } from '@model/DataGroup';
import { SaveStoreService } from '@service/store/save-store.service';

//#region ------------------------------------------------------- Methods
import { initService } from './methods/initService';
import { initBookmarks } from './methods/initBookmarks';
import { isBookmarked } from './methods/isBookmarked';
import { toggleBookmark } from './methods/toggleBookmark';

import { initBookmarkTasks } from './task/initBookmarkTasks';
import { toggleBookmarkTask } from './task/toggleBookmarkTask';
import { addBookmarkTask } from './task/addBookmarkTask';
import { removeBookmarkTask } from './task/removeBookmarkTask';

import { initBookmarkGroups } from './group/initBookmarkGroups';
import { toggleBookmarkGroup } from './group/toggleBookmarkGroup';
import { addBookmarkGroup } from './group/addBookmarkGroup';
import { removeBookmarkGroup } from './group/removeBookmarkGroup';

//#endregion

/**
 * Handles Group and Task bookmarks
 * Tasks - Relies on keeping reference to the actual task thats bookmarked in data
 * */
@Injectable({
    providedIn: 'root'
})
export class BookmarkService {
    svcData = inject(DataService);
    svcSave = inject(SaveStoreService);

    group: DataGroup;

    onGroupUpdated$ = new Subject<void>();

    constructor() {
        this.group = initService(this)();
    }

    get initBookmarks() { return initBookmarks(this); }
    get isBookmarked() { return isBookmarked(this); }
    get toggleBookmark() { return toggleBookmark(this); }

    //#region ------------------------------------------------------- Task
    get initBookmarkTasks() { return initBookmarkTasks(this); }
    get toggleBookmarkTask() { return toggleBookmarkTask(this); }
    get addBookmarkTask() { return addBookmarkTask(this); }
    get removeBookmarkTask() { return removeBookmarkTask(this); }

    //#endregion

    //#region------------------------------------------------------- Groups
    get initBookmarkGroups() { return initBookmarkGroups(this); }
    get toggleBookmarkGroup() { return toggleBookmarkGroup(this); }
    get addBookmarkGroup() { return addBookmarkGroup(this); }
    get removeBookmarkGroup() { return removeBookmarkGroup(this); }

    //#endregion
}
