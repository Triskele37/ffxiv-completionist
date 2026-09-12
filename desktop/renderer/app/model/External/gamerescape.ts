import { asQueryString } from './asQueryString';

const BASE_URL = 'https://ffxiv.gamerescape.com';

export function getGamerEscapeSearchUrl(term: string): string {
    const query = asQueryString(term, true);
    return `${BASE_URL}/?search=${query}`;
}
