import { Component, Input, signal, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { InputNumber } from 'primeng/inputnumber';

import { Task } from '@model/Task';

import { ChainViewerService } from './chain-viewer.service';
import { ChainViewerNodeComponent } from './chain-viewer-node/chain-viewer-node.component';
import { FormsModule } from '@angular/forms';
import { ContentLinkComponent } from '@component/content-link/content-link.component';

@Component({
    selector: 'com-chain-viewer',
    templateUrl: './chain-viewer.component.html',
    styleUrls: ['./chain-viewer.component.scss'],
    imports: [
        TranslatePipe,
        ButtonDirective,
        InputNumber,

        ChainViewerNodeComponent,
        FormsModule,
        ContentLinkComponent
    ]
})
export class ChainViewerComponent {
    svcChainViewer = inject(ChainViewerService);

    @Input({ required: true }) task!: Task;

    inputMaxDepth = 3;
    maxDepth = signal(this.inputMaxDepth);

    updateMaxDepth(): void {
        this.maxDepth.set(this.inputMaxDepth);
    }

    onCloseViewer(): void {
        this.svcChainViewer.closeChainViewer();
    }
}
