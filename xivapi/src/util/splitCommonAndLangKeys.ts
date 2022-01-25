// Split common keys from lang task and return both
export function splitCommonAndLangKeys(content, langTask) {
    if(!content.hasCommonKeys) {
        return [langTask, null];
    }

    const commonTask: any = {};

    (content.COMMON_KEYS || []).forEach((commonKey) => {
        commonTask[commonKey] = langTask[commonKey];
        delete langTask[commonKey];
    });

    return [langTask, commonTask];
}
