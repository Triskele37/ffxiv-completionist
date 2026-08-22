import type { DataServiceContext } from '../types';
import { createTask } from './createTask';
import { inheritFromParent } from './inheritFromParent';
import { concatWithParent } from './concatWithParent';
import { deepConcatWithParent } from './deepConcatWithParent';
import { flattenLangKeys } from './flattenLangKeys';

export type DataTaskFacet = ReturnType<typeof createTaskFacet>;

export function createTaskFacet(this: DataServiceContext) {
    return {
        createTask: createTask.bind(this),
        inheritFromParent: inheritFromParent.bind(this),
        concatWithParent: concatWithParent.bind(this),
        deepConcatWithParent: deepConcatWithParent.bind(this),
        flattenLangKeys: flattenLangKeys.bind(this),
    };
}
