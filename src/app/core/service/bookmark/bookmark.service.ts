import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { DataService } from '@data';
import { DataGroup } from '@model/DataGroup';
import { fromJson } from '@model/DataGroup/createDataGroup/fromJson';
import { getChildGroup, getChildTask } from '@model/DataGroup/children/getChild';
import { Task } from '@model/Task';
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
        this.group = fromJson(this.svcData.data, './bookmarks');
        this.group.isBookmarkGroup = true;
        this.group.subGroups = new Map();

        // Put this group in its placeholder
        this.svcData.data.subGroups.set(this.group._key, this.group);

        // Keep task counts in sync when root data updates
        this.svcData.data.onUpdated$.subscribe(() => this.group.updated$.next());
    }

    initializeBookmarks(): void {
        this.initializeBookmarkTasks();
        this.initializeBookmarkGroups();
    }

    // Returns whether something is in the store
    isBookmarked(item: DataGroup | Task): boolean {
        if(item.xivDataType === 'Group') {
            const bookmarks = this.svcSave.get('bookmarked-groups');
            return bookmarks.includes(item.fullStorageKey);
        }
        else {
            const bookmarks = this.svcSave.get('bookmarked-tasks');
            return bookmarks.includes(item.fullStorageKey);
        }
    }

    // Returns whether the item is now in the store
    toggleBookmark(item: DataGroup | Task): boolean {
        if(item.xivDataType === 'Group') {
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
            const task: Task = getChildTask(this.svcData.data, path);
            if(task) this.group.tasks.push(task);
            else {
                console.error('Unable to find bookmarked task:', path);
            }
        });
    }

    // Returns whether the task is now in the store
    private toggleBookmarkTask(task: Task): boolean {
        const store = this.svcSave.get('bookmarked-tasks');

        const addBookmark = !store.includes(task.fullStorageKey);
        if(addBookmark) this.addBookmarkTask(store, task);
        else this.removeBookmarkTask(store, task);

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
            const group: DataGroup = getChildGroup(this.svcData.data, path);
            if(group?.fullStorageKey === fullStorageKey) {
                this.group.subGroups.set(group._key, group);
            }
            else {
                console.error('Unable to find bookmarked group:', path);
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
