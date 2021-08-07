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

        // cPrevAny cannot be chained

        if(!!this.task.cNext && this.flag === "N") {
            this.applyChainedFlag(this.task.cNext);
        }

        if(!!this.task.cSiblings && this.flag !== "X") {
            this.applyChainedFlag(this.task.cSiblings);
        }

        if(!!this.task.cCombos && this.flag !== "X") {
            this.applyComboChain();
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

    // Combo Chain
    applyComboChain() {
        this.task.cCombos.forEach((link) => {
            const comboTask = this.getTaskFromLink(link);

            if(comboTask.cPrev) {
                const allComplete = comboTask.cPrev.reduce((acc, pLink) => {
                    const preReqTask = this.getTaskFromLink(pLink);
                    return acc && preReqTask.completionFlag === "Y";
                }, true);

                if(allComplete) this.applyFlagToTask("Y", comboTask);
                else this.applyFlagToTask("N", comboTask);
            }
            else {
                const anyComplete = comboTask.cPrevAny.reduce((acc, pLink) => {
                    const preReqTask = this.getTaskFromLink(pLink);
                    return acc || preReqTask.completionFlag === "Y";
                }, false);

                if(anyComplete) this.applyFlagToTask("Y", comboTask);
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
        // Not using shorthand path
        if(linkedPath.length > 1) {
            return this.overall.getChildGroupFromPath(linkedPath);
        }

        // Using shorthand path
        let path;
        switch(linkedPath[0]) {
            case "achievement": path = "character.achievements"; break;
            case "title": path = "character.character.title"; break;
            case "emote": path = "social.emotes"; break;
            case "beastRep": path = "character.character.beast-tribe-reputation"; break;

            case "konogg": path = "duty.collection"; break;

            case "quest": path = "duty.quests"; break;
            case "jobQuest": path = "duty.quests.class--job"; break;
            case "sidequest": path = "duty.quests.sidequests"; break;

            case "arrRelic": path = "character.relic-gear.zodiac"; break;
            case "hwRelic": path = "character.relic-gear.anima"; break;
            case "sbRelic": path = "character.relic-gear.eureka"; break;
            case "shbRelic": path = "character.relic-gear.resistance"; break;
            case "skyRelic": path = "character.relic-gear.skysteel-tools"; break;
        }

        return this.overall.getChildGroupFromPath(path).getChildGroupWithTaskID(linkedID);
    }
    //#endregion
}
