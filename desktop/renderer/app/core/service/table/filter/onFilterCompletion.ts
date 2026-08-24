import { Completion } from '@constant';

import type { TableServiceContext } from '../types';
import type { CompletionFilter } from './_types';

const letterToKeyMap: Record<Completion, keyof CompletionFilter> = {
    [Completion.Y]: 'completed',
    [Completion.N]: 'incomplete',
    [Completion.X]: 'excluded'
};

/**
 * Handler for completion filter setting changes in the table
 * */
export function onFilterCompletion(
    this: TableServiceContext,
    value: Completion,
): void {
    const key = letterToKeyMap[value];

    this.filter.completion[key] = !this.filter.completion[key];
    this.svcConfig.set(`table-filters.${key}`, this.filter.completion[key]);

    this.filter.onFilterUpdate$.next();
}
