import type { PlayerSave } from '@common/PlayerSave';

/**
 * Dives `save` to attempt to get the value at `path`
 * */
export function getDeepProperty(
    save: PlayerSave,
    path: string | string[],
): any {
    const pathSegments = typeof path === 'string' ? path.split('.') : path;

    let cur = save;
    for(const item of pathSegments) {
        cur = cur[item as never];
        if(!cur) return;
    }

    return cur;
}
