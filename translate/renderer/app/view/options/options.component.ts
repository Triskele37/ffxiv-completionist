import type { OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { Lang } from '@constant/Lang';
import { DataService } from '@service/data.service';

@Component({
    selector: 'com-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss'],
    imports: [
        TranslatePipe,
        NgClass,
    ]
})
export class OptionsComponent implements OnInit {
    private translate = inject(TranslateService);
    svcData = inject(DataService);

    visible: boolean = false;
    langs: Lang[] = [Lang.EN, Lang.FR];
    currentLang: Lang = Lang.EN;

    ngOnInit(): void {
        this.currentLang = this.translate.getCurrentLang() as Lang;
    }

    onChooseOutputLang(lang: Lang): void {
        localStorage.setItem('lang', lang);
        this.translate.use(lang);
        this.currentLang = lang;
    }

    onChooseSourceLang(lang: Lang): void {
        this.svcData.setSourceLang(lang);
    }

    onChooseTargetLang(lang: Lang): void {
        this.svcData.setTargetLang(lang);
    }
}
