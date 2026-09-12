import { curryIsInRange, parseIdSelector } from '@model/Link/parseIdSelector';

import type { DataServiceContext } from '../types';

/**
 * Expand links that end with id selectors
 * */
export function expandIdSelector(
    this: DataServiceContext,
    groupLink: string,
    idSelector: string,
): string[] {
    const group = this.get.getGroup(groupLink);
    if(!group) return [];

    const parsedIdSelector = parseIdSelector(idSelector);

    return group.tasks
        .filter((task) => {
            const isInRange = curryIsInRange(task.id);

            if(parsedIdSelector.exclude.some(isInRange)) return false;

            if(!parsedIdSelector.include.length) return true;

            return parsedIdSelector.include.some(isInRange);
        })
        .map((t) => `${groupLink}.${t.id}`);
}
