import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { UIGroup } from '@domain/UIGroup';
import { ConfigStoreService } from '@service/store/config-store.service';
import { MainMenu } from '../../../view/main-menu';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    breadcrumbs$ = new BehaviorSubject<string[]>(['Overall']);
    selectedGroup$ = new BehaviorSubject<DataGroup | UIGroup>(null);
    groupHistory$ = new BehaviorSubject<string[]>([]);

    constructor(
        private svcData: DataService,
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
    getGroupFromBreadcrumbs(breadcrumbs: string[]): DataGroup | UIGroup {
        if(!breadcrumbs) return null;

        if(breadcrumbs.length === 1) {
            if(breadcrumbs[0] === 'FFXIV Completionist') return MainMenu;
            else return this.svcData.data;
        }

        return breadcrumbs.reduce(
            (acc, crumb) => acc.subGroups.find((g) => g.name === crumb) || acc,
            { subGroups: [MainMenu, this.svcData.data] } as DataGroup
        );
    }

    addGroupHistory() {
        if(!this.selectedGroup$.value) return; // Must exist
        if(this.selectedGroup$.value instanceof UIGroup) return; // Must be DataGroup
        if(!this.selectedGroup$.value.tasks.length) return; // Must have tasks

        // Push a pretty history string
        const path = this.selectedGroup$.value.groupPath.join(' > ');
        const newHistory = this.groupHistory$.value;
        newHistory.unshift(path);

        // Remove older duplicate (check index 0 because we just added it)
        const lastIndex = this.groupHistory$.value.lastIndexOf(path);
        if(lastIndex !== 0) newHistory.splice(lastIndex, 1);

        // Limit to 10 historical groups
        if(newHistory.length > 10) newHistory.pop();

        this.groupHistory$.next(newHistory);
    }

    // All group setting should flow through this function
    setSelectedGroup(group: DataGroup | UIGroup): void {
        this.breadcrumbs$.next(group.groupPath);
        this.selectedGroup$.next(group);
        this.addGroupHistory();
        this.svcConfig.set('last-breadcrumbs', this.breadcrumbs$.value);
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
        this.selectedGroup$.next(this.getGroupFromBreadcrumbs(breadcrumbs));
        this.addGroupHistory();
        this.svcConfig.set('last-breadcrumbs', this.breadcrumbs$.value);
    }

    //#endregion
}
