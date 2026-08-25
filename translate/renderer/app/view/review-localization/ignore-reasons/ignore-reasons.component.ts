import { Component, inject, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { DataService } from '@service/data.service';
import { NavigationService } from '@service/navigation.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'com-ignore-reasons',
    templateUrl: './ignore-reasons.component.html',
    styleUrls: ['./ignore-reasons.component.scss'],
    imports: [
        TranslatePipe,
        NgClass,
        FormsModule,
    ]
})
export class IgnoreReasonsComponent implements OnInit {
    svcTranslate = inject(TranslateService);
    svcData = inject(DataService);
    svcNav = inject(NavigationService);

    reasonKeys: string[] = [];
    customReason: string = '';

    ngOnInit() {
        this.reasonKeys = Object.keys(this.svcTranslate.instant('REASON'));
    }

    toggleReason(reasonKey: string): void {
        const issue = this.svcNav.currentIssue();

        const indexOf = issue.reasons?.indexOf(reasonKey) ?? -1;
        if(indexOf > -1) issue.reasons!.splice(indexOf, 1);
        else {
            if(!issue.reasons) issue.reasons = [];
            issue.reasons.push(reasonKey);
        }
    }

    onCustomReasonChange(): void {
        const issue = this.svcNav.currentIssue();

        const indexOf = issue.reasons?.findIndex(
            (r) => !this.reasonKeys.includes(r)
        ) ?? -1;

        if(indexOf > -1 && issue.reasons) {
            if(this.customReason !== issue.reasons[indexOf]) {
                issue.reasons[indexOf] = this.customReason;
            }
            else if(!this.customReason) {
                issue.reasons.splice(indexOf, 1);
            }
        }
        else {
            if(!issue.reasons) issue.reasons = [];
            issue.reasons.push(this.customReason);
        }
    }

    onSaveReasons(): void {
        const success = this.svcData.saveReasons(this.svcNav.currentIndex());
        if(success) this.svcNav.goToCurrent();
    }
}
