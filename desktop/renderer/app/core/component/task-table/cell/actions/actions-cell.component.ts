import { Component, Input, signal, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';

import { TaskLink } from '@common/Features';
import { EditNoteActionComponent } from '@component/task-table/actions/common';
import type { Task } from '@model/Task';
import { ConfigStoreService } from '@service/store/config-store.service';
import { ElectronService } from '@service/electron/electron.service';
import { TableService } from '@service/table/table.service';

import { BookmarkActionComponent } from '@component/task-table/actions/task/bookmark-action.component';
import { CopyIdActionComponent } from '@component/task-table/actions/task/copy-id-action.component';
import { DragActionComponent } from '@component/task-table/actions/task/drag-action.component';
import { TaskLinkActionComponent } from '@component/task-table/actions/task/task-link-action.component';
import { ViewChainsActionComponent } from '@component/task-table/actions/task/view-chains-action.component';

@Component({
    selector: 'com-actions-cell',
    templateUrl: './actions-cell.component.html',
    styleUrls: ['./actions-cell.component.scss', '../../actions/action.scss'],
    imports: [
        NgClass,
        TranslatePipe,
        NgIcon,
        ButtonDirective,
        Tooltip,

        BookmarkActionComponent,
        DragActionComponent,
        EditNoteActionComponent,
        TaskLinkActionComponent,
        ViewChainsActionComponent,
        CopyIdActionComponent
    ]
})
export class ActionsCellComponent {
    private svcConfigStore = inject(ConfigStoreService);
    private svcElectron = inject(ElectronService);
    svcTable = inject(TableService);

    @Input({ required: true }) task!: Task;
    @Input({ required: true }) rowIndex!: number;

    static taskLinks?: TaskLink[];
    taskLinks: TaskLink[] = [];

    showCopyId = signal(false);
    expanded = signal(false);

    constructor() {
        this.showCopyId.set(this.svcConfigStore.data?.isAdmin ?? false);

        if(!ActionsCellComponent.taskLinks) {
            ActionsCellComponent.taskLinks = this.svcElectron.getFeature('task-links');
        }

        this.taskLinks = ActionsCellComponent.taskLinks ?? [];

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
