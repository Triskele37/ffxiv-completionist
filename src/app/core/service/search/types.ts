import type { WritableSignal } from '@angular/core';
import type { TranslateService } from '@ngx-translate/core';

import type { DataService } from '@service/data/data-service';

import type { doAppSearch } from './methods/doAppSearch';
import type { searchGroups } from './methods/searchGroups';
import type { searchGroupsForTerm } from './methods/searchGroupsForTerm';
import type { searchTasks } from './methods/searchTasks';
import type { searchTasksForTerm } from './methods/searchTasksForTerm';
import type { toggleSearchDepth } from './methods/toggleSearchDepth';
import type { fuzzyMatchObject } from './methods/fuzzyMatchObject';
import type { GroupMatch, Match, Status } from './SearchTypes';

export interface SearchServiceContext {
    svcTranslate: TranslateService;
    svcData: DataService;

    searchTerm?: string;
    expanded?: boolean;

    searchStatus: WritableSignal<Status | null>;
    searchError: WritableSignal<string | null>;
    searchTaskMatches: WritableSignal<Match[]>;
    searchGroupMatches: WritableSignal<GroupMatch[]>;

    doAppSearch: ReturnType<typeof doAppSearch>;
    searchGroups: ReturnType<typeof searchGroups>;
    searchGroupsForTerm: ReturnType<typeof searchGroupsForTerm>;
    searchTasks: ReturnType<typeof searchTasks>;
    searchTasksForTerm: ReturnType<typeof searchTasksForTerm>;
    toggleSearchDepth: ReturnType<typeof toggleSearchDepth>;
    fuzzyMatchObject: ReturnType<typeof fuzzyMatchObject>;
}
