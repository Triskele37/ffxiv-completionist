type Callback = (obj: any, lang: string) => any;

export function spreadLangs(obj: any, keyOrCallback: string | Callback, leftSideOverride?: string): any {
    if(typeof keyOrCallback === 'string') {
        const key = keyOrCallback;
        return {
            [`${leftSideOverride || key}_de`]: obj?.[`${key}_de`],
            [`${leftSideOverride || key}_en`]: obj?.[`${key}_en`],
            [`${leftSideOverride || key}_fr`]: obj?.[`${key}_fr`],
            [`${leftSideOverride || key}_ja`]: obj?.[`${key}_ja`],
        };
    }
    else {
        const callback = keyOrCallback;
        return {
            [`${leftSideOverride}_de`]: callback(obj, 'de'),
            [`${leftSideOverride}_en`]: callback(obj, 'en'),
            [`${leftSideOverride}_fr`]: callback(obj, 'fr'),
            [`${leftSideOverride}_ja`]: callback(obj, 'ja'),
        };
    }
}
