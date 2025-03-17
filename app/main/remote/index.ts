import { IpcMainEvent, shell } from 'electron';

/**
 * NOTE: none of these work, blocked at OS level due to no code signing
 */

//#region------------------------------------------------------- Search External
export function searchConsoleGamer(event: IpcMainEvent, term: string): void {
    const query = asQueryString(term, true);
    shell.openExternal(`https://ffxiv.consolegameswiki.com/?search=${query}`);
    event.returnValue = null;
}

export function searchGamerEscape(event: IpcMainEvent, term: string): void {
    const query = asQueryString(term, true);
    shell.openExternal(`https://ffxiv.gamerescape.com/?search=${query}`);

    event.returnValue = null;
}

export function searchGarlandTools(event: IpcMainEvent, term: string): void {
    const query = asQueryString(term, false);
    shell.openExternal(`https://www.garlandtools.org/db/#search/${query}`);

    event.returnValue = null;
}

//#endregion

//#region------------------------------------------------------- Open External
export function openInGarlandTools(event: IpcMainEvent, ids: number[], groupName: string): void {
    const baseUrl = 'https://www.garlandtools.org/db/#group';
    const idsString = ids.map((id) => `item/${id}`).join('|');
    const encodedGroupName = encodeURIComponent(groupName);

    shell.openExternal(`${baseUrl}/${encodedGroupName}{${idsString}}`);

    event.returnValue = null;
}

export function openInTeamcraft(event: IpcMainEvent, ids: number[]): void {
    const baseUrl = 'https://www.ffxivteamcraft.com/import';
    const idsString = ids.map((id) => `${id},null,1`).join(';');
    const b64ids = Buffer.from(idsString).toString('base64');

    shell.openExternal(`${baseUrl}/${b64ids}`);

    event.returnValue = null;
}

//#endregion

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
