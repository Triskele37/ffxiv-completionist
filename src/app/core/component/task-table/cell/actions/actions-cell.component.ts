import type { OnInit, OnDestroy} from '@angular/core';
import { Component, Input, signal, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';
import type { Subscription } from 'rxjs';

import type { Task } from '@model/Task';
import { ConfigStoreService } from '@service/store/config-store.service';
import { ChainViewerService } from '@component/chain-viewer/chain-viewer.service';

import { BookmarkActionComponent } from './bookmark/bookmark-action.component';
import { ConsoleGamesActionComponent } from './console-games/console-games-action.component';
import { DragActionComponent } from './drag/drag-action.component';
import { GamerEscapeActionComponent } from './gamer-escape/gamer-escape-action.component';
import { GarlandActionComponent } from './garland/garland-action.component';

@Component({
    selector: 'com-actions-cell',
    templateUrl: './actions-cell.component.html',
    styleUrls: ['./actions-cell.component.scss', './action.scss'],
    imports: [
        ButtonDirective,
        Tooltip,
        TranslatePipe,

        BookmarkActionComponent,
        ConsoleGamesActionComponent,
        DragActionComponent,
        GamerEscapeActionComponent,
        GarlandActionComponent
    ]
})
export class ActionsCellComponent implements OnInit, OnDestroy {
    private svcConfigStore = inject(ConfigStoreService);
    private svcChainViewer = inject(ChainViewerService);

    @Input({ required: true }) task!: Task;
    @Input({ required: true }) rowIndex!: number;

    private storeSub: Subscription | undefined;

    showCopyId = signal(false);
    expanded = signal(false);

    constructor() {
        this.showCopyId.set(this.svcConfigStore.data?.isAdmin ?? false);
    }

    ngOnInit() {
        this.storeSub = this.svcConfigStore.updated$.subscribe((data) => {
            this.showCopyId.set(data.isAdmin);
        });
    }

    ngOnDestroy() {
        this.storeSub?.unsubscribe();
    }

    onDialClick(): void {
        this.expanded.set(!this.expanded());
    }

    onCloseActions(): void {
        this.expanded.set(false);
    }

    onOpenChainViewer(): void {
        this.svcChainViewer.openChainViewer(this.task);
    }

    copyTaskId(): void {
        const path = this.task.fullStorageKey.replace('overall.', '');
        navigator.clipboard.writeText(path);
    }

}
