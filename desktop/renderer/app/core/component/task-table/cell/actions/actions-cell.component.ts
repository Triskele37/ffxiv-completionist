import { Component, Input, signal, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';

import * as TaskActionComponent from '@component/task-table/actions/task';
import { EditNoteActionComponent } from '@component/task-table/actions/common';
import type { Task } from '@model/Task';
import { ConfigStoreService } from '@service/store/config-store.service';
import { TableService } from '@service/table/table.service';

@Component({
    selector: 'com-actions-cell',
    templateUrl: './actions-cell.component.html',
    styleUrls: ['./actions-cell.component.scss', '../../actions/action.scss'],
    imports: [
        TranslatePipe,
        NgIcon,
        ButtonDirective,
        Tooltip,

        TaskActionComponent.BookmarkActionComponent,
        TaskActionComponent.ConsoleGamesActionComponent,
        TaskActionComponent.DragActionComponent,
        EditNoteActionComponent,
        TaskActionComponent.GamerEscapeActionComponent,
        TaskActionComponent.GarlandActionComponent,
        TaskActionComponent.ViewChainsActionComponent,
        TaskActionComponent.CopyIdActionComponent
    ]
})
export class ActionsCellComponent {
    private svcConfigStore = inject(ConfigStoreService);
    svcTable = inject(TableService);

    @Input({ required: true }) task!: Task;
    @Input({ required: true }) rowIndex!: number;

    showCopyId = signal(false);
    expanded = signal(false);

    constructor() {
        this.showCopyId.set(this.svcConfigStore.data?.isAdmin ?? false);

        this.svcConfigStore.updated$
            .pipe(takeUntilDestroyed())
            .subscribe((data) => this.showCopyId.set(!!data.isAdmin));
    }

    onDialClick(): void {
        this.expanded.set(!this.expanded());
    }

    onCloseActions(): void {
        this.expanded.set(false);
    }
}
