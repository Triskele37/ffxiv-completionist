import { DataGroup } from '@domain/DataGroup';

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

/**
 @param objA - object to match
 @param keyA - key in objA to match or see if contains B
 @param valueB - value being matched
 @param partial - whether to consider partial matches where A contains B
 @param isLink - whether the value of objA[keyA] is expected to be a data path link
 * */
export function fuzzyMatchObject(
    objA: any | any[],
    keyA: number | string,
    valueB: number | string,
    partial: boolean,
    isLink: boolean = false
): boolean {
    if(Array.isArray(objA[keyA])) {
        return objA[keyA].some((pathOrValue) => {
            const valueA = getObjValue(objA, pathOrValue, isLink);
            return fuzzyMatchValue(valueA, valueB, partial);
        });
    }
    else {
        const valueA = getObjValue(objA, objA[keyA], isLink);
        return fuzzyMatchValue(valueA, valueB, partial);
    }
}

//TODO: more generic than current placement
export function getObjValue(
    obj: any,
    pathOrValue: number | string,
    isLink: boolean
): number | string {
    if(pathOrValue && isLink) {
        const linkedTask = DataGroup.overall.getChildTask(pathOrValue.toString());
        if(linkedTask) return linkedTask.name;
    }

    return pathOrValue;
}
