import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Completion } from '@constant';
import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { SaveStoreService } from '@service/store/save-store.service';

/** Handles Group and Task bookmarks
 *
 * Tasks - Relies on keeping reference to the actual task thats bookmarked in data
 * */
@Injectable({
    providedIn: 'root'
})
export class BookmarkService {
    group: DataGroup;

    onGroupUpdated$ = new Subject<void>();

    constructor(
        private svcData: DataService,
        private svcSave: SaveStoreService
    ) {
    }

    initializeBookmarks(): void {
        this.group = DataGroup.fromJSON(this.svcData.data, './bookmarks');
        this.group.isBookmarkGroup = true;
        this.group.subGroups = new Map();

        // Put this group in its placeholder
        this.svcData.data.subGroups.set(this.group._key, this.group);

        this.initializeBookmarkTasks();
        this.initializeBookmarkGroups();
    }

    // Returns whether something is in the store
    isBookmarked(item: DataGroup | Task): boolean {
        const configKey = (item instanceof DataGroup) ? 'bookmarked-groups' : 'bookmarked-tasks';
        const bookmarks = this.svcSave.get(configKey);
        return bookmarks.includes(item.fullStorageKey);
    }

    // Returns whether the item is now in the store
    toggleBookmark(item: DataGroup | Task): boolean {
        if(item instanceof DataGroup) {
            return this.toggleBookmarkGroup(item);
        }
        else {
            return this.toggleBookmarkTask(item);
        }
    }

    //#region------------------------------------------------------- Tasks
    private initializeBookmarkTasks(): void {
        this.svcSave.get('bookmarked-tasks').forEach((fullStorageKey) => {
            // Remove 'Overall' step
            const path = fullStorageKey.replace(/^overall./, '');

            // Add the task to this group
            const task: Task = this.svcData.data.getChildTask(path);
            this.group.tasks.push(task);
        });

        // Re-count totals if data changes
        this.svcData.data.onUpdated$.subscribe(() => this.evaluateTaskCounts());
        this.evaluateTaskCounts();
    }

    private evaluateTaskCounts(): void {
        this.group.totalCompleted = 0;
        this.group.totalExcluded = 0;

        this.group.tasks.forEach((task) => {
            if(task.isNumericCompletion) {
                // Only increase excluded/completed by potential completion
                if(task.completionFlag === Completion.X) {
                    const potential = task.maxValue - task.minValue;
                    this.group.totalExcluded += potential;
                }
                else {
                    const completed = parseInt(task.completionFlag, 10) - task.minValue;
                    this.group.totalCompleted += completed > 0 ? completed : 0;
                }
            }
            else {
                if(task.completionFlag === Completion.Y) this.group.totalCompleted++;
                if(task.completionFlag === Completion.X) this.group.totalExcluded++;
            }
        });

        this.group.updated$.next();
    }

    // Returns whether the task is now in the store
    private toggleBookmarkTask(task: Task): boolean {
        const store = this.svcSave.get('bookmarked-tasks');

        const addBookmark = !store.includes(task.fullStorageKey);
        if(addBookmark) this.addBookmarkTask(store, task);
        else this.removeBookmarkTask(store, task);

        this.evaluateTaskCounts();
        this.svcSave.set('bookmarked-tasks', store);

        return addBookmark;
    }

    private addBookmarkTask(store, task: Task): void {
        // Sync store
        store.push(task.fullStorageKey);

        // Sync app data
        this.group.tasks.push(task);
    }

    private removeBookmarkTask(store, task: Task): void {
        // Sync store
        store.splice(store.indexOf(task.fullStorageKey), 1);

        // Sync app data
        const appIndex = this.group.tasks.findIndex(
            (t) => t.fullStorageKey === task.fullStorageKey
        );
        this.group.tasks.splice(appIndex, 1);
        this.group.tasks = [...this.group.tasks];
    }

    //#endregion

    //#region------------------------------------------------------- Groups
    private initializeBookmarkGroups(): void {
        this.svcSave.get('bookmarked-groups').forEach((fullStorageKey) => {
            const path = fullStorageKey.replace(/^overall./, '');

            // Add the bookmarked group to this group
            const group: DataGroup = this.svcData.data.getChildGroup(path);
            if(group) {
                this.group.subGroups.set(group._key, group);
            }
        });
    }

    // Returns whether the group is now in the store
    private toggleBookmarkGroup(group: DataGroup): boolean {
        const store = this.svcSave.get('bookmarked-groups');

        const addBookmark = !store.includes(group.fullStorageKey);
        if(addBookmark) this.addBookmarkGroup(store, group);
        else this.removeBookmarkGroup(store, group);

        this.svcSave.set('bookmarked-groups', store);
        this.onGroupUpdated$.next();

        return addBookmark;
    }

    private addBookmarkGroup(store, group: DataGroup): void {
        // Sync store
        store.push(group.fullStorageKey);

        // Sync app data
        this.group.subGroups.set(group._key, group);
    }

    private removeBookmarkGroup(store, group: DataGroup): void {
        // Sync store
        store.splice(store.indexOf(group.fullStorageKey), 1);

        // Sync app data
        this.group.subGroups.delete(group._key);
        this.group.subGroups = new Map(this.group.subGroups);
    }

    //#endregion
}
