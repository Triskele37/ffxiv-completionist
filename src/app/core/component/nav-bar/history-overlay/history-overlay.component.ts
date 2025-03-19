import { Component } from '@angular/core';

import { DataGroup } from '@model/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'xiv-history-overlay',
    templateUrl: './history-overlay.component.html',
    styleUrls: ['./history-overlay.component.scss']
})
export class HistoryOverlayComponent {
    constructor(public svcNavigation: NavigationService) {
    }

    clearHistory(): void {
        this.svcNavigation.clearHistory();
    }

    removeHistory(group: DataGroup): void {
        this.svcNavigation.removeHistory(group);
    }
}
