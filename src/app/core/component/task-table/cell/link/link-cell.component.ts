import { Component, Input } from '@angular/core';

import { Task } from '@domain/Task';
import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'xiv-link-cell',
    templateUrl: './link-cell.component.html'
})
export class LinkCellComponent {
    @Input() task: Task;

    constructor(private svcNavigation: NavigationService) {
    }

    onClickLink(): void {
        this.svcNavigation.setBreadcrumbs(this.task._parent.groupPath);
    }
}
