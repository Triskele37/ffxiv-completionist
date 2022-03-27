import { Completion, CompletionFlag } from '@constant';

import { DataGroup } from './DataGroup';
import { Task } from './Task';
import { AtLinks, Link, Links } from './Links';

export class Chainer {
    _overall: DataGroup; //TODO: import data directly?
    task: Task = null;
    flag: CompletionFlag = null;

    constructor(task: Task, flag: CompletionFlag) {
        this.task = task;
        this.flag = flag;
    }

    //#region------------------------------------------------------- Getters
    get overall(): DataGroup {
        if(!this._overall) this._overall = DataGroup.overall;
        return this._overall;
    }

    //#endregion

    // Main entry point that fires all chained properties of a task
    triggerChains(): void {
        // Don't chain again if this task has already chained
        // if(this.overall.chainedTasks && !!this.overall.chainedTasks[`x${this.task.id}`]) {
        //     return;
        // }

        // Chain parent tasks if this one was completed
        if(this.task.cPrev && this.flag === Completion.Y && !this.task.cPrevAny) {
            this.applyChainedFlag(this.task.cPrev);
        }

        //
        if(this.task.cPrevAt) this.applyAtChain(this.task.cPrevAt);

        // Chain child tasks if this one was marked incomplete
        if(this.task.cNext && this.flag === Completion.N) {
            this.getAllTasksFor(this.task.cNext).forEach((task) => {
                if(task.completionFlag === Completion.Y) {
                    this.applyFlagToTask(this.flag as Completion, task);
                }
            });
        }

        // Chain sibling tasks if this wasn't marked excluded
        if(this.task.cSiblings && this.flag !== Completion.X) {
            this.applySiblingChain(this.task.cSiblings);
        }

        // Chain siblings if their 'at' value is met or this flag is completed
        if(this.task.cSiblingsAt) this.applyAtChain(this.task.cSiblingsAt);

        // Evaluate combo chains if this wasn't marked excluded
        if(this.task.cCombo && this.flag !== Completion.X) {
            this.applyComboChain();
        }

        // Evaluate combo 'at' chains
        if(this.task.cComboAt) {
            Object.keys(this.task.cComboAt).forEach((at) => {
                this.applyComboChain(at);
            });
        }

        // Evaluate exclude chain
        if(this.task.cExclude) this.applyExclusionChain();

        // Evaluate exclusive chain
        if(this.task.cExclusive) this.applyExclusiveChain();
    }

    //#region------------------------------------------------------- Setters
    // Generic Chain for flags
    applyChainedFlag(cList: Links): void {
        const originalFlag = this.flag as Completion;
        this.getAllTasksFor(cList).forEach((task) => {
            this.applyFlagToTask(originalFlag, task);
        });
    }

    private applyFlagToTask(flag: Completion, chainTask: Task): void {
        if(chainTask.completionFlag !== Completion.X) {
            chainTask.changeCompletion(flag);
        }
    }

    // Chain when a numeric is met
    applyChainedNumberMet(cList: Links, num: string): void {
        this.getAllTasksFor(cList).forEach((task) => this.applyMetNumberToTask(num, task));
    }

    applyMetNumberToTask(num: string, chainTask: Task): void {
        if(!chainTask.isNumericCompletion) { // "at" threshold met, must be Y
            chainTask.changeCompletion(Completion.Y);
        }
        else if(parseInt(num, 10) > parseInt(chainTask.completionFlag, 10)) {
            // only apply increases in completion number
            chainTask.changeCompletion(num);
        }
    }

    // Chain when a numeric is not met
    applyChainedNumberUnmet(cList: Links, num: string): void {
        const newNum = (parseInt(num, 10) - 1).toString();
        this.getAllTasksFor(cList).forEach(
            (task, i, arr) => this.applyUnmetNumberToTask(newNum, task, arr.length)
        );
    }

