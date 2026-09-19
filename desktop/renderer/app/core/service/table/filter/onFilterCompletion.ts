import { Completion } from '@constant';

import type { TableService } from '../table.service';
import type { CompletionFilter } from '../types';

const letterToKeyMap: Record<Completion, keyof CompletionFilter> = {
    [Completion.Y]: 'completed',
    [Completion.N]: 'incomplete',
    [Completion.X]: 'excluded'
};

/**
 * Handler for completion filter setting changes in the table
 * */
export function onFilterCompletion(service: TableService) {
    return (
        value: Completion,
    ): void => {
        const key = letterToKeyMap[value];

        service.completionFilter[key] = !service.completionFilter[key];
        service.svcConfig.set(`table-filters.${key}`, service.completionFilter[key]);

        service.updateFilteredTasks();
        service.onFilterUpdate$.next();
    };
}
