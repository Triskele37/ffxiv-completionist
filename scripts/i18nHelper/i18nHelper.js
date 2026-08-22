import { loadVerified } from './loadVerified.js';
import { compare_i18n } from './compare_i18n.js';
import { compareResources } from './compareResources.js';
import { logFinalCounts, setOutputLang } from './output.js';

/**
 * Dives resources to find untranslated fields
 * - Uses `verified_lang` files to exclude fields that should be the same
 * */
export function i18nHelper(lang1, lang2) {
    setOutputLang(lang2);
    loadVerified(lang2);

    compare_i18n(lang1, lang2);
    compareResources(lang1, lang2);

    logFinalCounts();
}
