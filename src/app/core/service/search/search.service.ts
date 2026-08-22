import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DataService } from '@service/data/data-service';

import { doAppSearch } from './methods/doAppSearch';
import { searchGroups } from './methods/searchGroups';
import { searchGroupsForTerm } from './methods/searchGroupsForTerm';
import { searchTasks } from './methods/searchTasks';
import { searchTasksForTerm } from './methods/searchTasksForTerm';
import { toggleSearchDepth } from './methods/toggleSearchDepth';
import { fuzzyMatchObject } from './methods/fuzzyMatchObject';
import { GroupMatch, Match, Status } from './SearchTypes';
import { SearchServiceContext } from './types';

@Injectable({
    providedIn: 'root'
})
export class SearchService implements SearchServiceContext{
    searchTerm?: string;
    expanded?: boolean;

    searchStatus = signal<Status | null>(null);
    searchError = signal<string | null>(null);
    searchTaskMatches = signal<Match[]> ([]);
    searchGroupMatches = signal<GroupMatch[]>([]);

    constructor(
        public svcTranslate: TranslateService,
        public svcData: DataService
    ) {
    }

    doAppSearch: ReturnType<typeof doAppSearch> = doAppSearch.call(this);
    searchGroups: ReturnType<typeof searchGroups> = searchGroups.call(this);
    searchGroupsForTerm: ReturnType<typeof searchGroupsForTerm> = searchGroupsForTerm.call(this);
    searchTasks: ReturnType<typeof searchTasks> = searchTasks.call(this);
    searchTasksForTerm: ReturnType<typeof searchTasksForTerm> = searchTasksForTerm.call(this);
    toggleSearchDepth: ReturnType<typeof toggleSearchDepth> = toggleSearchDepth.call(this);
    fuzzyMatchObject: ReturnType<typeof fuzzyMatchObject> = fuzzyMatchObject.call(this);
}
