import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { APP_CONFIG } from './env/env';
import { provideCompletionistTranslateService } from './bootstrap/translateService';

if(APP_CONFIG.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideZoneChangeDetection(),
        provideCompletionistTranslateService(),
        provideHttpClient(withInterceptors([])),
    ]
}).catch((error: any) => {
    console.error(error);
});
