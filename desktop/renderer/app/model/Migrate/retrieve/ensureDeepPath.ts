import type { PlayerSave } from '@common/PlayerSave';

/**
 * Dives `save` following `path` ensuring all objects are created along
 * */
export function ensureDeepPath(
    save: PlayerSave,
    path: string | string[],
): any {
    const pathSegments = typeof path === 'string' ? path.split('.') : path;

    let cur = save;
    for(const item of pathSegments) {
        cur[item as never] ??= {} as never;
        cur = cur[item as never];
    }

    return cur;
}
