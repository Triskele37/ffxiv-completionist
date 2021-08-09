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

        if(!!this.task.cAll && this.flag === "Y") {
            this.applyAllChain();
        }

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
    applyChainedFlag(chainedTasks) {
        const originalFlag = this.flag;
        chainedTasks.forEach(
            (link) => this.applyFlagToTask(originalFlag, this.getTaskFromLink(link))
        );
    }

    applyChainedNumber(chainedTasks, num) {
        chainedTasks.forEach(
            (link) => this.applyNumberToTask(num, this.getTaskFromLink(link))
        );
    }

    // All Chain (shorthand for cPrev with many targets in the same group)
    applyAllChain() {
        const linkedPath = this.task.cAll.split(".");
        const linkedGroup = this.mapGroupLink(linkedPath, 'all');

        for(let taskKey in linkedGroup.tasks) {
            this.applyFlagToTask("Y", linkedGroup.tasks[taskKey]);
        }
    }

    // Combo Chain
    applyComboChain(comboAt) {
        const cCombo = !comboAt ? this.task.cCombo : this.task.cComboAt[comboAt];

        cCombo.forEach((link) => {
            const comboTask = this.getTaskFromLink(link);

            if(comboTask.cPrev) {
                // Task requires all previous tasks
                const allComplete = comboTask.cPrev.reduce((acc, pLink) => {
                    const preReqTask = this.getTaskFromLink(pLink);
                    return acc && preReqTask.completionFlag === "Y";
                }, true);

                if(allComplete) this.applyFlagToTask("Y", comboTask);
                else this.applyFlagToTask("N", comboTask);
            }
            else if(comboTask.cPrevAt && comboTask.cPrevAt[comboAt]) {
                // Task requires all previous tasks
                const allComplete = comboTask.cPrevAt[comboAt].reduce((acc, pLink) => {
                    const preReqTask = this.getTaskFromLink(pLink);
                    return acc && parseInt(preReqTask.completionFlag) >= parseInt(comboAt);
                }, true);

                if(allComplete) this.applyFlagToTask("Y", comboTask);
                else this.applyFlagToTask("N", comboTask);
            }
            else if(comboTask.cPrevAny) {
                // Task requires any of a previous task
                const anyComplete = comboTask.cPrevAny.reduce((acc, pLink) => {
                    const preReqTask = this.getTaskFromLink(pLink);
                    return acc || preReqTask.completionFlag === "Y";
                }, false);

                if(anyComplete) this.applyFlagToTask("Y", comboTask);
                else this.applyFlagToTask("N", comboTask);
            }
            else if(comboTask.cAll) {
                const allGroup = this.mapGroupLink(comboTask.cAll, 'all');
                const allComplete = Object.keys(allGroup.tasks).reduce((acc, taskKey) => {
                    return acc && allGroup.tasks[taskKey].completionFlag === "Y";
                }, true);

                if(allComplete) this.applyFlagToTask("Y", comboTask);
                else this.applyFlagToTask("N", comboTask);
            }
        });
    }

    // Exclude Chain
    applyExclusionChain() {
        const isNum = typeof this.task.cExclude === "number";
        const excludes = isNum ? [this.task.cExclude] : this.task.cExclude;

        excludes.forEach((link) => {
            const chainTask = this.getTaskFromLink(link);

            // Exclude the chain task if this one is marked Y
            if(this.task.completionFlag === "Y") {
                this.applyFlagToTask("X", chainTask);
            }
            // Unexclude chain task if this one is unmarked Y
            else if(this.task.completionFlag === "N" && chainTask.completionFlag === "X") {
                this.applyFlagToTask("N", chainTask);
            }
            else if(this.task.completionFlag === "X") {
                // merp
            }
        });
    }

    // Exclusive Chain
    applyExclusiveChain() {
        this.task.cExclusive.forEach((link) => {
            const chainTask = this.getTaskFromLink(link);

            if(this.flag === "X") {
                this.applyFlagToTask("X", chainTask);
            }
            else if(this.flag === "N") {
                // A breakage here means the starting city quests lost their cExcludes
                this.task.cExclude.forEach(
                    (el) => this.applyFlagToTask("N", this.getTaskFromLink(el))
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

    // Returns the group for a chain task, allowing shorthand for some groups
    mapGroupLink(linkedPath, linkedID) {
        if(typeof linkedPath === 'string') linkedPath = linkedPath.split('.');

        let expandedPath;
        const replaceShorthand = (expanded) => expandedPath = expanded;

        // Order these by largest section
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
            case 'beastRep': expandedPath = 'character.character.beast-tribe-reputation'; break;
            case 'arrRelic': expandedPath = 'character.relic-gear.zodiac'; break;
            case 'hwRelic': expandedPath = 'character.relic-gear.anima'; break;
            case 'sbRelic': expandedPath = 'character.relic-gear.eureka'; break;
            case 'shbRelic': expandedPath = 'character.relic-gear.resistance'; break;
            case 'skyRelic': expandedPath = 'character.relic-gear.skysteel-tools'; break;
            case 'job': expandedPath = 'character.character.classes--jobs'; break;
            case 'konogg': expandedPath = 'duty.collection'; break;
        }

        // Not using shorthand path
        if(!expandedPath) {
            return this.overall.getChildGroupFromPath(linkedPath);
        }

        // Using shorthand path
        if(linkedPath.length > 1) expandedPath += `.${linkedPath.slice(1).join('.')}`;
        const group = this.overall.getChildGroupFromPath(expandedPath);
        return (linkedID === 'all') ? group : group.getChildGroupWithTaskID(linkedID);
    }
    //#endregion
}
