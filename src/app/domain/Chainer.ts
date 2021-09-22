import { DataGroup } from './DataGroup';
import { Task } from './Task';
import { Links } from './Links';

export class Chainer {
    _overall;
    task: Task = null;
    flag: string = null;

    constructor(task: Task, flag: string) {
        this.task = task;
        this.flag = flag;
    }

    //#region------------------------------------------------------------------ Getters
    get overall(): DataGroup {
        if(!this._overall) this._overall = this.task._parent.getFirstParent();
        return this._overall;
    }

    //#endregion

    //#region------------------------------------------------------------------ Chaining
    triggerChains(): void {
        // Don't chain again if this task has already chained
        // if(this.overall.chainedTasks && !!this.overall.chainedTasks[`x${this.task.id}`]) {
        //     return;
        // }

        if(!!this.task.cPrev && this.flag === 'Y') {
            this.applyChainedFlag(this.task.cPrev);
        }

        if(!!this.task.cPrevAt && this.flag === 'Y') {
            for(const num in this.task.cPrevAt) {
                if(this.task.cPrevAt.hasOwnProperty(num)) {
                    this.applyChainedNumber(this.task.cPrevAt[num], num);
                }
            }
        }

        // cPrevAny cannot be chained

        if(!!this.task.cNext && this.flag === 'N') {
            this.applyChainedFlag(this.task.cNext);
        }

        if(!!this.task.cSiblings && this.flag !== 'X') {
            this.applyChainedFlag(this.task.cSiblings);
        }

        if(!!this.task.cSiblingsAt) {
            for(const num in this.task.cSiblingsAt) {
                if(this.task.cSiblingsAt.hasOwnProperty(num)) {
                    if(this.flag === 'Y' || parseInt(num, 10) <= parseInt(this.flag, 10)) {
                        this.applyChainedNumber(this.task.cSiblingsAt[num], num);
                    }
                }
            }
        }

        if(!!this.task.cCombo && this.flag !== 'X') {
            this.applyComboChain();
        }

        if(!!this.task.cComboAt) {
            for(const num in this.task.cComboAt) {
                if(this.task.cComboAt.hasOwnProperty(num)) {
                    this.applyComboChain(num);
                }
            }
        }

        if(!!this.task.cExclude) {
            this.applyExclusionChain();
        }

        if(!!this.task.cExclusive) {
            this.applyExclusiveChain();
        }
    }

    // Generic Chain
    applyChainedFlag(cList: Links): void {
        const originalFlag = this.flag;
        this.getAllTasksFor(cList).forEach((task) => this.applyFlagToTask(originalFlag, task));
    }

    applyChainedNumber(cList: Links, num: string): void {
        this.getAllTasksFor(cList).forEach((task) => this.applyNumberToTask(num, task));
    }

    // Combo Chain
    applyComboChain(comboAt?: string): void {
        const cCombo = !comboAt ? this.task.cCombo : this.task.cComboAt[comboAt];

        this.getAllTasksFor(cCombo).forEach((comboTask) => {
            if(comboTask.cPrev) {
                // Task requires all previous tasks
                const allComplete = this.getAllTasksFor(comboTask.cPrev)
                    .reduce((acc, task) => acc && task.completionFlag === 'Y', true);

                if(allComplete) this.applyFlagToTask('Y', comboTask);
                else this.applyFlagToTask('N', comboTask);
            }
            else if(comboTask.cPrevAt && comboTask.cPrevAt[comboAt]) {
                // Task requires all previous tasks
                const allComplete = this.getAllTasksFor(comboTask.cPrevAt[comboAt]).reduce(
                    (acc, task) => acc && (parseInt(task.completionFlag, 10) >= parseInt(comboAt, 10)),
                    true
                );

                if(allComplete) this.applyFlagToTask('Y', comboTask);
                else this.applyFlagToTask('N', comboTask);
            }
            else if(comboTask.cPrevAny) {
                // Task requires any of a previous task
                const anyComplete = this.getAllTasksFor(comboTask.cPrevAny)
                    .reduce((acc, task) => acc || (task.completionFlag === 'Y'), false);

                if(anyComplete) this.applyFlagToTask('Y', comboTask);
                else this.applyFlagToTask('N', comboTask);
            }
        });
    }

    // Exclude Chain
    applyExclusionChain(): void {
        this.getAllTasksFor(this.task.cExclude).forEach((task) => {
            // Exclude the task if the chaining one is marked Y
            if(this.task.completionFlag === 'Y') {
                this.applyFlagToTask('X', task);
            }
            // Unexclude task if the chaining one is unmarked Y
            else if(this.task.completionFlag === 'N' && task.completionFlag === 'X') {
                this.applyFlagToTask('N', task);
            }
            else if(this.task.completionFlag === 'X') {
                // merp
            }
        });
    }

    // Exclusive Chain
    applyExclusiveChain(): void {
        this.getAllTasksFor(this.task.cExclusive).forEach((chainTask) => {
            if(this.flag === 'X') {
                this.applyFlagToTask('X', chainTask);
            }
            else if(this.flag === 'N') {
                // A breakage here means the starting city quests lost their cExcludes
                this.getAllTasksFor(this.task.cExclude).forEach(
                    (task) => this.applyFlagToTask('N', task)
                );
                this.applyFlagToTask('N', chainTask);
            }
            else if(this.flag === 'Y' && chainTask.completionFlag === 'X') {
                this.applyFlagToTask('N', chainTask);
            }
        });
    }

