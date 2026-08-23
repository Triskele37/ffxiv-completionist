import { Lang } from '@constant';
import type { JSONResource } from '@model/JSONResource';

import type { DataServiceContext } from '../types';

/**
 * Retrieve the localized group name
 * - Also handles short/long name setting
 * */
export function getGroupName(
    this: DataServiceContext,
    json: JSONResource,
): string {
    const lang = this.svcConfig.get('lang') || Lang.EN;

    const longName = json[`groupName_${lang}`] ?? json.groupName;
    const shortName = json[`groupNameShort_${lang}`] ?? json.groupNameShort;

    if(this.svcConfig.get('use-short-names')) {
        return shortName || longName;
    }
    else {
        return longName;
    }
}
