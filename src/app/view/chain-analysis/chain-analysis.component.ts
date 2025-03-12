import { Component } from '@angular/core';

import { DataService } from '@data';
import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { getChildTask } from '@model/DataGroup/children/getChild';
import { Link } from '@model/Chain/ChainLink';

type ChainIssue = {
    type: 'PREV_ISSUE' | 'SIBLING_ISSUE';
    sourceTask: Task;
    targetTask: Task;
};

@Component({
    selector: 'xiv-chain-analysis',
    templateUrl: './chain-analysis.component.html',
    styleUrls: ['./chain-analysis.component.scss']
})
export class ChainAnalysisComponent {
    issues: ChainIssue[] = [];

    constructor(private svcData: DataService) {
        this.analyzeChainedTasks();
    }

    analyzeChainedTasks(): void {
        this.issues = [];
        this.dive(this.svcData.data);
    }

    dive(group: DataGroup): void {
        if(group.tasks) {
            group.tasks.forEach((task) => {
                this.addSiblingIssues(task);
                this.addPrevIssues(task);
            });
        }

        if(group.subGroups) {
            group.subGroups.forEach(this.dive.bind(this));
        }
    }

    addSiblingIssues(task: Task): void {
        if(!task.cSiblings) return;

        if(Array.isArray(task.cSiblings)) {
            task.cSiblings.forEach((siblingLink) => {
                const siblingTask = this.getChainedTask(task, siblingLink);
                if(!siblingTask) return;

                if(task.completionFlag !== siblingTask.completionFlag) {
                    this.issues.push({
                        type: 'SIBLING_ISSUE',
                        sourceTask: task,
                        targetTask: siblingTask,
                    });
                }
            });
        }
    }

    addPrevIssues(task: Task): void {
        if(!task.cPrev) return;
        if(task.isNumericCompletion) return;
        if(task.completionFlag !== 'Y') return;

        if(Array.isArray(task.cPrev)) {
            task.cPrev.forEach((prevLink) => {
                const prevTask = this.getChainedTask(task, prevLink);
                if(!prevTask) return;

                if(task.completionFlag !== prevTask.completionFlag) {
                    this.issues.push({
                        type: 'PREV_ISSUE',
                        sourceTask: task,
                        targetTask: prevTask,
                    });
                }
            });
        }
    }

    getChainedTask(source: Task, link: Link) {
        if(typeof link !== 'string') return;
        if(link.match(/\.all$/)) return;
        if(link.match(/\.[0-9]+-[0-9]+$/)) return;

        const task = getChildTask(this.svcData.data, link);

        if(!task) {
            console.log('broken link:', link, source);
            return;
        }

        return task;
    }
}
