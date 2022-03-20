import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';

@Component({
    selector: 'xiv-show-all-section',
    templateUrl: './show-all.component.html',
    styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnChanges, OnDestroy {
    @Input() group: DataGroup;

    tasks: Task[];

    ngOnChanges(changes: SimpleChanges) {
        if(changes.group) {
            this.clean(changes.group.previousValue);
            this.clean(this.group);

            this.tasks = diveForTasks(this.group);

            this.group.columns.unshift({
                key: 'contentLink',
                header: 'Group'
            });
        }
    }

    ngOnDestroy() {
        this.clean(this.group);
    }

    clean(group: DataGroup): void {
        if(group?.columns[0].key === 'contentLink') group.columns.shift();
    }
}

function diveForTasks(group: DataGroup): Task[] {
    // add current group's tasks
    const tasks: Task[] = [...group.tasks];

    // dive for more child tasks
    group.subGroups?.forEach((subGroup) => {
        tasks.push(...diveForTasks(subGroup));
    });

    return tasks;
}
