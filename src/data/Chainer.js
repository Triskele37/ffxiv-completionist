export class Chainer {
    _overall;
    chains = [];
    task = null;
    flag = null;

    //#region------------------------------------------------------------------ Constructor
    constructor(task, flag) {
        // Create chained task list
        this.task = task;
        this.flag = flag;
        this.chainedTasks = [{
            group: task._parent.groupPath,
            name: task.name,
            flag
        }];

        // Isolate the group chains containing this task id
        this.isolateGroupLevelChains(task, flag);
    }

    isolateGroupLevelChains(task, flag) {
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
        if(!!this.task.cPrev && this.flag === "Y") {
            this.applyChainedFlag(this.task.cPrev);
        }

        if(!!this.task.cNext && this.flag === "N") {
            this.applyChainedFlag(this.task.cNext);
        }

        if(!!this.task.cSiblings && this.flag !== "X") {
            this.applyChainedFlag(this.task.cSiblings);
        }

        if(!!this.task.cExclude) this.applyExclusionChain();

        if(this.chains.length) this.triggerGroupLevelChains();
    }

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

    applyChainedFlag(chainedTasks) {
        chainedTasks.forEach((link) => {
            const chainTask = this.getTaskFromLink(link);
            this.chainedTasks.push(...(chainTask.changeCompletionFlag(this.flag) || []));
        });
    }

    applyExclusionChain() {
        const chainTask = this.getTaskFromLink(this.task.cExclude);

        // Exclude the chain task if this one is marked Y
        if(this.flag === "Y") {
            this.chainedTasks.push(...(chainTask.changeCompletionFlag("X") || []));
        }
        // Unexclude chain task if this one is unmarked Y
        else if((this.flag === "N" || this.flag === "X") && chainTask.completionFlag === "X") {
            this.chainedTasks.push(...(chainTask.changeCompletionFlag("N") || []));
        }
    }

    getTaskFromLink(link) {
        // Link is in the same group
        if(typeof link === "number") {
            return this.task._parent.tasks.find((t) => t.id === link);
        }
        // Link is in an external group
        else {
            const linkedPath = link.split(".");
            const linkedID = parseInt(linkedPath.pop());
            const linkedGroup = this.mapGroupLink(linkedPath, linkedID);

            return linkedGroup.tasks.find((t) => t.id === linkedID);
        }
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
            case "quest": path = "duty.quests"; break;

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
