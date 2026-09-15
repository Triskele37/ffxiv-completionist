import { fuzzyMatchValue } from '@model/util/fuzzyMatch';

import type { SearchService } from '../search.service';

export function fuzzyMatchObject(service: SearchService) {
    /**
     * @param objA - object to match
     * @param keyA - key in objA to match or see if contains B
     * @param valueB - value being matched
     * @param partial - whether to consider partial matches where A contains B
     * @param isLink - whether the value of objA[keyA] is expected to be a data path link
     * */
    return (
        objA: any | any[],
        keyA: number | string,
        valueB: number | string,
        partial: boolean,
        isLink: boolean = false,
    ): boolean => {
        const isMatch = (linkedNameValue: number | string): boolean => {
            const valueA = service.svcData.getLinkedName(linkedNameValue, isLink);
            const searchString = valueA + objA[keyA]; // Tack on any non-link text
            return fuzzyMatchValue(searchString, valueB, partial);
        };

        if(Array.isArray(objA[keyA])) {
            return objA[keyA].some((pathOrValue) => isMatch(pathOrValue));
        }
        else {
            return isMatch(objA[keyA]);
        }
    };
}
