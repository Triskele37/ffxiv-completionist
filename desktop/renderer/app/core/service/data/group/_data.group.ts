import type { DataServiceContext } from '../types';
import { createDataGroup } from './createDataGroup';
import { getGroupName } from './getGroupName';
import { initColumns } from './initColumns';
import { initCompletion } from './initCompletion';
import { initDefaultCompletion } from './initDefaultCompletion';
import { initNumericCompletion } from './initNumericCompletion';
import { initTasks } from './initTasks';
import { initUi } from './initUi';

export type DataGroupFacet = ReturnType<typeof createGroupFacet>;

export function createGroupFacet(this: DataServiceContext) {
    return {
        createDataGroup: createDataGroup.bind(this),
        getGroupName: getGroupName.bind(this),
        initColumns: initColumns.bind(this),
        initCompletion: initCompletion.bind(this),
        initDefaultCompletion: initDefaultCompletion.bind(this),
        initNumericCompletion: initNumericCompletion.bind(this),
        initTasks: initTasks.bind(this),
        initUi: initUi.bind(this),
    };
}
