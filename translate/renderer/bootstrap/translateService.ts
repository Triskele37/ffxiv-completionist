import type {
    MissingTranslationHandler,
    MissingTranslationHandlerParams
} from '@ngx-translate/core';
import {
    provideMissingTranslationHandler,
    provideTranslateService,
} from '@ngx-translate/core';
import { provideTranslateMultiHttpLoader } from '@ngx-translate/http-loader';

import { Lang } from '@constant/Lang';

/**
 * bootstrap config for translate service
 * */
export function provideCompletionistTranslateService() {
    return provideTranslateService({
        loader: provideTranslateMultiHttpLoader({
            resources: [
                { prefix: './assets/i18n/', suffix: '.json' },
            ]
        }),
        missingTranslationHandler: provideMissingTranslationHandler(
            TranslateHelperMissingTranslationHandler
        ),
        fallbackLang: Lang.EN
    });
}

/**
 * Provide a log for translation key misses
 * */
class TranslateHelperMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        console.warn(`Missing translation key: '${params.key}'`);
        return `[${params.key}]`;
    }
}
