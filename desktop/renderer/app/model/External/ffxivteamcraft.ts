const BASE_URL = 'https://www.ffxivteamcraft.com';

export function getTeamCraftGroupUrl(ids: number[]): string {
    const idsString = ids.map((id) => `${id},null,1`).join(';');
    const b64ids = Buffer.from(idsString).toString('base64');

    return `${BASE_URL}/import/${b64ids}`;
}
