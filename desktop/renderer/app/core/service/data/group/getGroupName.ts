import { Lang } from '@constant';
import type { JSONResource } from '@model/JSONResource';

import type { DataService } from '../data-service';

/**
 * Retrieve the localized group name
 * - Also handles short/long name setting
 * */
export function getGroupName(service: DataService) {
    return (
        json: JSONResource,
    ): string => {
        const lang = service.svcConfig.get('lang') || Lang.EN;

        const longName = json[`groupName_${lang}`] ?? json.groupName;
        const shortName = json[`groupNameShort_${lang}`] ?? json.groupNameShort;

        if(service.svcConfig.get('use-short-names')) {
            return shortName || longName;
        }
        else {
            return longName;
        }
    };
}
