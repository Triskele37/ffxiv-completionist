import { Component, signal, inject, effect } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';

import { ConfigStoreService } from '@service/store/config-store.service';
import { TableService } from '@service/table/table.service';

import { EditNoteActionComponent } from '@component/task-table/actions/common';
import * as GroupActionComponent from '@component/task-table/actions/group';

@Component({
    selector: 'com-actions-group',
    templateUrl: './actions-group.component.html',
    styleUrls: ['./actions-group.component.scss', '../../../actions/action.scss'],
    imports: [
        NgIcon,
        TranslatePipe,
        ButtonDirective,
        Tooltip,

        EditNoteActionComponent,
        GroupActionComponent.BookmarkGroupActionComponent,
        GroupActionComponent.CollapseAllActionComponent,
        GroupActionComponent.ExpandAllActionComponent,
        GroupActionComponent.CopyDataActionComponent,
    ]
})
export class ActionsGroupComponent {
    private svcConfigStore = inject(ConfigStoreService);
    svcTable = inject(TableService);

    expanded = signal(false);
    note = signal<string | undefined>(undefined);

    // Dev properties
    isDev = signal(false);

    constructor() {
        this.isDev.set(this.svcConfigStore.data?.isAdmin ?? false);

        this.svcConfigStore.updated$
            .pipe(takeUntilDestroyed())
            .subscribe((data) => this.isDev.set(!!data.isAdmin));

        effect(() => {
            void this.svcTable.group();
            this.expanded.set(false);
        });
    }

    onDialClick(): void {
        this.expanded.set(!this.expanded());
    }

    onCloseActions(): void {
        this.expanded.set(false);
    }
}
