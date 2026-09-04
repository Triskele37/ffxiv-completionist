import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';

import { DataService } from '@service/data/data-service';
import type { DataGroup } from '@model/DataGroup';
import { createDummyGroup } from '@model/DataGroup/createDummyGroup';
import type { Task } from '@model/Task';
import { SaveStoreService } from '@service/store/save-store.service';

/** Handles Group and Task bookmarks
 *
 * Tasks - Relies on keeping reference to the actual task thats bookmarked in data
 * */
@Injectable({
    providedIn: 'root'
})
export class BookmarkService {
    private svcData = inject(DataService);
    private svcSave = inject(SaveStoreService);

    group: DataGroup;

    onGroupUpdated$ = new Subject<void>();

    constructor() {
        const group = this.svcData.loader.loadGroupShallow(this.svcData.data, 'bookmarks');

        if(group) {
            this.group = group;
            this.group.isBookmarkGroup = true;
            this.group.subGroups = new Map();

            // Put this group in its placeholder
            this.svcData.data.subGroups?.set(this.group._key, this.group);

            // Keep task counts in sync when root data updates
            this.svcData.data.onUpdated$.subscribe(() => this.group.updated$.next());
        }
        else {
            console.error('Failed to load Bookmarks group');
            this.group = createDummyGroup();
        }
    }

    initializeBookmarks(): void {
        this.initializeBookmarkTasks();
        this.initializeBookmarkGroups();
    }

    // Returns whether something is in the store
    isBookmarked(item: DataGroup | Task): boolean {
        if(item.dataType === 'Group') {
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
        if(item.dataType === 'Group') {
            return this.toggleBookmarkGroup(item);
        }
        else {
            return this.toggleBookmarkTask(item);
        }
    }

    //#region------------------------------------------------------- Tasks
    private initializeBookmarkTasks(): void {
        this.svcSave.get('bookmarked-tasks').forEach((fullStorageKey: string) => {
            // Remove 'Overall' step
            const path = fullStorageKey.replace(/^overall./, '');

            // Add the task to this group
            const task = this.svcData.get.getTask(path);
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

    private addBookmarkTask(store: string[], task: Task): void {
        // Sync store
        store.push(task.fullStorageKey);

        // Sync app data
        this.group.tasks.push(task);
    }

    private removeBookmarkTask(store: string[], task: Task): void {
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
        this.svcSave.get('bookmarked-groups').forEach((fullStorageKey: string) => {
            const path = fullStorageKey.replace(/^overall./, '');

            // Add the bookmarked group to this group
            const group = this.svcData.get.getGroup(path);
            if(group?.fullStorageKey === fullStorageKey) {
                this.group.subGroups?.set(group.fullStorageKey, group);
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

    private addBookmarkGroup(store: string[], group: DataGroup): void {
        // Sync store
        store.push(group.fullStorageKey);

        // Sync app data
        this.group.subGroups?.set(group.fullStorageKey, group);
    }

    private removeBookmarkGroup(store: string[], group: DataGroup): void {
        // Sync store
        store.splice(store.indexOf(group.fullStorageKey), 1);

        // Sync app data
        this.group.subGroups?.delete(group.fullStorageKey);
        this.group.subGroups = new Map(this.group.subGroups);
    }

    //#endregion
}
