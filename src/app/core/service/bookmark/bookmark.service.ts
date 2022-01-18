import { Injectable } from '@angular/core';

import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { ConfigStoreService } from '@service/store/config-store.service';
import { Completion } from '@constant';

/** Handles Group and Task bookmarks
 *
 * Tasks - Relies on keeping reference to the actual task thats bookmarked in data
 * */
@Injectable({
    providedIn: 'root'
})
export class BookmarkService {
    private group: DataGroup;

    constructor(
        private svcData: DataService,
        private svcConfig: ConfigStoreService
    ) {
    }

    initializeBookmarks(): void {
        this.group = DataGroup.fromJSON(this.svcData.data, './bookmarks');
        this.group.isBookmarkGroup = true;

        this.svcData.data.subGroups.unshift(this.group);

        this.initializeBookmarkTasks();
        this.initializeBookmarkGroups();
    }

    //#region------------------------------------------------------- Tasks
    private initializeBookmarkTasks(): void {
        this.svcConfig.get('bookmarked-tasks').forEach((fullStorageKey) => {
            // Calculate the path and id
            const path: string[] = fullStorageKey.split('.');
            const id: number = parseInt(path.pop(), 10);
            path.shift();

            // Add the task to this group
            const group: DataGroup = this.svcData.data.getChildGroupFromPath(path);
            const task: Task = group.getTaskById(id);
            this.group.tasks.push(task);
        });

        // Re-count totals if data changes
        this.svcData.data.onUpdated$.subscribe(() => this.evaluateCounts());
        this.evaluateCounts();
    }

    private evaluateCounts(): void {
        this.group.totalCompleted = 0;
        this.group.totalExcluded = 0;

        this.group.tasks.forEach((task) => {
            if(task.completionFlag === Completion.Y) this.group.totalCompleted++;
            if(task.completionFlag === Completion.X) this.group.totalExcluded++;
        });

        this.group.updated$.next();
    }

    // Returns whether the task is in the store
    isBookmarked(task: Task): boolean {
        const bookmarks = this.svcConfig.get('bookmarked-tasks');
        return bookmarks.includes(task.fullStorageKey);
    }

    // Returns whether the task is now in the store
    toggleBookmark(task: Task): boolean {
        const store = this.svcConfig.get('bookmarked-tasks');

        const addBookmark = !store.includes(task.fullStorageKey);
        if(addBookmark) this.addBookmark(store, task);
        else this.removeBookmark(store, task);

        this.evaluateCounts();
        this.svcConfig.set('bookmarked-tasks', store);

        return addBookmark;
    }

    private addBookmark(store, task: Task): void {
        // Sync store
        store.push(task.fullStorageKey);

        // Sync app data
        this.group.tasks.push(task);
    }

    private removeBookmark(store, task: Task): void {
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

    }

    //#endregion
}
