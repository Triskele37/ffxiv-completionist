import type { DataServiceContext } from '../types';

const COMMON_KEY_PREFIX = '@';

/**
 * Uses a prefix character leading the string to signal i18n translation
 * */
export function shouldTranslate(
    this: DataServiceContext,
    value: any
): boolean {
    return typeof value === 'string' && value.startsWith(COMMON_KEY_PREFIX);
}
