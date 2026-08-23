import type {
    MissingTranslationHandler,
    MissingTranslationHandlerParams} from '@ngx-translate/core';
import {
    provideMissingTranslationHandler,
    provideTranslateService,
} from '@ngx-translate/core';
import { provideTranslateMultiHttpLoader } from '@ngx-translate/http-loader';

import { Lang } from '@constant';

/**
 * bootstrap config for translate service
 * - TODO resources will need to be dynamic for game agnostic support
 * */
export function provideCompletionistTranslateService() {
    return provideTranslateService({
        loader: provideTranslateMultiHttpLoader({
            resources: [
                { prefix: './assets/i18n/game/updates/', suffix: '.json' },
                { prefix: './assets/i18n/game/', suffix: '.json' },
                { prefix: './assets/i18n/updates/', suffix: '.json' },
                { prefix: './assets/i18n/', suffix: '.json' },
            ]
        }),
        missingTranslationHandler: provideMissingTranslationHandler(
            CompletionistMissingTranslationHandler
        ),
        fallbackLang: Lang.EN
    });
}

/**
 * Provide a log for translation key misses
 * */
class CompletionistMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        console.warn(`Missing translation key: '${params.key}'`);
        return `[${params.key}]`;
    }
}
