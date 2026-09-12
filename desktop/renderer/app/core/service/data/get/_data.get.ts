import type { DataServiceContext } from '../types';
import { getChild } from './getChild';
import { getChildGroup } from './getChildGroup';
import { getChildTask } from './getChildTask';
import { getGroup } from './getGroup';
import { getTask } from './getTask';
import { getTasks } from './getTasks';
import { getLinkedName } from './getLinkedName';
import { logGetMiss } from './logGetMiss';
import { logGetMismatch } from './logGetMismatch';

export type DataGetFacet = ReturnType<typeof createGetFacet>;

export function createGetFacet(this: DataServiceContext) {
    return {
        getChild: getChild.bind(this),
        getChildGroup: getChildGroup.bind(this),
        getChildTask: getChildTask.bind(this),
        getGroup: getGroup.bind(this),
        getTask: getTask.bind(this),
        getTasks: getTasks.bind(this),
        getLinkedName: getLinkedName.bind(this),
        logGetMiss: logGetMiss.bind(this),
        logGetMismatch: logGetMismatch.bind(this),
    };
}
