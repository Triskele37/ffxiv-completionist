import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// App
import { NavDrawerModule } from '@component/nav-drawer/nav-drawer.module';
import { StatBarModule } from '@component/stat-bar/stat-bar.module';
import { BreadcrumbsModule } from '@component/breadcrumbs/breadcrumbs.module';
import { MainContentModule } from './view/main-content/main-content.module';
import { ViewModule } from './view/view.module';

import { AppComponent } from './app.component';

// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader => new TranslateHttpLoader(http, './assets/i18n/', '.json');

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
        StatBarModule,
        BreadcrumbsModule,
        MainContentModule,
        ViewModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
