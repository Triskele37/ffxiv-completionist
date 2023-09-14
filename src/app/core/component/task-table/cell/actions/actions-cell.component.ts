import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Task } from '@model/Task';
import { ConfigStoreService } from '@service/store/config-store.service';

@Component({
    selector: 'xiv-actions-cell',
    templateUrl: './actions-cell.component.html',
    styleUrls: ['./actions-cell.component.scss', './action.scss']
})
export class ActionsCellComponent implements OnInit, OnDestroy {
    @Input() task: Task;
    @Input() rowIndex: number;

    private storeSub: Subscription;
    showCopyId: boolean;

    expanded: boolean;

    constructor(
        private svcConfigStore: ConfigStoreService
    ) {
    }

    ngOnInit() {
        this.storeSub = this.svcConfigStore.updated$.subscribe((data) => {
            this.showCopyId = data.isAdmin;
        });
    }

    ngOnDestroy() {
        this.storeSub?.unsubscribe();
    }

    onCloseActions(): void {
        this.expanded = false;
    }

    copyTaskId(): void {
        const path = this.task.fullStorageKey.replace('overall.', '');
        navigator.clipboard.writeText(path);
    }

}
