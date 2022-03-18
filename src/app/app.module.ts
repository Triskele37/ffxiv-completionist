import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// NG Translate
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// App
import { NavDrawerModule } from '@component/nav-drawer/nav-drawer.module';
import { SearchBarModule } from '@component/search-bar/search-bar.module';
import { StatBarModule } from '@component/stat-bar/stat-bar.module';
import { BreadcrumbsModule } from '@component/breadcrumbs/breadcrumbs.module';
import { MainContentModule } from './view/main-content/main-content.module';
import { ViewModule } from './view/view.module';

import { AppComponent } from './app.component';
import { ConfigStoreService } from '@service/store/config-store.service';

// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader => new TranslateHttpLoader(http, './assets/i18n/', '.json');

// Ensure translations are loaded before allowing the app to load
function appInitializerFactory(svcConfig: ConfigStoreService, translate: TranslateService) {
    return () => {
        translate.setDefaultLang('en');
        return translate.use(svcConfig.store.get('lang')).toPromise();
    };
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        NavDrawerModule,
        SearchBarModule,
        StatBarModule,
        BreadcrumbsModule,
        MainContentModule,
        ViewModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializerFactory,
            deps: [ConfigStoreService, TranslateService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
