import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NavDrawerModule } from './core/components/nav-drawer/nav-drawer.module';
import { StatBarModule } from './core/components/stat-bar/stat-bar.module';
import { BreadcrumbsModule } from './core/components/breadcrumbs/breadcrumbs.module';
import { MainContentModule } from './view/main-content/main-content.module';

import { AppComponent } from './app.component';

// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader => new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
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
        StatBarModule,
        BreadcrumbsModule,
        MainContentModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
