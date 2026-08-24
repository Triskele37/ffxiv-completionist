import { Subject } from 'rxjs';

import type { TableServiceContext } from '../types';
import { filterFlagCompletion } from './filterFlagCompletion';
import { filterNumericCompletion } from './filterNumericCompletion';
import { filterTasks } from './filterTasks';
import { getUniqueValues } from './getUniqueValues';
import { initContext } from './initContext';
import { modifyFilter } from './modifyFilter';
import { onFilterCompletion } from './onFilterCompletion';
import { updateFilteredTasks } from './updateFilteredTasks';
import type { TableFilterContext } from './_types';

export type TableFilterFacet = ReturnType<typeof createFilterFacet>;

export function createFilterFacet(this: TableServiceContext) {
    const context: TableFilterContext = {
        completion: {
            completed: false,
            incomplete: false,
            excluded: false,
        },
        filters: {},
        groupFilters: {},
        onFilterUpdate$: new Subject<void>(),
        onFilterApplied$: new Subject<void>(),
    }

    return {
        ...context,
        filterFlagCompletion: filterFlagCompletion.bind(this),
        filterNumericCompletion: filterNumericCompletion.bind(this),
        filterTasks: filterTasks.bind(this),
        getUniqueValues: getUniqueValues.bind(this),
        initContext: initContext.bind(this),
        modifyFilter: modifyFilter.bind(this),
        onFilterCompletion: onFilterCompletion.bind(this),
        updateFilteredTasks: updateFilteredTasks.bind(this),
    };
}
