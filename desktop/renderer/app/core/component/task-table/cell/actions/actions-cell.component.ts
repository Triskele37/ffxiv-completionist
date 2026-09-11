import type { OnInit, OnDestroy } from '@angular/core';
import { Component, Input, signal, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';
import type { Subscription } from 'rxjs';

import type { Task } from '@model/Task';
import { ConfigStoreService } from '@service/store/config-store.service';
import { TableService } from '@service/table/table.service';

import { BookmarkActionComponent } from './bookmark/bookmark-action.component';
import { ConsoleGamesActionComponent } from './console-games/console-games-action.component';
import { CopyIdActionComponent } from './copy-id/copy-id-action.component';
import { DragActionComponent } from './drag/drag-action.component';
import { EditNoteActionComponent } from './edit-note/edit-note-action.component';
import { GamerEscapeActionComponent } from './gamer-escape/gamer-escape-action.component';
import { GarlandActionComponent } from './garland/garland-action.component';
import { ViewChainsActionComponent } from './view-chains/view-chains-action.component';

@Component({
    selector: 'com-actions-cell',
    templateUrl: './actions-cell.component.html',
    styleUrls: ['./actions-cell.component.scss', './action.scss'],
    imports: [
        TranslatePipe,
        NgIcon,
        ButtonDirective,
        Tooltip,

        BookmarkActionComponent,
        ConsoleGamesActionComponent,
        DragActionComponent,
        EditNoteActionComponent,
        GamerEscapeActionComponent,
        GarlandActionComponent,
        ViewChainsActionComponent,
        CopyIdActionComponent
    ]
})
export class ActionsCellComponent implements OnInit, OnDestroy {
    private svcConfigStore = inject(ConfigStoreService);
    svcTable = inject(TableService);

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
            this.showCopyId.set(!!data.isAdmin);
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

}
