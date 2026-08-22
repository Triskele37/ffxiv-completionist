import { JSONResource } from '@model/JSONResource';

import { setDefaultCompletion } from '../completion/defaultCompletion';
import { setIsNumericCompletion } from '../completion/isNumericCompletion';
import { DataGroup } from '../';

export function initializeCompletion(group: DataGroup, json: JSONResource) {
    if(json.defaultCompletion) {
        setDefaultCompletion(group, json.defaultCompletion);
    }
    else if(group._parent?.defaultCompletion) {
        setDefaultCompletion(group, group._parent.defaultCompletion);
    }

    setIsNumericCompletion(group, !!json.isNumericCompletion);

    group.numericDecimal = json.numericDecimal;
}
