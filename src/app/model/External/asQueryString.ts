/**
 *
 */
export function asQueryString(value: string, spacesAsPlus: boolean): string {
    let queryString = value
        .replace('…', '')
        .replace(/-/g, ' ');

    queryString = encodeURIComponent(queryString);

    if(spacesAsPlus) {
        queryString = queryString.replace(/%20/g, '+');
    }

    return queryString;
}
