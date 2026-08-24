import { asQueryString } from './asQueryString';

const BASE_URL = 'https://ffxiv.consolegameswiki.com';

export function getConsoleGamesWikiSearchUrl(term: string) {
    const query = asQueryString(term, true);
    return `${BASE_URL}/?search=${query}`;
}
