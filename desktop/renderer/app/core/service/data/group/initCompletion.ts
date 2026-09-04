import type { DataGroup } from '@model/DataGroup';
import type { JSONResource } from '@model/JSONResource';

import type { DataServiceContext } from '../types';

/**
 * Initialize group completion flags
 * - not completion on tasks
 * */
export function initCompletion(
    this: DataServiceContext,
    group: DataGroup,
    json: JSONResource,
): void {
    if(json.defaultCompletion) {
        this.group.initDefaultCompletion(group, json.defaultCompletion);
    }
    else if(group._parent?.defaultCompletion) {
        this.group.initDefaultCompletion(group, group._parent.defaultCompletion);
    }

    this.group.initNumericCompletion(group, !!json.isNumericCompletion);

    group.numericDecimal = json.numericDecimal;

    if(json.disableCompletion) group.disableCompletion = json.disableCompletion;
    if(group._parent?.disableCompletion) group.disableCompletion = true;
}
