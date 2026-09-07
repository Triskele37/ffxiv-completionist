import type { TranslateService } from '@ngx-translate/core';
import type { MessageService } from 'primeng/api';

import { MainApi } from '@common/MainApi';

import { getConsoleGamesWikiSearchUrl } from './consolegameswiki';
import { getTeamCraftGroupUrl } from './ffxivteamcraft';
import { getGamerEscapeSearchUrl } from './gamerescape';
import { getGarlandToolsSearchUrl, getGarlandToolsGroupUrl } from './garlandtools';

/**
 * Shim to replace IPC events that once opened browser tabs with
 * copying their link to the clipboard
 * (in-case the old behavior can be reimplemented)
 */
export function copyLinkShim(
    svcMessage: MessageService,
    translate: TranslateService,
    ipcEvent: keyof MainApi,
    ...args: any[]
): void {
    const [termOrIds, groupName] = args;
    let link: string;

    switch(ipcEvent) {
        case 'searchConsoleGames':
            link = getConsoleGamesWikiSearchUrl(termOrIds);
            break;
        case 'searchGamerEscape':
            link = getGamerEscapeSearchUrl(termOrIds);
            break;
        case 'searchGarlandTools':
            link = getGarlandToolsSearchUrl(termOrIds);
            break;
        case 'openInGarlandTools':
            link = getGarlandToolsGroupUrl(groupName, termOrIds);
            break;
        case 'openInTeamcraft':
            link = getTeamCraftGroupUrl(termOrIds);
            break;
        default: return;
    }

    if(link) {
        navigator.clipboard.writeText(link);
        svcMessage.add({
            detail: translate.instant('APP.TOAST.LINK_COPIED'),
            severity: 'success',
            life: 2500
        });
    }
}
