import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { DataGroup } from '../../domain/DataGroup';
import { Task } from '../../domain/Task';

@Component({
    selector: 'xiv-show-all-section',
    templateUrl: './show-all.component.html',
    styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnChanges {
    @Input() group: DataGroup;
    allChildTasks: { [key: string]: Task };

    ngOnChanges(changes: SimpleChanges) {
        if(changes.group) {
            this.allChildTasks = diveForTasks(this.group);
        }
    }
}

function diveForTasks(group) {
    const tasks = {};

    // add current group's tasks
    for(const id in group.tasks) {
        if(group.tasks.hasOwnProperty(id)) {
            tasks[id] = group.tasks[id];
        }
    }

    // dive for more child tasks
    (group.subGroups || []).forEach((subGroup) => {
        const subGroupTasks = diveForTasks(subGroup);

        for(const id in subGroupTasks) {
            if(subGroupTasks.hasOwnProperty(id)) {
                let prefix = 0;
                while(!!tasks[`x${prefix}${id}`]) prefix++;
                tasks[`x${prefix}${id}`] = subGroupTasks[id];
            }
        }
    });

    return tasks;
}
