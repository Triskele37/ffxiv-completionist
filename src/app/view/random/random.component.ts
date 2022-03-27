import { Component } from '@angular/core';

import { Completion } from '@constant';
import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';

// Cache the last roll for if returning to page
let lastRandom: Task[] = [];

@Component({
    selector: 'xiv-random',
    templateUrl: './random.component.html',
    styleUrls: ['./random.component.scss']
})
export class RandomComponent {
    randomCount: number = 10;
    randomTasks: Task[] = [];

    constructor(private svcData: DataService) {
        if(lastRandom.length) this.randomTasks = lastRandom;
    }

    onGenerateRandomClick(): void {
        let randomTasks = this.getIncompleteTasks(this.svcData.data);
        randomTasks = this.filterFutureChained(randomTasks);
        this.randomTasks = this.pluckRandomTasks(randomTasks);
        this.randomTasks.sort(this.randomTaskSort);

        lastRandom = this.randomTasks;
    }

    getIncompleteTasks(group: DataGroup): Task[] {
        let groupTasks = [];

        group.tasks?.forEach((task) => {
            if(task.completionFlag === Completion.N) {
                groupTasks.push(task);
            }
            else if(task.isNumericCompletion) {
                const intFlag = parseInt(task.completionFlag, 10);
                if(intFlag < task.maxValue) {
                    groupTasks.push(task);
                }
            }
        });

        group.subGroups?.forEach((subGroup) => {
            groupTasks = groupTasks.concat(this.getIncompleteTasks(subGroup));
        });

        return groupTasks;
    }

    filterFutureChained(tasks: Task[]): Task[] {
        return tasks.filter((task) => {
            if(!task.cPrev && !task.cPrevAny) return true;

            const ids = [].concat(task.cPrev, task.cPrevAny);
            return this.randomTasks.some((chainedTask) =>
                chainedTask.completionFlag === Completion.N && ids.includes(chainedTask.id)
            );
        });
    }

    pluckRandomTasks(tasks: Task[]): Task[] {
        const randomTasks = [];

        for(let i = 0; i < this.randomCount; i++) {
            const random = Math.floor(Math.random() * tasks.length);
            randomTasks.push(tasks.splice(random, 1)[0]);
        }

        return randomTasks;
    }

    randomTaskSort(a: Task, b: Task): number {
        const aPath = a._parent.groupPath.join('') + a.name;
        const bPath = b._parent.groupPath.join('') + b.name;

        return aPath.localeCompare(bPath);
    }

}
