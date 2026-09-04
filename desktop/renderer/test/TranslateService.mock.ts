import { TranslateService } from '@ngx-translate/core';
export { TranslateService };

export function createTranslateMock(): jest.Mocked<TranslateService> {
    return {
        setDefaultLang: jest.fn(),
        getDefaultLang: jest.fn(),
        use: jest.fn(),
        getTranslation: jest.fn(),
        setTranslation: jest.fn(),
        getLangs: jest.fn(),
        addLangs: jest.fn(),
        getParsedResult: jest.fn(),
        get: jest.fn(),
        getStreamOnTranslationChange: jest.fn(),
        stream: jest.fn(),
        instant: jest.fn(),
        set: jest.fn(),
        reloadLang: jest.fn(),
        resetLang: jest.fn(),
        getBrowserLang: jest.fn(),
        getBrowserCultureLang: jest.fn(),
    } as unknown as jest.Mocked<TranslateService>;
}
