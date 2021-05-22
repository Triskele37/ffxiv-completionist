export class Task {
    name;
    id; // Its assumed that an id is passed with every task
    ID; // xivapi has ID as the attribute TODO: deprecate
    _parent;
    chains; // array of related tasks to chain completion marking

    completionFlag = "N";

    parentLinks; // Tasks this task is dependant on
    childLinks;  // Tasks dependant on this task
    mirrorLinks; // Tasks that should mirror this task
    // minValue = 0; // Define this for numeric completion tasks
    // maxValue = 42; // Define this for numeric completion tasks

    constructor(task, parent) {
        // Map properties of task to this class
        const keys = Object.keys(task);
        keys.forEach((key) => {
            this[key] = task[key];

            if(parent.isNumericCompletion) this.isNumericCompletion = true;
        });

        // Attach parent
        this._parent = parent;
    }

    changeCompletionFlag(flag) {
        if(this.completionFlag === flag) return;

        // Get flag conversions (N changes are implied from Y changes)
        const wasX = this.completionFlag === "X" && flag !== "X"; // X to ?
        const wasY = this.completionFlag === "Y" && flag !== "Y"; // Y to ?
        const nowX = flag === "X" && this.completionFlag !== "X"; // ? to X
        const nowY = flag === "Y" && this.completionFlag !== "Y"; // ? to Y

        this.completionFlag = flag;

        if(wasX || nowX) {
            this._parent.updateExcluded(wasX ? -1 : nowX ? 1 : 0);
        }

        if(wasY || nowY) {
            this._parent.updateCompleted(wasY ? -1 : nowY ? 1 : 0);
        }

        // Chain progressive tasks
        const updatePrev = (this.prevID !== undefined && flag === "Y");
        const updateNext = (this.nextID !== undefined && flag === "N");
        if(updatePrev) this._parent.tasks.find((t) => t.id === this.prevID).changeCompletionFlag("Y");
        if(updateNext) this._parent.tasks.find((t) => t.id === this.nextID).changeCompletionFlag("N");

        // Chain related tasks
        const updateParentLinks = (!!this.parentLinks && flag === "Y");
        const updateChildLinks = (!!this.childLinks && flag === "N");
        const updateMirrorLinks = !!this.mirrorLinks;

        const overall = updateParentLinks || updateChildLinks || updateMirrorLinks ? this._parent.getFirstParent() : null;
        if(updateParentLinks) updateLinkedArray(this.parentLinks);
        if(updateChildLinks) updateLinkedArray(this.childLinks);
        if(updateMirrorLinks) updateLinkedArray(this.mirrorLinks);

        function updateLinkedArray(linkedArray) {
            linkedArray.forEach((link) => {
                const linkedGroup = link.split(".");
                const linkedID = parseInt(linkedGroup.pop());

                overall.getChildGroupFromPath(linkedGroup).tasks
                    .find((t) => t.id === linkedID)
                    .changeCompletionFlag(flag);
            });
        }
    }

    changeCompletionNumber(newValue) {
        let previousValue = this.completionFlag;
        this.completionFlag = newValue.toString();

        // Restrict values to the minimum defined on the task
        if(parseFloat(previousValue) < this.minValue) previousValue = this.minValue.toString();

        // Prevent negative progression
        if(newValue < this.minValue) this._parent.updateCompleted(0);
        else this._parent.updateCompleted(newValue - previousValue);
    }

    get storageKey() {
        if(this.id !== undefined && this.id !== null) return this.id;
        return this.ID;
    }

    get fullStorageKey() {
        return `${this._parent.fullStorageKey}.${this.storageKey}`;
    }
}
