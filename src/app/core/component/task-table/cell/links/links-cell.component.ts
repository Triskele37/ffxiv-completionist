import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Task } from '@domain/Task';
import { DataService } from '@data';
import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'xiv-links-cell',
    templateUrl: './links-cell.component.html',
    styleUrls: ['./links-cell.component.scss']
})
export class LinksCellComponent implements OnChanges {
    @Input() taskPaths: string | string[];
    tasks: Task[] = []; // actually (Task | string)[]

    constructor(
        private svcData: DataService,
        private svcNavigation: NavigationService
    ) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes.taskPaths?.currentValue) {
            this.compileLinkedTasks();
        }
    }

    onClickLink(task: Task): void {
        this.svcNavigation.setSelectedTask(task);
    }

    compileLinkedTasks(): void {
        if(Array.isArray(this.taskPaths)) {
            this.tasks = this.taskPaths.map((path) => this.getTaskFromPath(path));
        }
        else {
            this.tasks = [this.getTaskFromPath(this.taskPaths)];
        }
    }

    getTaskFromPath(pathOrValue: string): any { //Task | string {
        if(pathOrValue?.includes('.')) {
            return this.svcData.data.getTaskByPath(pathOrValue) || pathOrValue;
        }
        else {
            // parameter is a raw value
            return pathOrValue;
        }
    }

}
