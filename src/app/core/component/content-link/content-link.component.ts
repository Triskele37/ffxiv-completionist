import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { NavigationService } from '@service/navigation/navigation.service';

//TODO: potentially move "multiple" piece of xiv-links-cell into here
@Component({
    selector: 'xiv-content-link',
    templateUrl: './content-link.component.html'
})
export class ContentLinkComponent implements OnChanges {
    @Input() content: DataGroup | Task;
    @Input() trimGroup: DataGroup;
    @Input() nameOnly: boolean;

    // Used in template
    isGroup: boolean;

    constructor(private svcNavigation: NavigationService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.content) {
            this.isGroup = this.content instanceof DataGroup;
        }
    }

    onClickLink(): void {
        if(this.content instanceof DataGroup) {
            this.svcNavigation.setSelectedGroup(this.content);
        }
        else {
            this.svcNavigation.setSelectedTask(this.content);
        }
    }

}
