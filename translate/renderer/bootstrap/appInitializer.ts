import { inject, provideAppInitializer } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

/**
 * Ensure that app dependencies are loaded before allowing the app to init
 * - App & i18n must be loaded
 * */
export function provideTranslateAppInitializer() {
    return provideAppInitializer(() => {
        const translate = inject(TranslateService);

        const lang = localStorage.getItem('lang') ?? 'en';
        return firstValueFrom(translate.use(lang));
    });
}
