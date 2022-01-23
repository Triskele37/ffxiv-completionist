import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

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

    constructor(private svcNavigation: NavigationService) {
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
        const remaining = (total - totalExcluded) - totalCompleted;

        // Linebreaks are respected here
        this.tooltip = `${totalCompleted}/${displayTotal}
            ${remaining.toFixed(0)} Remaining
            ${totalExcluded} Excluded`;
    }

    onClick(): void {
        // Don't allow the stat bar summaries to modify breadcrumbs
        if(!this.isBig) this.svcNavigation.setSelectedGroup(this.group);
    }
}
