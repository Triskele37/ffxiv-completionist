import { Completion, CompletionFlag } from '@constant';

import { DataGroup } from './DataGroup';
import { Task } from './Task';
import { Link, Links } from './Links';

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
        if(!this._overall) this._overall = this.task._parent.getFirstParent();
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
        if(this.task.cPrev && this.flag === Completion.Y) {
            this.applyChainedFlag(this.task.cPrev);
        }

        // TODO: ???
        if(this.task.cPrevAt && this.flag === Completion.Y) {
            Object.keys(this.task.cPrevAt).forEach((at) => {
                this.applyChainedNumber(this.task.cPrevAt[at], at);
            });
        }

        // cPrevAny cannot be chained

        // Chain child tasks if this one was marked incomplete
        if(this.task.cNext && this.flag === Completion.N) {
            this.applyChainedFlag(this.task.cNext);
        }

        // Chain sibling tasks if this wasn't marked excluded
        if(this.task.cSiblings && this.flag !== Completion.X) {
            this.applyChainedFlag(this.task.cSiblings);
        }

        // Chain siblings if their 'at' value is met or this flag is completed
        if(this.task.cSiblingsAt) {
            Object.keys(this.task.cSiblingsAt).forEach((at) => {
                const atMet = parseInt(at, 10) <= parseInt(this.flag, 10);
                if(atMet || this.flag === Completion.Y) {
                    this.applyChainedNumber(this.task.cSiblingsAt[at], at);
                }
            });
        }

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

    //#region------------------------------------------------------- Chaining
    // Generic Chain for flags
    applyChainedFlag(cList: Links): void {
        const originalFlag = this.flag as Completion;
        this.getAllTasksFor(cList).forEach((task) => this.applyFlagToTask(originalFlag, task));
    }

    // Generic chain for numeric completion
    applyChainedNumber(cList: Links, num: string): void {
        this.getAllTasksFor(cList).forEach((task) => this.applyNumberToTask(num, task));
    }

    // Combo Chain
    applyComboChain(comboAt?: string): void {
        const cCombo = !comboAt ? this.task.cCombo : this.task.cComboAt[comboAt];

        this.getAllTasksFor(cCombo).forEach((comboTask) => {
            if(comboTask.cPrev) {
                // Task requires all previous tasks
                const allComplete = this.getAllTasksFor(comboTask.cPrev).every(
                    (task) => task.completionFlag === Completion.Y,
                );

                const applyFlag = allComplete ? Completion.Y : Completion.N;
                this.applyFlagToTask(applyFlag, comboTask);
            }
            else if(comboTask.cPrevAt?.[comboAt]) {
                // Task requires all previous tasks
                const allComplete = this.getAllTasksFor(comboTask.cPrevAt[comboAt]).every(
                    (task) => parseInt(task.completionFlag, 10) >= parseInt(comboAt, 10)
                );

                const applyFlag = allComplete ? Completion.Y : Completion.N;
                this.applyFlagToTask(applyFlag, comboTask);
            }
            else if(comboTask.cPrevAny) {
                // Task requires any of a previous task
                const anyComplete = this.getAllTasksFor(comboTask.cPrevAny).some(
                    (task) => task.completionFlag === Completion.Y
                );

                const applyFlag = anyComplete ? Completion.Y : Completion.N;
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
    private applyFlagToTask(flag: Completion, chainTask: Task): void {
        chainTask.changeCompletionFlag(flag);
    }

    private applyNumberToTask(num: string, chainTask: Task): void {
        if(!chainTask.isNumericCompletion) {
            // cast non-zero to Y and zero to N
            const flag = parseInt(num, 10) !== 0 ? Completion.Y : Completion.N;
            chainTask.changeCompletionFlag(flag);
        }
        else if(parseInt(num, 10) > parseInt(chainTask.completionFlag, 10)) {
            // only apply increases in completion number
            chainTask.changeCompletionNumber(num);
        }
    }

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
            const stringLinkedPath = linkedPath.map((l) => l.toString());
            return this.overall.getChildGroupFromPath(stringLinkedPath);
        }

        // Add remaining path segments back to expandedPath
        if(linkedPath.length > 1) expandedPath += `.${linkedPath.slice(1).join('.')}`;

        // Determine if the link is for a range or singular task
        //   range links must path to a specific group
        //   single task links can be an incomplete path
        const isRangeLink = linkedId === 'all' || linkedId.includes('-');

        const group = this.overall.getChildGroupFromPath(expandedPath);
        if(isRangeLink) return group;

        const id = parseInt(linkedId, 10);
        return group.getChildGroupWithTaskID(id);
    }

    private getTaskFromLink(link: Link): Task {
        let chainTask;

        // Raw ID link
        if(typeof link === 'number') {
            chainTask = this.task._parent.getTaskById(link);
        }
        // String path link
        else {
            const linkedPath = link.split('.');
            const linkedID = linkedPath.pop();
            const linkedGroup: DataGroup = this.mapGroupLink(linkedPath, linkedID);

            const id = parseInt(linkedID, 10);
            chainTask = linkedGroup?.getTaskById(id);
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
    a: 'character.achievements',
    t: 'character.character.title',
    e: 'social.emotes',
    hl: 'logs.hunting-log',
    h: 'duty.dutyraid-finder.the-hunt',
    dt: 'duty.dutyraid-finder.trials',
    dr: 'duty.dutyraid-finder.raids',
    bsf: 'duty.exploratory-missions.the-bozjan-southern-front',
    fle: 'duty.exploratory-missions.the-forbidden-land-eureka',
    br: 'character.character.beast-tribe-reputation',
    r1: 'character.relic-gear.zodiac',
    r2: 'character.relic-gear.lucis-tools',
    r3: 'character.relic-gear.anima',
    r4: 'character.relic-gear.eureka',
    r5: 'character.relic-gear.resistance',
    r6: 'character.relic-gear.skysteel-tools',
    ss: 'logs.sightseeing-log',
    fr: 'duty.collection.field-record',
    job: 'character.character.classes--jobs',
    konogg: 'duty.collection'
};
