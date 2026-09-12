import { asQueryString } from './asQueryString';

const BASE_URL = 'https://www.garlandtools.org/db';

export function getGarlandToolsSearchUrl(term: string): string {
    const query = asQueryString(term, false);
    return `${BASE_URL}/#search/${query}`;
}

export function getGarlandToolsGroupUrl(groupName: string, ids: number[]): string {
    const idsString = ids.map((id) => `item/${id}`).join('|');
    const encodedGroupName = encodeURIComponent(groupName);

    return `${BASE_URL}/#group/${encodedGroupName}{${idsString}}`;
}
