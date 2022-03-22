import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { MainMenuService } from '@service/main-menu/main-menu.service';
import { ConfigStoreService } from '@service/store/config-store.service';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    breadcrumbs$ = new BehaviorSubject<string[]>(['main-menu']);
    selectedGroup$ = new BehaviorSubject<DataGroup>(null);
    groupHistory$ = new BehaviorSubject<DataGroup[]>([]);

    // Holds the task to scroll to from a content link
    selectedTask: Task;

    constructor(
        private svcData: DataService,
        private svcMainMenu: MainMenuService,
        private svcConfig: ConfigStoreService
    ) {
        // Load previous breadcrumb state
        const initialBreadcrumbs = this.svcConfig.get('last-breadcrumbs') as string[];
        if(initialBreadcrumbs) {
            this.svcData.whenLoaded$.subscribe(
                () => this.setBreadcrumbs(initialBreadcrumbs)
            );
        }
    }

    //#region------------------------------------------------ Selected Group
    getGroupFromBreadcrumbs(breadcrumbs: string[]): DataGroup {
        if(!breadcrumbs) return null;

        if(breadcrumbs.length === 1) {
            if(breadcrumbs[0] === this.svcMainMenu.data._key) return this.svcMainMenu.data;
            else return this.svcData.data;
        }

        const group = breadcrumbs.reduce(
            (acc, crumb) => acc.subGroups.find((g) => g._key === crumb) || acc,
            { subGroups: [this.svcMainMenu.data, this.svcData.data] } as DataGroup
        );

        if(group instanceof DataGroup) return group;
        else return this.svcMainMenu.data;
    }

    addGroupHistory() {
        if(!this.selectedGroup$.value) return; // Must exist
        if(this.selectedGroup$.value.isUiGroup) return; // Must not be Main Menu
        if(!this.selectedGroup$.value.tasks?.length) return; // Must have tasks

        // Push a pretty history string
        const newHistory = [...this.groupHistory$.value];
        newHistory.unshift(this.selectedGroup$.value);

        // Remove older duplicate (check index 0 because we just added it)
        const lastIndex = newHistory.lastIndexOf(this.selectedGroup$.value);
        if(lastIndex > 0) newHistory.splice(lastIndex, 1);

        // Limit to 10 historical groups
        if(newHistory.length > 10) newHistory.pop();

        this.groupHistory$.next(newHistory);
    }

    // All group setting should flow through this function
    setSelectedGroup(group: DataGroup): void {
        const breadcrumbs = group.fullStorageKey.split('.');

        this.breadcrumbs$.next(breadcrumbs);
        this.selectedGroup$.next(group);
        this.addGroupHistory();
        this.svcConfig.set('last-breadcrumbs', breadcrumbs);
    }

    setSelectedTask(task: Task): void {
        this.selectedTask = task;
        this.selectedTask.selected = true;
        this.setSelectedGroup(task._parent);
    }

    //#endregion

    //#region------------------------------------------------ Breadcrumbs
    popCrumbsUntil(index: number): void {
        // Step backward through breadcrumbs, pop until index is hit
        const breadcrumbs = this.breadcrumbs$.value;
        for(let i = breadcrumbs.length; i > -1; i--) {
            if(i - 1 === index) break;
            breadcrumbs.pop();
        }

        this.setBreadcrumbs(breadcrumbs);
    }

    // All breadcrumb setting should flow through this function
    setBreadcrumbs(breadcrumbs: string[]): void {
        this.breadcrumbs$.next(breadcrumbs);
        const group = this.getGroupFromBreadcrumbs(breadcrumbs);
        this.selectedGroup$.next(group);
        this.addGroupHistory();
        this.svcConfig.set('last-breadcrumbs', breadcrumbs);
    }

    //#endregion
}
