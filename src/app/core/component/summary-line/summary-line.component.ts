import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { DataService } from '@data';
import { DataGroup } from '@model/DataGroup';
import { getGroupPath } from '@model/DataGroup/children/getGroupPath';
import { getPercentComplete } from '@model/DataGroup/completion/metrics';
import { getEffectiveTotal, getCompleted, getRemaining, getExcluded } from '@model/DataGroup/completion/counts';
import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'xiv-summary-line',
    templateUrl: './summary-line.component.html',
    styleUrls: ['./summary-line.component.scss'],
})
export class SummaryLineComponent implements OnChanges {
    @Input() group: DataGroup;
    @Input() isBig: boolean;
    @Input() showGroup: boolean;

    subscription: Subscription;
    percentComplete: string;
    tooltip: string;

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
        this.percentComplete = getPercentComplete(this.group);
        this.updateTooltip();
    }

    updateTooltip(): void {
        this.tooltip = '';

        if(this.showGroup) {
            const groupPath = getGroupPath(this.group);
            groupPath.shift(); // remove overall
            groupPath.pop(); // remove group name

            this.tooltip += `${groupPath.join(' > ')}\n`;
        }

        this.tooltip += this.group.name + '\n\n';

        const overallTotal = getEffectiveTotal(this.svcData.data);
        const effectiveTotal = getEffectiveTotal(this.group);
        const completed = Math.floor(getCompleted(this.group));
        const remaining = Math.ceil(getRemaining(this.group));
        const excluded = Math.floor(getExcluded(this.group));
        const weight = (effectiveTotal / overallTotal) * 100;

        // Build tooltip line by line
        this.tooltip += completed.toLocaleString();
        this.tooltip += ` / ${effectiveTotal.toLocaleString()}\n`;
        this.tooltip += this.translate.instant('GENERAL.REMAINING');
        this.tooltip += `: ${remaining.toLocaleString()}\n`;
        this.tooltip += this.translate.instant('GENERAL.EXCLUDED');
        this.tooltip += `: ${excluded.toLocaleString()}`;

        // Don't add weight for overall
        if(weight !== 100) {
            this.tooltip += '\n\n';
            this.tooltip += this.translate.instant('GENERAL.WEIGHT');
            this.tooltip += `: ${weight.toFixed(3)}%`;
        }
    }

    onClick(): void {
        // Don't allow the stat bar summaries to modify breadcrumbs
        if(!this.isBig) this.svcNavigation.setSelectedGroup(this.group);
    }

}
