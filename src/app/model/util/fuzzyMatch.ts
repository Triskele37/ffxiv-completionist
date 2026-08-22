import { getLinkedName } from '@service/data/get/getLinkedName';

/**
 @param valueA - value to match or see if contains B
 @param valueB - value being matched
 @param partial - whether to consider partial matches where A contains B
 * */
export function fuzzyMatchValue(
    valueA: number | string,
    valueB: number | string,
    partial: boolean
): boolean {
    const fuzzyA = (valueA ?? '')
        .toString()
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '');

    const fuzzyB = (valueB ?? '')
        .toString()
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '');

    if(fuzzyA === fuzzyB) return true;

    return partial && fuzzyA.includes(fuzzyB);
}
