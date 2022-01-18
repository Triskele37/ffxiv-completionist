import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';

@Component({
    selector: 'xiv-show-all-section',
    templateUrl: './show-all.component.html',
    styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnChanges {
    @Input() group: DataGroup;

    tasks: Task[];

    ngOnChanges(changes: SimpleChanges) {
        if(changes.group) {
            this.tasks = diveForTasks(this.group);
        }
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
