import type { DataServiceContext } from '../types';
import { addTaskToIndex } from './addTaskToIndex';
import { getIndexedTask } from './getIndexedTask';

export type DataIndexingFacet = ReturnType<typeof createIndexingFacet>;

export function createIndexingFacet(this: DataServiceContext) {
    return {
        addTaskToIndex: addTaskToIndex.bind(this),
        getIndexedTask: getIndexedTask.bind(this),
    };
}
