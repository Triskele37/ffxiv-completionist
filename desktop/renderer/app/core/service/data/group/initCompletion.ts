import type { DataGroup } from '@model/DataGroup';
import type { JSONResource } from '@model/JSONResource';

import type { DataService } from '../data-service';

/**
 * Initialize group completion flags
 * - not completion on tasks
 * */
export function initCompletion(service: DataService) {
    return (
        group: DataGroup,
        json: JSONResource,
    ): void => {
        if(json.defaultCompletion) {
            service.initDefaultCompletion(group, json.defaultCompletion);
        }
        else if(group._parent?.defaultCompletion) {
            service.initDefaultCompletion(group, group._parent.defaultCompletion);
        }

        group.isNumericCompletion = !!json.isNumericCompletion;
        group.tasks.forEach((task) => task.isNumericCompletion = !!json.isNumericCompletion);

        group.numericDecimal = json.numericDecimal;
        group.minValue = json.minValue;
        group.maxValue = json.maxValue;

        if(json.disableCompletion) group.disableCompletion = json.disableCompletion;
        if(group._parent?.disableCompletion) group.disableCompletion = true;
    };
}
