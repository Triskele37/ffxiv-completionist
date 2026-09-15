import { Injectable, signal, inject } from '@angular/core';
import { SortMeta } from 'primeng/api';
import { Subject } from 'rxjs';

import type { DataGroup } from '@model/DataGroup';
import { createDummyGroup } from '@model/DataGroup/createDummyGroup';
import type { Task } from '@model/Task';
import { ConfigStoreService } from '@service/store/config-store.service';
import { CustomContentService } from '@service/custom-content/custom-content.service';
import { DataService } from '@service/data/data-service';
import { NavigationService } from '@service/navigation/navigation.service';
import { SearchService } from '@service/search/search.service';

//#region ------------------------------------------------------- Methods
import { filterFlagCompletion } from './filter/filterFlagCompletion';
import { filterNumericCompletion } from './filter/filterNumericCompletion';
import { filterTasks } from './filter/filterTasks';
import { getUniqueValues } from './filter/getUniqueValues';
import { initFilters } from './filter/initFilters';
import { modifyFilter } from './filter/modifyFilter';
import { onFilterCompletion } from './filter/onFilterCompletion';
import { updateFilteredTasks } from './filter/updateFilteredTasks';

import { onRowReorder } from './order/onRowReorder';
import { sortData } from './order/sortData';
import { sortStringOrLink } from './order/sortStringOrLink';
import { shouldReset } from './order/shouldReset';
import { resetSort } from './order/resetSort';

import { setGroup } from './property/setGroup';
import { setHasNumericColumns } from './property/setHasNumericColumns';

import { expandAll } from './rowGroup/expandAll';
import { collapseAll } from './rowGroup/collapseAll';

import { applyShiftSelection } from './selection/applyShiftSelection';
import { updateLastClickIndex } from './selection/updateLastClickIndex';

//#endregion

import type { CompletionFilter, ExpandedRows, Filters, UniqueValues } from './types';

@Injectable()
export class TableService {
    svcConfig = inject(ConfigStoreService);
    svcCustomContent = inject(CustomContentService);
    svcData = inject(DataService);
    svcNavigation = inject(NavigationService);
    svcSearch = inject(SearchService);

    group = signal<DataGroup>(createDummyGroup());
    originalTasks: Task[] = [];
    tasks = signal<Task[]>([]);
    uniqueValues: UniqueValues = {};

    hasNumericColumns = false;

    constructor() {
        this.initContext();
    }

    forceUpdate(): void {
        this.setGroup(this.group());
    }

    get setGroup() { return setGroup(this); }
    get setHasNumericColumns() { return setHasNumericColumns(this); }

    //#region ------------------------------------------------------- Filtering
    completionFilter: CompletionFilter = {
        completed: false,
        incomplete: false,
        excluded: false,
    };
    filters: Filters = {};
    groupFilters: Record<string, Filters> = {};
    onFilterUpdate$ = new Subject<void>();
    onFilterApplied$ = new Subject<void>();

    get filterFlagCompletion() { return filterFlagCompletion(this); }
    get filterNumericCompletion() { return filterNumericCompletion(this); }
    get filterTasks() { return filterTasks(this); }
    get getUniqueValues() { return getUniqueValues(this); }
    get initContext() { return initFilters(this); }
    get modifyFilter() { return modifyFilter(this); }
    get onFilterCompletion() { return onFilterCompletion(this); }
    get updateFilteredTasks() { return updateFilteredTasks(this); }

    //#endregion

    //#region ------------------------------------------------------- Sorting
    activeSortMeta: SortMeta | null = null;
    originalOrder: string[] = [];
    debounceDrag = signal<boolean>(false);

    get onRowReorder() { return onRowReorder(this); }
    get sortData() { return sortData(this); }
    get sortStringOrLink() { return sortStringOrLink(this); }
    get shouldReset() { return shouldReset(this); }
    get resetSort() { return resetSort(this); }

    //#endregion

    //#region ------------------------------------------------------- Row Group
    expandedRows = signal<ExpandedRows>({});
    groupRows?: boolean;

    get expandAll() { return expandAll(this); }
    get collapseAll() { return collapseAll(this); }

    //#endregion

    //#region ------------------------------------------------------- Selection
    lastClickedRowIndex: number | undefined;

    get applyShiftSelection() { return applyShiftSelection(this); }
    get updateLastClickIndex() { return updateLastClickIndex(this); }

    //#endregion
}
