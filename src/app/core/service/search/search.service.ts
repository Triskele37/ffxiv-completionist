import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { NavigationService } from '@service/navigation/navigation.service';

export enum Status {
    Success = 'success',
    Failure = 'failure'
}

export type Match = {
    header: string;
    key: string;
    task: Task;
};

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    constructor(
        private svcData: DataService,
        private svcNavigation: NavigationService
    ) {
    }

    //#region------------------------------------------------------- App Search
    searchTerm: string;
    expanded: boolean;

    searchStatus$: BehaviorSubject<Status> = new BehaviorSubject<Status>(null);
    searchError$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    searchMatches$: BehaviorSubject<Match[]> = new BehaviorSubject<Match[]>([]);

    toggleSearchDepth(): void {
        if(!this.searchTerm) return;

        this.expanded = !this.expanded;
        this.doAppSearch(this.searchTerm);
    }

    doAppSearch(searchTerm: string): void {
        this.searchTerm = searchTerm?.toLowerCase().replace(/[^a-z0-9 ]/g, '');

        if(!this.searchTerm || this.searchTerm.length < 3) {
            this.searchStatus$.next(Status.Failure);
            this.searchError$.next('Please enter at least 3 characters');
        }
        else {
            const matches: Match[] = this.searchData(searchTerm, this.expanded, false);

            if(matches.length > 0) {
                this.searchStatus$.next(Status.Success);
                this.searchError$.next(null);
                this.searchMatches$.next(matches);

                this.svcNavigation.setBreadcrumbs(['FFXIV Completionist', 'Search']);
            }
            else {
                this.searchStatus$.next(Status.Failure);
                this.searchError$.next('No tasks found');
            }
        }
    }

    //#endregion

    //#region------------------------------------------------------- Reuseable Search Logic
    searchData(searchTerm: string, expanded: boolean, strict: boolean): Match[] {
        return this.searchGroupForTerm(this.svcData.data, searchTerm, expanded, strict);
    }

    private searchGroupForTerm(group: DataGroup, searchTerm: string, expanded: boolean, strict: boolean): Match[] {
        const matches: Match[] = [];

        // Recurse downward
        group.subGroups?.forEach((subGroup) =>
            matches.push(...this.searchGroupForTerm(subGroup, searchTerm, expanded, strict))
        );

        // Search current group
        group.tasks.forEach((task) => {
            if(!expanded) { // name only search
                if(task.name && SearchService.fuzzyMatch(searchTerm, task.name, strict)) {
                    matches.push({ header: 'Name', key: 'name', task });
                }
            }
            else { // all column search
                task._parent.columns?.forEach(({ key, header }) => {
                    if(!task[key]) return;

                    if(SearchService.fuzzyMatch(searchTerm, task[key], strict)) {
                        matches.push({ header, key, task });
                    }
                });
            }
        });

        return matches;
    }

    //#endregion

    //#region------------------------------------------------------- Helpers
    // Fuzzy matches search term against task name or if task name includes search term
    private static fuzzyMatch(searchTerm: string, value: number | string, strict: boolean): boolean {
        const fuzzySearchTerm = searchTerm.toLowerCase().replace(/[^a-z0-9 ]/g, '');
        const fuzzyTaskValue = value.toString().toLowerCase().replace(/[^a-z0-9 ]/g, '');

        if(fuzzySearchTerm === fuzzyTaskValue) return true;

        return !strict && fuzzyTaskValue.includes(fuzzySearchTerm);
    }

    //#endregion
}
