import { JSONResource } from '@model/JSONResource';

import { DataServiceContext } from '../types';

/**
 * Iterate fields on an object, looking for ones that need i18n transformation
 */
export function translateCommonKeys(
    this: DataServiceContext,
    obj: JSONResource,
): void {
    for(const field in obj) {
        const value = obj[field];

        if(Array.isArray(value)) {
            const len = value.length;
            for(let i = 0; i < len; i++) {
                const item = value[i];

                if(this.loader.shouldTranslate(item)) {
                    value[i] = this.loader.getCommonTranslation(item);
                }
            }
        }
        else if(this.loader.shouldTranslate(value)) {
            obj[field] = this.loader.getCommonTranslation(value);
        }
    }
}
