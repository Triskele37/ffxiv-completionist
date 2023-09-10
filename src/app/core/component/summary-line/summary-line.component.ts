import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { DataService } from '@data';
import { DataGroup } from '@model/DataGroup';
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
        this.percentComplete = this.group.percentComplete;
        this.updateTooltip();
    }

    updateTooltip(): void {
        this.tooltip = '';

        if(this.showGroup) {
            const groupPath = this.group.groupPath;
            groupPath.shift(); // remove overall
            groupPath.pop(); // remove group name

            this.tooltip += `${groupPath.join(' > ')}\n`;
        }

        this.tooltip += this.group.name + '\n\n';

        const { total, totalCompleted, totalExcluded, displayTotal } = this.group;
        const remaining = Math.ceil((total - totalExcluded) - totalCompleted);
        const weight = (displayTotal / this.svcData.data.displayTotal) * 100;

        // Build tooltip line by line
        this.tooltip += Math.floor(totalCompleted).toLocaleString();
        this.tooltip += ` / ${displayTotal.toLocaleString()}\n`;
        this.tooltip += this.translate.instant('GENERAL.REMAINING');
        this.tooltip += `: ${remaining.toLocaleString()}\n`;
        this.tooltip += this.translate.instant('GENERAL.EXCLUDED');
        this.tooltip += `: ${totalExcluded.toLocaleString()}`;

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
