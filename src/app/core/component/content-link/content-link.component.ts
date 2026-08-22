import { Component, Input, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';

import { ChainViewerService } from '@component/chain-viewer/chain-viewer.service';
import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { ContentLinkPipe } from '@pipe/content-link.pipe';
import { NavigationService } from '@service/navigation/navigation.service';

//TODO: potentially move "multiple" piece of com-links-cell into here
@Component({
    selector: 'com-content-link',
    templateUrl: './content-link.component.html',
    styleUrls: ['./content-link.component.scss'],
    imports: [
        ButtonDirective,
        ContentLinkPipe,
        Tooltip,
        TranslatePipe
    ]
})
export class ContentLinkComponent {
    private svcNavigation = inject(NavigationService);
    private svcChainViewer = inject(ChainViewerService);

    @Input({ required: true }) content!: DataGroup | Task;
    @Input() trimGroup: DataGroup | undefined;
    @Input() nameOnly: boolean = false;

    onClickLink(): void {
        if(this.content.dataType === 'Task' && this.svcChainViewer.task()) {
            this.svcChainViewer.changeTargetTask(this.content);
        }
        else {
            this.svcNavigation.setSelectedContent(this.content);
        }
    }
}
