import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { APP_CONFIG } from './env/env';
import { provideCompletionistPrimeNG } from './bootstrap/primeNg';
import { provideNgIcons } from './bootstrap/provideIcons';
import { provideCompletionistTranslateService } from './bootstrap/translateService';
import { provideCompletionistAppInitializer } from './bootstrap/appInitializer';

if(APP_CONFIG.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideZoneChangeDetection(),
        ...provideCompletionistPrimeNG(),
        ...provideNgIcons(),
        provideCompletionistTranslateService(),
        provideHttpClient(withInterceptors([])),
        provideCompletionistAppInitializer(),
    ]
}).catch((error: any) => {
    console.error(error);
});
