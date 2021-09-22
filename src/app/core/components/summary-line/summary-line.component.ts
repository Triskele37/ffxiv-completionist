import { Component, Input, OnChanges } from '@angular/core';

import { DataGroup } from '../../../domain/DataGroup';

import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
    selector: 'xiv-summary-line',
    templateUrl: './summary-line.component.html',
    styleUrls: ['./summary-line.component.scss']
})
export class SummaryLineComponent implements OnChanges {
    @Input() group: DataGroup;
    @Input() isBig;

    completeBarStyle;
    percentComplete: string;
    tooltip: string;

    constructor(private svcNavigation: NavigationService) {
    }

    ngOnChanges(change) {
        if(change.group) {
            const { percentComplete } = this.group;

            this.completeBarStyle = { width: `${percentComplete}%` };
            this.percentComplete = percentComplete ? `${percentComplete}%` : 'N/A';
            this.updateTooltip();
        }
    }

    updateTooltip() {
        const { total, totalCompleted, totalExcluded, displayTotal } = this.group;

        const remaining = (total - totalExcluded) - totalCompleted;

        let tooltip = `${totalCompleted}/${displayTotal}\n`;
        tooltip += `${remaining.toFixed(0)} Remaining\n`;
        tooltip += `${totalExcluded} Excluded`;

        this.tooltip = tooltip;
    }

    onClick() {
        // Don't allow the stat bar summaries to modify breadcrumbs
        if(!this.isBig) {
            this.svcNavigation.pushCrumb(this.group.name);
        }
    }
}
