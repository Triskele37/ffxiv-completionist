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
    this.group().columns?.forEach(({ key, ...column }) => {
        if(!column.filterable) return;
        if(!unique[key]) unique[key] = [];

        // Grab unique values
        this.tasks()?.forEach((task) => {
            [].concat(task[key]).forEach((v) => {
                const value = this.svcData.get.getLinkedName(v, column.link ?? false)?.toString() ?? '';
                if(!unique[key].includes(value)) unique[key].push(value);
            });
        });

        // Sort
        unique[key].sort((rawA, rawB) => {
            const a = rawA?.toString();
            const b = rawB?.toString();

            if(key === 'patch') return sortPatchStrings(a, b);
            else return a.localeCompare(b, undefined, { numeric: true });
        });

        // Invert certain column lists
        if(key === 'patch') unique[key].reverse();
    });

    return unique;
}
