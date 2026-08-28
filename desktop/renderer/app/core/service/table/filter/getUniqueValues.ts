import { sortPatchStrings } from '@model/util/sortPatchStrings';

import type { TableServiceContext, UniqueValues } from '../types';

/**
 * Retrieve unique values for all filterable columns
 * */
export function getUniqueValues(
    this: TableServiceContext,
): UniqueValues {
    const unique: UniqueValues = {};

    // Grab unique values from the filtered task list
    for(const { key, ...column } of this.group().columns ?? []) {
        if(!column.filterable) continue;
        if(!unique[key]) unique[key] = [];

        // Grab unique values
        for(const task of this.tasks()) {
            const values = [].concat(task[key]);

            for(const v of values) {
                const linkedName = this.svcData.get.getLinkedName(v, column.link ?? false);
                const value = linkedName?.toString() ?? '';
                if(!unique[key].includes(value)) {
                    unique[key].push(value);
                }
            }
        }

        // Sort
        unique[key].sort((rawA, rawB) => {
            const a = rawA?.toString();
            const b = rawB?.toString();

            if(key === 'patch') return sortPatchStrings(a, b);
            else return a.localeCompare(b, undefined, { numeric: true });
        });

        // Invert certain column lists
        if(key === 'patch') unique[key].reverse();
    }

    return unique;
}
