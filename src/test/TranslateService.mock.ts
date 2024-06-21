export { TranslateService } from '@ngx-translate/core';

export function createTranslateMock() {
    return jasmine.createSpyObj([
        'setDefaultLang',
        'getDefaultLang',
        'use',
        'getTranslation',
        'setTranslation',
        'getLangs',
        'addLangs',
        'getParsedResult',
        'get',
        'getStreamOnTranslationChange',
        'stream',
        'instant',
        'set',
        'reloadLang',
        'resetLang',
        'getBrowserLang',
        'getBrowserCultureLang',
    ]);
}
