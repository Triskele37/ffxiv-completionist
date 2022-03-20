import { Component, Input } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'xiv-link-cell',
    templateUrl: './link-cell.component.html'
})
export class LinkCellComponent {
    @Input() task: Task;
    @Input() trimGroup: DataGroup;

    @Input() group: DataGroup;

    constructor(
        private svcNavigation: NavigationService
    ) {
    }

    onClickLink(): void {
        if(this.group) {
            this.svcNavigation.setSelectedGroup(this.group);
        }
        else if(this.task) {
            this.svcNavigation.setSelectedTask(this.task);
        }
    }

}
