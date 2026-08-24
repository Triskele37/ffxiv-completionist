import { OnInit, ViewChild } from '@angular/core';
import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

import { DataService } from '@service/data.service';

@Component({
    selector: 'com-review-localization',
    templateUrl: './review-localization.component.html',
    styleUrls: ['./review-localization.component.scss'],
    imports: [
        TranslatePipe,
        NgClass,
    ]
})
export class ReviewLocalizationComponent implements OnInit {
    svcData = inject(DataService);

    currentIndex = 0;

    reasons: Record<string, boolean> = {};
    reasonsArr: string[] = [];

    @ViewChild('customReason') customReason: HTMLInputElement | undefined;

    ngOnInit(): void {
    }

    goToPreviousIssue(): void {
        if(this.currentIndex <= 0) {
            this.currentIndex = this.svcData.issues().length - 1;
        }
        else {
            this.currentIndex--;
        }
    }

    goToNextIssue(): void {
        if(this.currentIndex + 1 >= this.svcData.issues().length) {
            this.currentIndex = 0;
        }
        else {
            this.currentIndex++;
        }
    }

    toggleReason(reasonKey: string): void {
        this.reasons[reasonKey] = !this.reasons[reasonKey];
        this.updateReasonsArr();
    }

    onCustomReasonChange(): void {
        this.updateReasonsArr();
    }

    updateReasonsArr(): void {
        this.reasonsArr = Object.entries(this.reasons)
            .map(([key, value]) => value ? key : null)
            .filter(Boolean) as string[];

        if(this.customReason?.value) {
            this.reasonsArr.push(this.customReason.value);
        }
    }

    saveReasons(): void {
        const success = this.svcData.saveReasons(this.currentIndex, this.reasonsArr);
        if(success) {
            this.currentIndex--;
            this.goToNextIssue();
        }
    }
}
