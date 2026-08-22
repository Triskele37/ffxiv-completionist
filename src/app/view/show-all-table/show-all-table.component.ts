import { Component, Input, OnChanges, OnDestroy, SimpleChanges, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TaskTableComponent } from '@component/task-table/task-table.component';
import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';

@Component({
    selector: 'com-show-all-table',
    templateUrl: './show-all-table.component.html',
    styleUrls: ['./show-all-table.component.scss'],
    imports: [
        TaskTableComponent
    ]
})
export class ShowAllTableComponent implements OnChanges, OnDestroy {
    @Input({ required: true }) group!: DataGroup;

    tasks = signal<Task[]>([]);

    constructor(private translate: TranslateService) {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.group) {
            this.clean(changes.group.previousValue);
            this.clean(this.group);

            this.tasks.set(diveForTasks(this.group));

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
        if(group?.columns?.[0].key === 'contentLink') {
            group.columns.shift();
        }
    }
}

// Return a list of every task nested under the given group
function diveForTasks(group: DataGroup): Task[] {
    // add current group's tasks
    const tasks: Task[] = [...group.tasks];

    // dive for more child tasks
    group.subGroups?.forEach((subGroup) => {
        if(!subGroup) return;
        tasks.push(...diveForTasks(subGroup));
    });

    return tasks;
}
