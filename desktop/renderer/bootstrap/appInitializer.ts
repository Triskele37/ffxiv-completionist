import { inject, provideAppInitializer } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

import { ConfigStoreService } from '@service/store/config-store.service';

/**
 * Ensure that app dependencies are loaded before allowing the app to init
 * - App & selected game translations must be loaded
 * */
export function provideCompletionistAppInitializer() {
    return provideAppInitializer(() => {
        const svcConfig = inject(ConfigStoreService);
        const translate = inject(TranslateService);
        return firstValueFrom(translate.use(svcConfig.get('lang')));
    });
}
