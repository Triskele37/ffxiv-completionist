import { DataGroup } from '@model/DataGroup';
import { JSONResource } from '@model/JSONResource';

import { DataServiceContext } from '../types';

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
}
