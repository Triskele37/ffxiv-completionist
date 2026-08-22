import { Component, Input, OnChanges, SimpleChanges, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';
import { Subscription } from 'rxjs';

import { DataService } from '@data';
import { DataGroup } from '@model/DataGroup';
import { getGroupPath } from '@model/DataGroup/children/getGroupPath';
import { getPercentComplete } from '@model/DataGroup/completion/metrics';
import { getEffectiveTotal, getCompleted, getRemaining, getExcluded } from '@model/DataGroup/completion/counts';
import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'com-summary-line',
    templateUrl: './summary-line.component.html',
    styleUrls: ['./summary-line.component.scss'],
    imports: [
        NgClass,
        Tooltip
    ]
})
export class SummaryLineComponent implements OnChanges {
    @Input({ required: true }) group!: DataGroup;
    @Input() isBig: boolean = false;
    @Input() showGroup: boolean = false;

    subscription: Subscription | undefined;
    percentComplete = signal<string | null>(null);
    tooltip = signal('');

    constructor(
        private translate: TranslateService,
        private svcData: DataService,
        private svcNavigation: NavigationService
    ) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.group) {
            this.update();
            this.subscription?.unsubscribe();
            this.subscription = this.group.onUpdated$.subscribe(this.update.bind(this));
        }
    }

    update(): void {
        this.percentComplete.set(getPercentComplete(this.group));
        this.updateTooltip();
    }

    updateTooltip(): void {
        let tooltip = '';

        if(this.showGroup) {
            const groupPath = getGroupPath(this.group);
            groupPath.shift(); // remove overall
            groupPath.pop(); // remove group name

            tooltip += `${groupPath.join(' > ')}\n`;
        }

        tooltip += this.group.name + '\n\n';

        const overallTotal = getEffectiveTotal(this.svcData.data);
        const effectiveTotal = getEffectiveTotal(this.group);
        const completed = Math.floor(getCompleted(this.group));
        const remaining = Math.ceil(getRemaining(this.group));
        const excluded = Math.floor(getExcluded(this.group));
        const weight = (effectiveTotal / overallTotal) * 100;

        // Build tooltip line by line
        tooltip += completed.toLocaleString();
        tooltip += ` / ${effectiveTotal.toLocaleString()}\n`;
        tooltip += this.translate.instant('APP.STATISTICS.REMAINING');
        tooltip += `: ${remaining.toLocaleString()}\n`;
        tooltip += this.translate.instant('APP.STATISTICS.EXCLUDED');
        tooltip += `: ${excluded.toLocaleString()}`;

        // Don't add weight for overall
        if(weight !== 100) {
            tooltip += '\n\n';
            tooltip += this.translate.instant('APP.STATISTICS.WEIGHT');
            tooltip += `: ${weight.toFixed(3)}%`;
        }

        this.tooltip.set(tooltip);
    }

    onClick(): void {
        // Don't allow the stat bar summaries to modify breadcrumbs
        if(!this.isBig) this.svcNavigation.setSelectedGroup(this.group);
    }

}
