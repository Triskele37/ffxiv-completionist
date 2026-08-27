import type { OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Component, Input, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TaskTableComponent } from '@component/task-table/task-table.component';
import type { DataGroup } from '@model/DataGroup';

@Component({
    selector: 'com-show-all-table',
    templateUrl: './show-all-table.component.html',
    styleUrls: ['./show-all-table.component.scss'],
    imports: [
        TaskTableComponent
    ]
})
export class ShowAllTableComponent implements OnChanges, OnDestroy {
    private translate = inject(TranslateService);

    @Input({ required: true }) group!: DataGroup;

    ngOnChanges(changes: SimpleChanges<ShowAllTableComponent>): void {
        if(changes.group) {
            this.clean(changes.group.previousValue);
            this.clean(this.group);

            this.group.showAllTasks = true;

            // Add an extra column containing the group's link
            this.group.columns?.unshift({
                key: 'contentLink',
                header: this.translate.instant('APP.TABLE.GROUP'),
                groupLink: true,
                trimGroup: true,
            });
        }
    }

    ngOnDestroy(): void {
        this.clean(this.group);
    }

    // Remove the extra link column
    clean(group: DataGroup): void {
        if(!group) return;

        delete group.showAllTasks;

        if(group.columns?.[0].key === 'contentLink') {
            group.columns.shift();
        }
    }
}
