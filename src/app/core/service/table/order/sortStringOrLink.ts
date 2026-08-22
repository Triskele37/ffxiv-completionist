import { getLinkedName } from '@model/Task/get/getLinkedName';
import { sortPatchStrings } from '@model/util/sortPatchStrings';

import { TableServiceContext } from '../types';

const alphanumericRegex = new RegExp(/[^\w.]/g);

export function sortStringOrLink(
    this: TableServiceContext,
    a: string | string[],
    b: string | string[],
    field: string
): number {
    // In case of an array of links, take the first
    let aVal = Array.isArray(a) ? a[0] : a;
    let bVal = Array.isArray(b) ? b[0] : b;

    // Attempt to get link text
    const linkA = getLinkedName(aVal, true);
    const linkB = getLinkedName(bVal, true);

    // non-matching means the values are links, make sure they're strings
    if(linkA !== aVal) aVal = linkA.toString();
    if(linkB !== bVal) bVal = linkB.toString();

    // Replace non-alphanumeric characters
    aVal = aVal.replace(alphanumericRegex, '');
    bVal = bVal.replace(alphanumericRegex, '');

    // Handle by field key
    if(field === 'patch') {
        return sortPatchStrings(aVal, bVal);
    }
    else {
        return aVal.localeCompare(bVal, undefined, { numeric: true });
    }
}
