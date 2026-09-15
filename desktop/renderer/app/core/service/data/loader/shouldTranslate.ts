import type { DataService } from '../data-service';

const COMMON_KEY_PREFIX = '@';

/**
 * Uses a prefix character leading the string to signal i18n translation
 * */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function shouldTranslate(service: DataService) {
    return (
        value: any
    ): boolean => {
        return typeof value === 'string' && value.startsWith(COMMON_KEY_PREFIX);
    };
}