    applyUnmetNumberToTask(num: string, chainTask: Task, siblings: number): void {
        if(!chainTask.isNumericCompletion) { // "at" threshold not met, must be N
            chainTask.changeCompletion(Completion.N);
        }
        else if(siblings === 1) {
            // cannot assume which sibling should be lowered
            if(parseInt(num, 10) < parseInt(chainTask.completionFlag, 10)) {
                // only apply decreases in completion number
                chainTask.changeCompletion(num);
            }
        }
    }

    //#endregion

    //#region------------------------------------------------------- Chaining
    applyAtChain(atChains: AtLinks): void {
        Object.keys(atChains).forEach((at) => {
            const chainAt = parseInt(at, 10);

            if(this.task._parent.isNumericCompletion) {
                if(chainAt <= parseInt(this.flag, 10)) {
                    // Numeric Completion meets 'at' requirement
                    this.applyChainedNumberMet(atChains[at], at);
                }
                else {
                    // Numeric Completion does not meet 'at' requirement
                    this.applyChainedNumberUnmet(atChains[at], at);
                }
            }
            else {
                if(this.flag === Completion.Y) {
                    this.applyChainedNumberMet(atChains[at], at);
                }
                else if(this.flag === Completion.N) {
                    this.applyChainedNumberUnmet(atChains[at], at);
                }
            }
        });
    }

    applySiblingChain(cList: Links): void {
        const originalFlag = this.flag as Completion;
        this.getAllTasksFor(cList).forEach((task) => {
            if(task.isNumericCompletion) {
                task.changeCompletion(originalFlag);
            }
            else {
                this.applyFlagToTask(originalFlag, task);
            }
        });
    }

    // Combo Chain
    applyComboChain(comboAt?: string): void {
        const cCombo = !comboAt ? this.task.cCombo : this.task.cComboAt[comboAt];

        this.getAllTasksFor(cCombo).forEach((comboTask) => {
            if(comboTask.cPrev) {
                if(comboTask.cPrevAny) {
                    // Task requires any of a previous task
                    const anyComplete = this.getAllTasksFor(comboTask.cPrev).some(
                        (task) => task.completionFlag === Completion.Y
                    );

                    const applyFlag = anyComplete ? Completion.Y : Completion.N;
                    this.applyFlagToTask(applyFlag, comboTask);
                }
                else {
                    // Task requires all previous tasks
                    const allComplete = this.getAllTasksFor(comboTask.cPrev).every(
                        (task) => task.completionFlag === Completion.Y,
                    );

                    const applyFlag = allComplete ? Completion.Y : Completion.N;
                    this.applyFlagToTask(applyFlag, comboTask);
                }
            }
            else if(comboTask.cPrevAt?.[comboAt]) {
                // Task requires all previous tasks
                const allComplete = this.getAllTasksFor(comboTask.cPrevAt[comboAt]).every(
                    (task) => parseInt(task.completionFlag, 10) >= parseInt(comboAt, 10)
                );

                const applyFlag = allComplete ? Completion.Y : Completion.N;
                this.applyFlagToTask(applyFlag, comboTask);
            }
        });
    }

    // Exclude Chain
    applyExclusionChain(): void {
        this.getAllTasksFor(this.task.cExclude).forEach((task) => {
            // Exclude the task if the chaining one is marked Y
            if(this.task.completionFlag === Completion.Y) {
                this.applyFlagToTask(Completion.X, task);
            }
            // Unexclude task if the chaining one is unmarked Y
            else if(this.task.completionFlag === Completion.N && task.completionFlag === Completion.X) {
                this.applyFlagToTask(Completion.N, task);
            }
            else if(this.task.completionFlag === Completion.X) {
                // merp
            }
        });
    }

