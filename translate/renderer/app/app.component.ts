import type { AfterViewInit, OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DataService } from '@service/data.service';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';
import { OptionsComponent } from '@view/options/options.component';
import { ReviewLocalizationComponent } from '@view/review-localization/review-localization.component';

@Component({
    selector: 'com-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        OptionsComponent,
        ReviewLocalizationComponent,
    ]
})
export class AppComponent implements OnInit, AfterViewInit {
    private translate = inject(TranslateService);
    private svcElectron = inject(ElectronService);
    svcData = inject(DataService);

    ngOnInit(): void {
        const lang = localStorage.getItem('lang');
        this.translate.use(lang || 'en')
        this.translate.get('NAME').subscribe((title) => document.title = `${title}`);
    }

    ngAfterViewInit(): void {
        // Hide the loading splash and show the main window
        this.svcElectron.sendSync(IPC_EVENT.APP_READY);
        this.svcElectron.setAppReady();
    }
}
