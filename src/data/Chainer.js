export class Chainer {
    _overall;
    chains = [];
    task = null;
    flag = null;

    //#region------------------------------------------------------------------ Constructor
    constructor(task, flag) {
        this.task = task;
        this.flag = flag;

        // Isolate the group chains containing this task id
        this.isolateGroupLevelChains(task, flag);
    }

    isolateGroupLevelChains(task) {
        if(task._parent.chains) {
            task._parent.chains.forEach((chain) => {
                if(chain.indexOf(task.id) !== -1) {
                    this.chains.push(chain);
                }
                else if(Array.isArray(chain[0]) && chain[0].indexOf(task.id) !== -1) {
                    this.chains.push(chain);
                }
            });
        }
    }
    //#endregion

    //#region------------------------------------------------------------------ Getters
    get overall() {
        if(!this._overall) this._overall = this.task._parent.getFirstParent();
        return this._overall;
    }
    //#endregion

    //#region------------------------------------------------------------------ Chaining
    triggerChains() {
        // Don't chain again if this task has already chained
        // if(this.overall.chainedTasks && !!this.overall.chainedTasks[`x${this.task.id}`]) {
        //     return;
        // }

        if(!!this.task.cPrev && this.flag === "Y") {
            this.applyChainedFlag(this.task.cPrev);
        }

        if(!!this.task.cPrevAt && this.flag === "Y") {
            for(let num in this.task.cPrevAt) {
                this.applyChainedNumber(this.task.cPrevAt[num], num);
            }
        }

        // cPrevAny cannot be chained

        if(!!this.task.cNext && this.flag === "N") {
            this.applyChainedFlag(this.task.cNext);
        }

        if(!!this.task.cSiblings && this.flag !== "X") {
            this.applyChainedFlag(this.task.cSiblings);
        }

        if(!!this.task.cSiblingsAt) {
            for(let num in this.task.cSiblingsAt) {
                if(this.flag === "Y" || parseInt(num) <= parseInt(this.flag)) {
                    this.applyChainedNumber(this.task.cSiblingsAt[num], num);
                }
            }
        }

        if(!!this.task.cCombo && this.flag !== "X") {
            this.applyComboChain();
        }

        if(!!this.task.cComboAt) {
            for(let num in this.task.cComboAt) {
                this.applyComboChain(num);
            }
        }

        if(!!this.task.cExclude) {
            this.applyExclusionChain();
        }

        if(!!this.task.cExclusive) {
            this.applyExclusiveChain();
        }

        if(this.chains.length) {
            this.triggerGroupLevelChains();
        }
    }

    // Generic Chain
    applyChainedFlag(cList) {
        const originalFlag = this.flag;
        this.getAllTasksFor(cList).forEach((task) => this.applyFlagToTask(originalFlag, task));
    }

    applyChainedNumber(cList, num) {
        this.getAllTasksFor(cList).forEach((task) => this.applyNumberToTask(num, task));
    }

    // Combo Chain
    applyComboChain(comboAt) {
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
                const allComplete = this.getAllTasksFor(comboTask.cPrevAt[comboAt])
                    .reduce((acc, task) => acc && (parseInt(task.completionFlag) >= parseInt(comboAt)), true);

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
    applyExclusionChain() {
        this.getAllTasksFor(this.task.cExclude).forEach((task) => {
            // Exclude the task if the chaining one is marked Y
            if(this.task.completionFlag === "Y") {
                this.applyFlagToTask("X", task);
            }
            // Unexclude task if the chaining one is unmarked Y
            else if(this.task.completionFlag === "N" && task.completionFlag === "X") {
                this.applyFlagToTask("N", task);
            }
            else if(this.task.completionFlag === "X") {
                // merp
            }
        });
    }

    // Exclusive Chain
    applyExclusiveChain() {
        this.getAllTasksFor(this.task.cExclusive).forEach((chainTask) => {
            if(this.flag === "X") {
                this.applyFlagToTask("X", chainTask);
            }
            else if(this.flag === "N") {
                // A breakage here means the starting city quests lost their cExcludes
                this.getAllTasksFor(this.task.cExclude).forEach(
                    (task) => this.applyFlagToTask("N", task)
                );
                this.applyFlagToTask("N", chainTask);
            }
            else if(this.flag === "Y" && chainTask.completionFlag === "X") {
                this.applyFlagToTask("N", chainTask);
            }
        });
    }

    // Shorthand Chains
    triggerGroupLevelChains() {
        this.chains.forEach((chain) => {
            // Simple chain
            if(!Array.isArray(chain[0])) {
                const indexInChain = chain.indexOf(this.task.id);
                if(indexInChain !== 0 && this.flag === "Y") {
                    const prevChain = chain.slice(0, indexInChain);
                    this.applyChainedFlag(prevChain);
                }

                if(indexInChain !== chain.length - 1 && this.flag === "N") {
                    const nextChain = chain.slice(indexInChain + 1, chain.length);
                    this.applyChainedFlag(nextChain);
                }
            }
            // Pre-task chain
            else if(this.flag === "Y") {
                if(chain[1] === this.task.id) {
                    // The post-task is completed, trickel flag down
                    this.applyChainedFlag(chain[0]);
                }
                else {
                    // A pre-task is completed, check others to potentially complete post-task
                    let preTasksCompleted = true;
                    chain[0].forEach((preTaskLink) => {
                        const chainTask = this.getTaskFromLink(preTaskLink);
                        if(chainTask.completionFlag !== "Y") preTasksCompleted = false;
                    });
                    if(preTasksCompleted) this.applyChainedFlag([chain[1]]);
                }
            }
            else if(this.flag === "N") {
                if(chain[1] !== this.task.id) {
                    this.applyChainedFlag([chain[1]]);
                }
            }
        });
    }
    //#endregion

    //#region------------------------------------------------------------------ Helpers
    applyFlagToTask(flag, chainTask) {
        chainTask.changeCompletionFlag(flag);
    }

    applyNumberToTask(num, chainTask) {
        if(!chainTask.isNumericCompletion) {
            // cast non-zero to Y and zero to N
            chainTask.changeCompletionFlag(parseInt(num) !== 0 ? "Y" : "N");
        }
        else if(parseInt(num) > parseInt(chainTask.completionFlag)) {
            // only apply increases in completion number
            chainTask.changeCompletionNumber(num);
        }
    }

    getAllTasksFor(pLinkList) {
        const list = Array.isArray(pLinkList) ? pLinkList : [pLinkList];

        return list.reduce((acc, pLink) => {
            const path = typeof pLink === 'string' ? pLink.split('.') : [pLink];
            const id = path.pop().toString();

            if(id === 'all' || id.includes('-')) { // task range link
                const group = this.mapGroupLink(path, id);
                const range = id === 'all' ? [-1, Infinity] : id.split('-').map((n) => parseInt(n));

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
        }, []);
    }

    // Returns the group for a chain task, allowing shorthand for some groups
    mapGroupLink(linkedPath, linkedID) {
        // Allow linkedPath to be passed as a dot string or already split array of path
        if(typeof linkedPath === 'string') linkedPath = linkedPath.split('.');

        // Order these by largest section
        let expandedPath;
        switch(linkedPath[0]) {
            case 'quest': expandedPath = 'duty.quests'; break;
            case 'achievement': expandedPath = 'character.achievements'; break;
            case 'jobQuest': expandedPath = 'duty.quests.class--job'; break;
            case 'sidequest': expandedPath = 'duty.quests.sidequests'; break;
            case 'levequest': expandedPath = 'duty.quests.levequests'; break;
            case 'title': expandedPath = 'character.character.title'; break;
            case 'emote': expandedPath = 'social.emotes'; break;
            case 'hl': expandedPath = 'logs.hunting-log'; break;
            case 'hunt': expandedPath = 'duty.dutyraid-finder.the-hunt'; break;
            case 'trial': expandedPath = 'duty.dutyraid-finder.trials'; break;
            case 'raid': expandedPath = 'duty.dutyraid-finder.raids'; break;
            case 'dungeon': expandedPath = 'duty.dutyraid-finder.dungeons'; break;
            case 'bsf': expandedPath = 'duty.exploratory-missions.the-bozjan-southern-front'; break;
            case 'beastRep': expandedPath = 'character.character.beast-tribe-reputation'; break;
            case 'arrRelic': expandedPath = 'character.relic-gear.zodiac'; break;
            case 'lucis': expandedPath = 'character.relic-gear.lucis-tools'; break;
            case 'hwRelic': expandedPath = 'character.relic-gear.anima'; break;
            case 'sbRelic': expandedPath = 'character.relic-gear.eureka'; break;
            case 'shbRelic': expandedPath = 'character.relic-gear.resistance'; break;
            case 'skyRelic': expandedPath = 'character.relic-gear.skysteel-tools'; break;
            case 'ss': expandedPath = 'logs.sightseeing-log'; break;
            case 'fr': expandedPath = 'duty.collection.field-record'; break;
            case 'job': expandedPath = 'character.character.classes--jobs'; break;
            case 'konogg': expandedPath = 'duty.collection'; break;
        }

        // Not using shorthand path
        if(!expandedPath) return this.overall.getChildGroupFromPath(linkedPath);

        // Add remaining path segments back to expandedPath
        if(linkedPath.length > 1) expandedPath += `.${linkedPath.slice(1).join('.')}`;

        // Determine if the link is for a range or singular task
        //   range links must path to a specific group
        //   single task links can be an incomplete path
        const isRangeLink = linkedID === 'all' || linkedID.toString().includes('-');

        const group = this.overall.getChildGroupFromPath(expandedPath);
        return isRangeLink ? group : group.getChildGroupWithTaskID(linkedID);
    }

    getTaskFromLink(link) {
        let chainTask;

        // Raw ID link
        if(typeof link === "number") {
            // Attempt to find the task in the immediate group first
            chainTask = (this.task._parent.tasks || {})[`x${link}`];

            // Otherwise brute force search the task
            if(!chainTask) chainTask = this.task._parent.getTaskByID(link);
        }
        // String path link
        else {
            const linkedPath = link.split(".");
            const linkedID = parseInt(linkedPath.pop());
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