    //#endregion

    //#region------------------------------------------------------------------ Helpers
    applyFlagToTask(flag: string, chainTask: Task): void {
        chainTask.changeCompletionFlag(flag);
    }

    applyNumberToTask(num: string, chainTask: Task): void {
        if(!chainTask.isNumericCompletion) {
            // cast non-zero to Y and zero to N
            chainTask.changeCompletionFlag(parseInt(num, 10) !== 0 ? 'Y' : 'N');
        }
        else if(parseInt(num, 10) > parseInt(chainTask.completionFlag, 10)) {
            // only apply increases in completion number
            chainTask.changeCompletionNumber(num);
        }
    }

    getAllTasksFor(pLinkList: Links): Task[] {
        const list = Array.isArray(pLinkList) ? pLinkList : [pLinkList];

        return list.reduce((acc, pLink) => {
            const path = typeof pLink === 'string' ? pLink.split('.') : [pLink];
            const id = path.pop().toString();

            if(id === 'all' || id.includes('-')) { // task range link
                const group = this.mapGroupLink(path, id);
                const range = id === 'all' ? [-1, Infinity] : id.split('-').map((n) => parseInt(n, 10));

                Object.keys(group.tasks).forEach((taskKey) => {
                    const taskId = group.tasks[taskKey].id;
                    if(taskId >= range[0] && taskId <= range[1]) {
                        acc.push(group.tasks[taskKey]);
                    }
                });
            }
            else { // single task link
                acc.push(this.getTaskFromLink(pLink));
            }

            return acc;
        }, [] as Task[]);
    }

    // Returns the group for a chain task, allowing shorthand for some groups
    mapGroupLink(linkedPath: Links, linkedID: string): DataGroup {
        // Allow linkedPath to be passed as a dot string or already split array of path
        if(!Array.isArray(linkedPath)) {
            linkedPath = (typeof linkedPath === 'string') ? linkedPath.split('.') : [linkedPath];
        }

        // Order these by largest section
        let expandedPath;
        switch(linkedPath[0]) {
            case 'q':
                expandedPath = 'duty.quests';
                break;
            case 'a':
                expandedPath = 'character.achievements';
                break;
            case 't':
                expandedPath = 'character.character.title';
                break;
            case 'e':
                expandedPath = 'social.emotes';
                break;
            case 'hl':
                expandedPath = 'logs.hunting-log';
                break;
            case 'h':
                expandedPath = 'duty.dutyraid-finder.the-hunt';
                break;
            case 'dt':
                expandedPath = 'duty.dutyraid-finder.trials';
                break;
            case 'dr':
                expandedPath = 'duty.dutyraid-finder.raids';
                break;
            case 'bsf':
                expandedPath = 'duty.exploratory-missions.the-bozjan-southern-front';
                break;
            case 'fle':
                expandedPath = 'duty.exploratory-missions.the-forbidden-land-eureka';
                break;
            case 'br':
                expandedPath = 'character.character.beast-tribe-reputation';
                break;
            case 'r1':
                expandedPath = 'character.relic-gear.zodiac';
                break;
            case 'r2':
                expandedPath = 'character.relic-gear.lucis-tools';
                break;
            case 'r3':
                expandedPath = 'character.relic-gear.anima';
                break;
            case 'r4':
                expandedPath = 'character.relic-gear.eureka';
                break;
            case 'r5':
                expandedPath = 'character.relic-gear.resistance';
                break;
            case 'r6':
                expandedPath = 'character.relic-gear.skysteel-tools';
                break;
            case 'ss':
                expandedPath = 'logs.sightseeing-log';
                break;
            case 'fr':
                expandedPath = 'duty.collection.field-record';
                break;
            case 'job':
                expandedPath = 'character.character.classes--jobs';
                break;
            case 'konogg':
                expandedPath = 'duty.collection';
                break;
        }

        // Not using shorthand path
        if(!expandedPath) return this.overall.getChildGroupFromPath(linkedPath);

        // Add remaining path segments back to expandedPath
        if(linkedPath.length > 1) expandedPath += `.${linkedPath.slice(1).join('.')}`;

        // Determine if the link is for a range or singular task
        //   range links must path to a specific group
        //   single task links can be an incomplete path
        const isRangeLink = linkedID === 'all' || linkedID.includes('-');

        const group = this.overall.getChildGroupFromPath(expandedPath);
        return isRangeLink ? group : group.getChildGroupWithTaskID(linkedID);
    }

    getTaskFromLink(link: string | number): Task {
        let chainTask;

        // Raw ID link
        if(typeof link === 'number') {
            // Attempt to find the task in the immediate group first
            chainTask = (this.task._parent.tasks || {})[`x${link}`];

            // Otherwise brute force search the task
            if(!chainTask) chainTask = this.task._parent.getTaskByID(link);
        }
        // String path link
        else {
            const linkedPath = link.split('.');
            const linkedID = linkedPath.pop();
            const linkedGroup = this.mapGroupLink(linkedPath, linkedID);

            chainTask = (linkedGroup || {}).tasks[`x${linkedID}`];
        }

        if(!chainTask) {
            console.error(`Invalid link (${link}) from task: `, this.task);
        }

        return chainTask;
    }

    //#endregion
}
