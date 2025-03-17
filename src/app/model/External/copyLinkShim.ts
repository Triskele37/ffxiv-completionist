import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

import { IPC_EVENT } from '@service/electron/IPC_EVENT';

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
    ipcEvent: IPC_EVENT,
    ...args: any[]
): void {
    const [termOrIds, groupName] = args;
    let link: string;

    switch(ipcEvent) {
        case IPC_EVENT.SEARCH_CONSOLE_GAMES:
            link = getConsoleGamesWikiSearchUrl(termOrIds);
            break;
        case IPC_EVENT.SEARCH_GAMER_ESCAPE:
            link = getGamerEscapeSearchUrl(termOrIds);
            break;
        case IPC_EVENT.SEARCH_GARLAND_TOOLS:
            link = getGarlandToolsSearchUrl(termOrIds);
            break;
        case IPC_EVENT.OPEN_IN_GARLAND_TOOLS:
            link = getGarlandToolsGroupUrl(groupName, termOrIds);
            break;
        case IPC_EVENT.OPEN_IN_TEAMCRAFT:
            link = getTeamCraftGroupUrl(termOrIds);
            break;
    }

    if(link) {
        navigator.clipboard.writeText(link);
        svcMessage.add({
            detail: translate.instant('Link copied to clipboard'),
            severity: 'success',
            life: 2500
        });
    }
}
