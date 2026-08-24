import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

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
export class IgnoreReasonsComponent {
    svcData = inject(DataService);
    svcNav = inject(NavigationService);

    reasons: Record<string, boolean> = {};
    reasonsArr: string[] = [];

    customReason: string = '';

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

        if(this.customReason) this.reasonsArr.push(this.customReason);
    }

    onSaveReasons(): void {
        const success = this.svcData.saveReasons(this.svcNav.currentIndex(), this.reasonsArr);
        if(success) this.svcNav.goToCurrent();
    }
}
