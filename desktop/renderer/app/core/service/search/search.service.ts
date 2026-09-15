import { Injectable, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DataService } from '@service/data/data-service';

//#region ------------------------------------------------------- Methods
import { doAppSearch } from './methods/doAppSearch';
import { searchGroups } from './methods/searchGroups';
import { searchGroupsForTerm } from './methods/searchGroupsForTerm';
import { searchTasks } from './methods/searchTasks';
import { searchTasksForTerm } from './methods/searchTasksForTerm';
import { toggleSearchDepth } from './methods/toggleSearchDepth';
import { fuzzyMatchObject } from './methods/fuzzyMatchObject';

//#endregion

import type { GroupMatch, Match } from './types';
import type { Status } from './Status';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    svcTranslate = inject(TranslateService);
    svcData = inject(DataService);

    searchTerm?: string;
    expanded?: boolean;

    searchStatus = signal<Status | null>(null);
    searchError = signal<string | null>(null);
    searchTaskMatches = signal<Match[]> ([]);
    searchGroupMatches = signal<GroupMatch[]>([]);

    get doAppSearch() { return doAppSearch(this); }
    get searchGroups() { return searchGroups(this); }
    get searchGroupsForTerm() { return searchGroupsForTerm(this); }
    get searchTasks() { return searchTasks(this); }
    get searchTasksForTerm() { return searchTasksForTerm(this); }
    get toggleSearchDepth() { return toggleSearchDepth(this); }
    get fuzzyMatchObject() { return fuzzyMatchObject(this); }
}
