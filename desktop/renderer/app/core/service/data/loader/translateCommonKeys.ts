import type { JSONResource } from '@model/JSONResource';

import type { DataService } from '../data-service';

/**
 * Iterate fields on an object, looking for ones that need i18n transformation
 */
export function translateCommonKeys(service: DataService) {
    return (
        obj: JSONResource,
    ): void => {
        for(const field in obj) {
            const value = obj[field];

            if(Array.isArray(value)) {
                const len = value.length;
                for(let i = 0; i < len; i++) {
                    const item = value[i];

                    if(service.shouldTranslate(item)) {
                        value[i] = service.getCommonTranslation(item);
                    }
                }
            }
            else if(service.shouldTranslate(value)) {
                obj[field] = service.getCommonTranslation(value);
            }
        }
    };
}
