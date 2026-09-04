import type { DataServiceContext } from '../types';

const COMMON_KEY_REGEX = /[A-Z]+[A-Z0-9_]+\.[A-Z0-9_.]+/g;
const NUMBER_REGEX = /\b\d+[,.]+[\d.,]+\b/g;

/**
 * Transform i18n keys at any place in a string
 * @param value - should already have returned true when passed to `shouldTranslate`
 */
export function getCommonTranslation(
    this: DataServiceContext,
    value: string,
): string {
    let updatedValue = value.substring(1);
    let commonKeys: string[] | null;

    // Loop through the updated value (allows for nested common values)
    while(commonKeys = updatedValue.match(COMMON_KEY_REGEX)) {
        const replacements: Record<string, string> = {};

        for(const commonKey of commonKeys) {
            if(!replacements[commonKey]) {
                // Attempt to get translation
                const fullCommonKey = `GAME.${commonKey}`;
                const commonTranslation = this.svcTranslate?.instant(fullCommonKey);

                // [] indicates failed translation
                if(commonTranslation !== `[${fullCommonKey}]`) {
                    replacements[commonKey] = commonTranslation;
                }
            }
        }

        // Bail if an entry somehow gets this far without replacements
        if(Object.keys(replacements).length === 0) {
            console.error('Missing i18n key:', commonKeys, updatedValue);
            break;
        }

        // Do the actual replacement transformation
        for (const [commonKey, translation] of Object.entries(replacements)) {
            updatedValue = updatedValue.replace(new RegExp(commonKey, 'g'), translation);
        }
    }

    // Special currency handling
    if(this.svcConfig.get('lang') === 'fr') {
        updatedValue = updatedValue.replace(NUMBER_REGEX, (n) =>
            n.replace(/[.,]/g, (punct) => punct === '.' ? ',' : '.')
        );
    }

    return updatedValue;
}
