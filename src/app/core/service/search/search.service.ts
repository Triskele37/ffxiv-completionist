import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';

import { Match, MatchGroup, Status } from './types';

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
    searchStatus$: BehaviorSubject<Status> = new BehaviorSubject<Status>(null);
    searchError$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    searchMatches$: BehaviorSubject<MatchGroup[]> = new BehaviorSubject<MatchGroup[]>([]);

    doAppSearch(searchTerm: string): void {
        searchTerm = searchTerm?.toLowerCase().replace(/[^a-z0-9 ]/g, '');

        if(!searchTerm || searchTerm.length < 3) {
            this.searchStatus$.next(Status.Failure);
            this.searchError$.next('Please enter at least 3 characters');
        }
        else {
            // Timeout allows UI to update
            // setTimeout(() => {
            const matches: MatchGroup[] = this.searchData(searchTerm);

            if(matches.length > 0) {
                this.searchStatus$.next(Status.Success);
                this.searchError$.next(null);
                this.searchMatches$.next(matches);

                this.svcNavigation.setBreadcrumbs(['Overall', 'FFXIV Completionist', 'Search']);
            }
            else {
                this.searchStatus$.next(Status.Failure);
                this.searchError$.next('No tasks found');
            }
            // }, 250);
        }
    }

    //#endregion

    //#region------------------------------------------------------- Reuseable Search Logic
    searchData(searchTerm: string, strict: boolean = false): MatchGroup[] {
        const matches = this.searchGroupForTerm(this.svcData.data, searchTerm, strict);
        const matchGroups = this.groupMatches(matches);

        return SearchService.cleanMatchGroups(matchGroups);
    }

    private searchGroupForTerm(group: DataGroup, searchTerm: string, strict: boolean): Match[] {
        const matches: Match[] = [];

        // Recurse downward
        if(group.subGroups && group.subGroups.length) {
            group.subGroups.forEach((subGroup) =>
                matches.push(...this.searchGroupForTerm(subGroup, searchTerm, strict))
            );
        }

        // Search current group
        group.tasks.forEach(({ id, name }) => {
            if(name && SearchService.namesFuzzyMatch(searchTerm, name, strict)) {
                matches.push({
                    path: group.groupPath.join(' > '),
                    name,
                    id
                });
            }
        });

        return matches;
    }

    private groupMatches(matches: Match[]): MatchGroup[] {
        const groupedMatches: MatchGroup[] = [];

        matches.forEach((match) => {
            const lastMatch = groupedMatches[groupedMatches.length - 1];

            if(lastMatch && lastMatch.path === match.path) {
                lastMatch.tasks.push({
                    id: match.id,
                    name: match.name
                });
            }
            else {
                groupedMatches.push({
                    path: match.path,
                    tasks: [{
                        id: match.id,
                        name: match.name
                    }]
                });
            }
        });

        return groupedMatches;
    }

    //#endregion

    //#region------------------------------------------------------- Helpers
    private static cleanMatchGroups(matches: MatchGroup[]): MatchGroup[] {
        matches.forEach((match) => {
            const taskCount = match.tasks.length;
            match.matchesString = taskCount > 1 ? `(${taskCount}) ` : '';
            match.matchesString += match.tasks.map((t) => t.name).join(', ');
        });

        return matches;
    }

    // Fuzzy matches search term against task name or if task name includes search term
    private static namesFuzzyMatch(searchTerm: string, taskName: string, strict: boolean): boolean {
        const fuzzySearchTerm = searchTerm.toLowerCase().replace(/[^a-z0-9 ]/g, '');
        const fuzzyTaskName = taskName.toLowerCase().replace(/[^a-z0-9 ]/g, '');

        if(fuzzySearchTerm === fuzzyTaskName) return true;

        return !strict && fuzzyTaskName.includes(fuzzySearchTerm);
    }

    //#endregion
}
