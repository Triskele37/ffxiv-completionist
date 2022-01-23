import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'xiv-summary-line',
    templateUrl: './summary-line.component.html',
    styleUrls: ['./summary-line.component.scss'],
})
export class SummaryLineComponent implements OnChanges {
    @Input() group: DataGroup;
    @Input() isBig: boolean;

    subscription: Subscription;
    percentComplete: string;
    tooltip: string;

    constructor(
        private svcData: DataService,
        private svcNavigation: NavigationService
    ) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes.group) {
            this.update();
            this.subscription?.unsubscribe();
            this.subscription = this.group.onUpdated$.subscribe(this.update.bind(this));
        }
    }

    update() {
        this.percentComplete = this.group.percentComplete;
        this.updateTooltip();
    }

    private updateTooltip(): void {
        const { total, totalCompleted, totalExcluded, displayTotal } = this.group;
        const remaining: number = (total - totalExcluded) - totalCompleted;
        const weight: number = (displayTotal / this.svcData.data.displayTotal) * 100;

        // Build tooltip line by line
        this.tooltip = `${totalCompleted} / ${displayTotal}`;
        this.tooltip += `\nRemaining: ${remaining.toFixed(0)}`;
        this.tooltip += `\nExcluded: ${totalExcluded}`;

        // Don't add weight for overall
        if(weight !== 100) this.tooltip += `\n\nWeight: ${weight.toFixed(3)}%`;
    }

    onClick(): void {
        // Don't allow the stat bar summaries to modify breadcrumbs
        if(!this.isBig) this.svcNavigation.setSelectedGroup(this.group);
    }
}
