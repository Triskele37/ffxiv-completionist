import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { data } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { StoreService } from '../store/store.service';
import { MainMenu } from '../../../view/main-menu';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    selectedGroup$ = new BehaviorSubject<DataGroup>(null);
    breadcrumbs$ = new BehaviorSubject<string[]>(['Overall']);

    constructor(private svcStore: StoreService) {
        // Load previous breadcrumb state
        const initialBreadcrumbs = this.svcStore.eStore.get('last-breadcrumbs') as string[];
        if(!!initialBreadcrumbs) this.setBreadcrumbs(initialBreadcrumbs);
    }

    getGroupFromBreadcrumbs(breadcrumbs: string[]): DataGroup | null {
        if(!breadcrumbs) return null;

        if(breadcrumbs.length === 1) {
            if(breadcrumbs[0] === 'FFXIV Completionist') return MainMenu;
            else return data;
        }

        let navGroup: DataGroup = {
            subGroups: [MainMenu, ...data.subGroups]
        } as DataGroup;

        for(let i = 1; i < breadcrumbs.length && navGroup; i++) {
            navGroup = this.diveForGroup(navGroup, breadcrumbs[i]);
        }

        return navGroup;
    }

    diveForGroup(group: DataGroup, targetName: string): DataGroup | null {
        for(const subGroup of group.subGroups) {
            if(subGroup.name === targetName) return subGroup;
        }

        return null;
    }

    //#region------------------------------------------------ Selected Group
    setSelectedGroup(group: DataGroup): void {
        this.selectedGroup$.next(group);
    }

    //#endregion

    //#region------------------------------------------------ Breadcrumbs
    pushCrumb(crumb: string): void {
        const newBreadcrumbs = [...this.breadcrumbs$.value, crumb];
        this.breadcrumbs$.next(newBreadcrumbs);
        this.svcStore.eStore.set('last-breadcrumbs', newBreadcrumbs);

        // also set the selected group to match
        const selectedGroup = this.selectedGroup$.value;
        for(const subGroup of selectedGroup.subGroups) {
            if(subGroup.name === crumb) {
                this.selectedGroup$.next(subGroup);
                break;
            }
        }
    }

    popCrumbsUntil(index: number): void {
        // Step backward through breadcrumbs, pop until index is hit
        const breadcrumbs = this.breadcrumbs$.value;
        for(let i = breadcrumbs.length; i > -1; i--) {
            if(i - 1 === index) break;
            breadcrumbs.pop();
        }

        this.breadcrumbs$.next(breadcrumbs);
        this.selectedGroup$.next(this.getGroupFromBreadcrumbs(breadcrumbs));
        this.svcStore.eStore.set('last-breadcrumbs', breadcrumbs);
    }

    setCrumbAt(degree: number, groupName: string): void {
        const breadcrumbs = [];
        for(let i = 0; i < degree; i++) {
            breadcrumbs.push(this.breadcrumbs$.value[i]);
        }

        this.breadcrumbs$.next([...breadcrumbs, groupName]);
        this.svcStore.eStore.set('last-breadcrumbs', breadcrumbs);
    }

    setBreadcrumbs(breadcrumbs: string[]): void {
        this.breadcrumbs$.next(breadcrumbs);
        this.selectedGroup$.next(this.getGroupFromBreadcrumbs(breadcrumbs));

        this.svcStore.eStore.set('last-breadcrumbs', breadcrumbs);
    }

    //#endregion
}
