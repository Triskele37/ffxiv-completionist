import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Popover } from 'primeng/popover';
import { Tooltip } from 'primeng/tooltip';

import type { DataGroup } from '@model/DataGroup';
import { ContentLinkPipe } from '@pipe/content-link.pipe';
import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'com-history-overlay',
    templateUrl: './history-overlay.component.html',
    styleUrls: ['./history-overlay.component.scss'],
    imports: [
        ButtonDirective,
        ContentLinkPipe,
        Popover,
        Tooltip,
        TranslatePipe
    ]
})
export class HistoryOverlayComponent {
    svcNavigation = inject(NavigationService);


    clearHistory(): void {
        this.svcNavigation.clearHistory();
    }

    removeHistory(group: DataGroup): void {
        this.svcNavigation.removeHistory(group);
    }
}
