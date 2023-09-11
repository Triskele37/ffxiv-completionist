import { Component } from '@angular/core';

import { Completion } from '@constant';
import { DataService } from '@data';
import { DataGroup } from '@model/DataGroup';
import { getGroupPath } from '@model/DataGroup/children/getGroupPath';
import { Task } from '@model/Task';

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

    group: DataGroup;

    constructor(private svcData: DataService) {
        if(lastRandom.length) this.randomTasks = lastRandom;
        this.group = this.svcData.data;
    }

    //TODO: Create a developer settings menu and add this as an action
    // this runs through every task changing its completion to ensure no
    // links are broken (it takes nearly 10 minutes)
    // first = true;
    // test() {
    //     this.dive(this.svcData.data, 0);
    //     console.log('Done');
    // }
    // dive(group: DataGroup, depth: number) {
    //     const tab = new Array(depth).fill(null).join('  ');
    //     console.log(tab + group._key);
    //     group.subGroups?.forEach((sg) => this.dive(sg, depth + 1));
    //     group.tasks?.forEach((task) => {
    //         try {
    //             if(task.isNumericCompletion) {
    //                 if(task.completionFlag !== task.defaultCompletion.toString()) {
    //                     task.changeCompletion(task.defaultCompletion);
    //                 }
    //                 task.changeCompletion(task.maxValue.toString());
    //                 task.changeCompletion(task.minValue.toString());
    //             }
    //             else {
    //                 if(task.completionFlag !== 'N') task.changeCompletion('N');
    //                 task.changeCompletion('Y', this.first);
    //                 task.changeCompletion('N');
    //             }
    //         }
    //         catch(e) {
    //             console.error(e);
    //         }
    //         this.first = false;
    //     });
    // }

    onGroupChange(group: DataGroup): void {
        this.group = group;
    }

    onCountChange(): void {

    }

    //#region------------------------------------------------------- Click
    onGenerateRandomClick(): void {
        let randomTasks = this.getIncompleteTasks(this.group);
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
        if(tasks.length < this.randomCount) return tasks;

        const randomTasks = [];

        for(let i = 0; i < this.randomCount; i++) {
            const random = Math.floor(Math.random() * tasks.length);
            randomTasks.push(tasks.splice(random, 1)[0]);
        }

        return randomTasks;
    }

    randomTaskSort(a: Task, b: Task): number {
        const aPath = getGroupPath(a._parent).join('') + a.name;
        const bPath = getGroupPath(b._parent).join('') + b.name;

        return aPath.localeCompare(bPath);
    }

    //#endregion
}
