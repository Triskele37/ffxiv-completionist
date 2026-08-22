import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DataService } from '@data';
import { DataGroup } from '@model/DataGroup';

import { getLinkedName } from '@model/Task/get/getLinkedName';
import { fuzzyMatchObject, fuzzyMatchValue } from '@model/util/fuzzyMatch';

import { GroupMatch, Match, Status } from './SearchTypes';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    searchTerm?: string;
    expanded?: boolean;

    searchStatus = signal<Status | null>(null);
    searchError = signal<string | null>(null);
    searchTaskMatches = signal<Match[]> ([]);
    searchGroupMatches = signal<GroupMatch[]>([]);

    constructor(
        private translate: TranslateService,
        private svcData: DataService
    ) {
    }

    //#region------------------------------------------------------- App Search
    toggleSearchDepth(): void {
        if(!this.searchTerm) return;

        this.expanded = !this.expanded;
        this.doAppSearch(this.searchTerm);
    }

    doAppSearch(searchTerm: string): void {
        this.searchTerm = searchTerm?.toLowerCase().replace(/[^a-z0-9 ]/g, '');

        if(!this.searchTerm || this.searchTerm.length < 2) {
            this.searchStatus.set(Status.Failure);
            this.searchError.set(this.translate.instant('APP.SEARCH.TOO_SHORT'));
        }
        else {
            const matches: Match[] = this.searchTasks(searchTerm, this.expanded ?? false, true);
            const groupMatches: GroupMatch[] = this.searchGroups(searchTerm, true);

            if(matches.length > 0 || groupMatches.length > 0) {
                this.searchStatus.set(Status.Success);
                this.searchError.set(null);
                this.searchTaskMatches.set(matches);
                this.searchGroupMatches.set(groupMatches);
            }
            else if(!this.expanded) {
                this.toggleSearchDepth();
            }
            else {
                this.searchStatus.set(Status.Failure);
                this.searchError.set(this.translate.instant('APP.SEARCH.NO_RESULTS'));
            }
        }
    }

    //#endregion

    //#region------------------------------------------------------- Group Search
    searchGroups(searchTerm: string, partial: boolean) {
        return this.searchGroupsForTerm(this.svcData.data, searchTerm, partial);
    }

    private searchGroupsForTerm(
        group: DataGroup,
        searchTerm: string,
        partial: boolean,
    ): GroupMatch[] {
        if(group.isBookmarkGroup) return [];

        const matches: GroupMatch[] = [];

        if(fuzzyMatchValue(group.name, searchTerm, partial)) {
            matches.push({ header: 'ABC', value: group.name, group });
        }

        group.subGroups?.forEach((subGroup) => {
            if(!subGroup) return;
            matches.push(...this.searchGroupsForTerm(subGroup, searchTerm, partial));
        });

        return matches;
    }

    //#endregion

    //#region------------------------------------------------------- Task Search
    searchTasks(searchTerm: string, expanded: boolean, partial: boolean): Match[] {
        return this.searchTasksForTerm(this.svcData.data, searchTerm, expanded, partial);
    }

    private searchTasksForTerm(
        group: DataGroup,
        searchTerm: string,
        expanded: boolean,
        partial: boolean
    ): Match[] {
        const matches: Match[] = [];

        // Recurse downward
        group.subGroups?.forEach((subGroup) => {
            if(!subGroup || subGroup.isBookmarkGroup) return;
            matches.push(...this.searchTasksForTerm(subGroup, searchTerm, expanded, partial));
        });

        // Search current group
        group.tasks.forEach((task) => {
            if(!expanded) { // name only search
                task._parent.columns?.forEach(({ key, header }) => {
                    if(!task.name) return;
                    if(key !== 'name') return;

                    const termInName = fuzzyMatchValue(task.name, searchTerm, partial);
                    const nameInTerm = false; //fuzzyMatchValue(searchTerm, task.name, partial);

                    if(termInName || nameInTerm) {
                        matches.push({
                            header,
                            value: task.name,
                            task
                        });
                    }
                });
            }
            else { // all column search
                task._parent.columns?.forEach(({ key, header, link }) => {
                    if(!task[key]) return;

                    if(fuzzyMatchObject(task, key, searchTerm, partial, link)) {
                        let value: string;

                        if(Array.isArray(task[key])) {
                            value = task[key]
                                .map((path) => getLinkedName(path, !!link))
                                .join(', ');
                        }
                        else {
                            value = getLinkedName(task[key], !!link).toString();
                        }

                        matches.push({ header, value, task });
                    }
                });
            }
        });

        return matches;
    }

    //#endregion

}
