import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonDirective } from 'primeng/button';
import { InputNumber } from 'primeng/inputnumber';
import { TieredMenuToggleEvent } from 'primeng/tieredmenu';

import { ContentLinkComponent } from '@component/content-link/content-link.component';
import { GroupSelectorComponent } from '@component/group-selector/group-selector.component';
import { Completion } from '@constant';
import { DataService } from '@service/data/data-service';
import { DataGroup } from '@model/DataGroup';
import { getGroupPath } from '@model/DataGroup/getGroupPath';
// import { changeCompletion } from '@model/Task/completion/changeCompletion';
import { Task } from '@model/Task';

// Cache the last roll for if returning to page
let lastRandom: Task[] = [];

@Component({
    selector: 'com-random',
    templateUrl: './random.component.html',
    styleUrls: ['./random.component.scss'],
    imports: [
        ButtonDirective,
        FormsModule,
        InputNumber,

        ContentLinkComponent,
        GroupSelectorComponent,
    ]
})
export class RandomComponent {
    randomCount: number = 10;
    randomTasks: Task[] = [];

    group: DataGroup;
    groupSelectorEvent?: TieredMenuToggleEvent;

    constructor(private svcData: DataService) {
        if(lastRandom.length) this.randomTasks = lastRandom;
        this.group = this.svcData.data;

        // this.test();
    }

    //TODO: Create a developer settings menu and add this as an action
    // this runs through every task changing its completion to ensure no
    // links are broken
    // first = true;
    // test() {
    //     this.dive(this.svcData.data);
    //     console.log('Done');
    // }
    // dive(group: DataGroup | null) {
    //     if(!group) return;
    //     group.subGroups?.forEach((sg) => this.dive(sg));
    //     group.tasks?.forEach((task) => {
    //         try {
    //             if(task.isNumericCompletion) {
    //                 if(task.completionFlag$() !== task.defaultCompletion.toString()) {
    //                     changeCompletion(task, task.defaultCompletion);
    //                 }
    //                 changeCompletion(task, task.maxValue.toString());
    //                 changeCompletion(task, task.minValue.toString());
    //             }
    //             else {
    //                 if(task.completionFlag$() !== 'N') changeCompletion(task, 'N');
    //                 changeCompletion(task, 'Y', this.first);
    //                 changeCompletion(task, 'N');
    //             }
    //         }
    //         catch(e) {
    //             console.error(group.fullStorageKey, task.name, e);
    //         }
    //         this.first = false;
    //     });
    // }

    onToggleSelector($event: TieredMenuToggleEvent): void {
        this.groupSelectorEvent = $event;
    }

    onGroupChange(group: DataGroup): void {
        this.group = group;
        this.groupSelectorEvent = undefined;
    }

    onSelectorHide(): void {
        this.groupSelectorEvent = undefined;
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

    getIncompleteTasks(group: DataGroup | null): Task[] {
        if(!group) return [];

        let groupTasks: Task[] = [];

        group.tasks?.forEach((task) => {
            if(task.completionFlag$() === Completion.N) {
                groupTasks.push(task);
            }
            else if(task.isNumericCompletion) {
                const intFlag = parseInt(task.completionFlag$(), 10);
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

            const ids = ([] as any[]).concat(task.cPrev, task.cPrevAny);
            return this.randomTasks.some((chainedTask) =>
                chainedTask.completionFlag$() === Completion.N && ids.includes(chainedTask.id)
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