    // Exclusive Chain
    applyExclusiveChain(): void {
        this.getAllTasksFor(this.task.cExclusive).forEach((chainTask) => {
            if(this.flag === Completion.X) {
                // Chain exclusive tasks to be excluded as well
                this.applyFlagToTask(Completion.X, chainTask);
            }
            else if(this.flag === Completion.N) {
                // Un-exclude any tasks excluded due to this task if marked incomplete
                this.getAllTasksFor(this.task.cExclude).forEach((task) => {
                    if(task.completionFlag !== Completion.X) return;
                    this.applyFlagToTask(Completion.N, task);
                });

                // Chain exclusive tasks to be incomplete as well
                this.applyFlagToTask(Completion.N, chainTask);
            }
            else if(this.flag === Completion.Y && chainTask.completionFlag === Completion.X) {
                // Un-exclude an exclusive task that was excluded when this is marked complete
                this.applyFlagToTask(Completion.N, chainTask);
            }
        });
    }

    //#endregion

    //#region------------------------------------------------------- Helpers
    private getAllTasksFor(pLinkList: Links): Task[] {
        const list = Array.isArray(pLinkList) ? pLinkList : [pLinkList];

        return list.reduce((acc: Task[], pLink) => {
            const path = typeof pLink === 'string' ? pLink.split('.') : [pLink];
            const id = path.pop().toString();

            if(id === 'all' || id.includes('-')) {
                // Dealing with a range of tasks
                const group = this.mapGroupLink(path, id);
                const range = id === 'all' ? [-1, Infinity] :
                    id.split('-').map((n) => parseInt(n, 10));

                // Include tasks that fall into 'range' (inclusive)
                group.tasks.forEach((task) => {
                    if(task.id >= range[0] && task.id <= range[1]) {
                        acc.push(task);
                    }
                });
            }
            else {
                // Dealing with a single task
                acc.push(this.getTaskFromLink(pLink));
            }

            return acc;
        }, []);
    }

    // Returns the group for a chain task, allowing shorthand for some groups
    private mapGroupLink(linkedPath: Links, linkedId: string): DataGroup {
        // Allow linkedPath to be passed as a dot string or already split array of path
        if(!Array.isArray(linkedPath)) {
            linkedPath = (typeof linkedPath === 'string') ? linkedPath.split('.') : [linkedPath];
        }

        // Attempt to translate shorthand into longform path
        let expandedPath = PathShorthand[linkedPath[0]];

        // Not using shorthand path
        if(!expandedPath) {
            const stringLinkedPath = linkedPath.map((l) => l.toString()).join('.');
            return this.overall.getChildGroup(stringLinkedPath);
        }

        // Add remaining path segments back to expandedPath
        if(linkedPath.length > 1) expandedPath += `.${linkedPath.slice(1).join('.')}`;

        // Determine if the link is for a range or singular task
        //   range links must path to a specific group
        //   single task links can be an incomplete path
        const isRangeLink = linkedId === 'all' || linkedId.includes('-');

        const group = this.overall.getChildGroup(expandedPath);
        if(isRangeLink) return group;

        return group.getChildGroup(linkedId)?._parent;
    }

    private getTaskFromLink(link: Link): Task {
        let chainTask;

        // Raw ID link
        if(typeof link === 'number') {
            chainTask = this.task._parent.getChildTask(link.toString());
        }
        // String path link
        else {
            const linkedPath = link.split('.');
            const linkedID = linkedPath.pop();
            const linkedGroup: DataGroup = this.mapGroupLink(linkedPath, linkedID);

            chainTask = linkedGroup?.getChildTask(linkedID);
        }

        if(!chainTask) {
            console.error(`Invalid link (${link}) from task: `, this.task);
        }

        return chainTask;
    }

    //#endregion
}

const PathShorthand = {
    q: 'duty.quests',
    a: 'character.achievement',
    e: 'social.emotes',
    bsf: 'duty.exploratory-missions.the-bozjan-southern-front',
    fle: 'duty.exploratory-missions.the-forbidden-land-eureka',
    br: 'character.character.beast-tribe-reputation',
    job: 'character.character.classes--jobs'
};
