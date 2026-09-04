import { Injectable, signal, inject } from '@angular/core';

import { DataService } from '@service/data/data-service';
import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';
import { MainMenuService } from '@service/main-menu/main-menu.service';
import { ConfigStoreService } from '@service/store/config-store.service';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    private svcData = inject(DataService);
    private svcMainMenu = inject(MainMenuService);
    private svcConfig = inject(ConfigStoreService);

    breadcrumbs = signal<string[]>(['main-menu']);
    selectedGroup = signal<DataGroup | null>(null);
    selectedTask = signal<Task | null>(null);
    groupHistory = signal<DataGroup[]>([]);
    allTaskViewEnabled = signal(false);

    constructor() {
        // Load previous breadcrumb state
        const initialBreadcrumbs = this.svcConfig.get('last-breadcrumbs') as string[];
        if(initialBreadcrumbs) {
            this.svcData.whenLoaded$.subscribe(
                () => this.setBreadcrumbs(initialBreadcrumbs)
            );
        }
    }

    //#region------------------------------------------------ Selected
    setSelectedContent(content: DataGroup | Task): void {
        if(content.dataType === 'Group') {
            this.setSelectedGroup(content);
        }
        else {
            this.setSelectedTask(content);
        }
    }

    // All group setting should flow through this function
    setSelectedGroup(group: DataGroup): void {
        const breadcrumbs = group.fullStorageKey.split('.');

        this.addGroupHistory();
        this.breadcrumbs.set(breadcrumbs);
        this.selectedGroup.set(group);
        this.svcConfig.set('last-breadcrumbs', breadcrumbs);
    }

    setSelectedTask(task: Task): void {
        task.selected.set(true);
        this.selectedTask.set(task);
        this.setSelectedGroup(task._parent);
    }

    //#endregion

    //#region------------------------------------------------ Breadcrumbs
    getGroupFromBreadcrumbs(breadcrumbs: string[]): DataGroup | null {
        if(!breadcrumbs) return null;

        if(breadcrumbs.length === 1) {
            if(breadcrumbs[0] === this.svcMainMenu.data._key) return this.svcMainMenu.data;
            else return this.svcData.data;
        }

        const superGroup = { subGroups: new Map() } as DataGroup;
        superGroup.subGroups!.set(this.svcMainMenu.data._key, this.svcMainMenu.data);
        superGroup.subGroups!.set(this.svcData.data._key, this.svcData.data);

        const group = breadcrumbs.reduce(
            (acc, crumb) => acc.subGroups?.get(crumb) || acc,
            superGroup
        );

        if(group.dataType === 'Group') return group;
        else return this.svcMainMenu.data;
    }

    popCrumbsOnce(): void {
        const breadcrumbs = this.breadcrumbs();
        breadcrumbs.pop();

        this.setBreadcrumbs(breadcrumbs);
    }

    popCrumbsUntil(index: number): void {
        // Step backward through breadcrumbs, pop until index is hit
        const breadcrumbs = this.breadcrumbs();
        for(let i = breadcrumbs.length; i > -1; i--) {
            if(i - 1 === index) break;
            breadcrumbs.pop();
        }

        this.setBreadcrumbs(breadcrumbs);
    }

    // All breadcrumb setting should flow through this function
    setBreadcrumbs(breadcrumbs: string[]): void {
        this.addGroupHistory();
        this.breadcrumbs.set(breadcrumbs);
        const group = this.getGroupFromBreadcrumbs(breadcrumbs);
        this.selectedGroup.set(group);
        this.svcConfig.set('last-breadcrumbs', breadcrumbs);
    }

    //#endregion

    //#region------------------------------------------------ History
    addGroupHistory(): void {
        const selectedGroup = this.selectedGroup();

        if(!selectedGroup) return; // Must exist
        if(selectedGroup.isUiGroup) return; // Must not be Main Menu
        if(!selectedGroup.tasks?.length) return; // Must have tasks

        // Push a pretty history string
        const newHistory = [...this.groupHistory()];
        newHistory.unshift(selectedGroup);

        // Remove older duplicate (check index 0 because we just added it)
        const lastIndex = newHistory.lastIndexOf(selectedGroup);
        if(lastIndex > 0) newHistory.splice(lastIndex, 1);

        // Limit to 10 historical groups
        if(newHistory.length > 10) newHistory.pop();

        this.groupHistory.set(newHistory);
    }

    goToHistory(group: DataGroup): void {
        this.setBreadcrumbs(group.fullStorageKey.split('.'));
    }

    clearHistory(): void {
        this.groupHistory.set([]);
    }

    removeHistory(group: DataGroup): void {
        const newHistory = [...this.groupHistory()].filter((g) => g !== group);
        this.groupHistory.set(newHistory);
    }

    //#endregion
}
