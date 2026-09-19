import { shell } from 'electron';

import { TaskLink } from '../../../common/Features';

import { buildExternalUrl } from './buildExternalUrl';
import { getFeature } from './getFeature';
import { TRUSTED } from './trusted';

export function openExternalSingle(term: string, key: string): boolean {
    const config = getFeature('task-links')?.find((tl) => tl.i18nKey === key);
    if(!config) return false;

    return openExternal(term, config);
}

export function openExternalMulti(terms: string[], key: string): boolean {
    const config = getFeature('multi-task-links')?.find((tl) => tl.i18nKey === key);
    if(!config) return false;

    return openExternal(terms, config);
}

export function openExternal(term: string | string[], config: TaskLink): boolean {
    const url = new URL(buildExternalUrl(term, config));

    // SEC: Require links to target secure protocol
    if(url.protocol !== 'https:') return false;

    // SEC: Require ALL hosts be whitelisted
    if(!TRUSTED.has(url.hostname)) return false;

    shell.openExternal(url.href);

    return true;
}
