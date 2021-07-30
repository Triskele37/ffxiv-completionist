const fs = require("fs");
const utils = require("../../utils");

const splitCommonAndLangKeys = require("../util/splitCommonAndLangKeys");

class ChangeData {
    isNew = true;
    content;
    lang;

    appPath;
    appTask; // undefined for new task
    appIndex; // undefined for new task
    appKey; // undefined for new task

    cacheTask;
    cacheIndex;
    cacheKey; // undefined for new task

    constructor({ content, lang, appPath, cacheTask, cacheIndex }) {
        this.content = content;
        this.lang = lang;
        this.appPath = appPath;
        this.cacheTask = cacheTask;
        this.cacheIndex = cacheIndex;
    }

    static clone(changeData) {
        return Object.assign(new ChangeData({}), changeData);
    }

    setAppTaskInfo(tasks) {
        this.appTask = tasks.find((appTask) => this.cacheTask.ID === appTask.id);
        this.appIndex = tasks.findIndex((appTask) => this.cacheTask.ID === appTask.id);
    }

    setTaskKeyInfo(appKey) {
        this.appKey = appKey;
        this.cacheKey = this.content.getCacheKey(this.appKey, this.lang);

        if(!this.cacheKey) {
            console.error(`Invalid cacheKey for appKey: ${appKey}`);
        }
    }

    //TODO: Don't make app tasks have blank arrays as properties
    tasksHaveDiff() {
        const appValue = this.appTask[this.appKey];
        const cacheValue = this.cacheTask[this.cacheKey];

        if(Array.isArray(cacheValue)) {
            if(!appValue || appValue.length !== cacheValue.length) return true;

            for(let i = 0; i < cacheValue.length; i++) {
                if(appValue[i] !== utils.safeTrim(cacheValue[i])) return true;
            }

            return false;
        }

        return (appValue !== utils.safeTrim(cacheValue));
    }

    writeDiffMerge() {
        let path = this.appPath;
        if(this.content.hasCommonKeys() && this.content.COMMON_KEYS.indexOf(this.appKey) !== -1) {
            path = path.replace(this.lang, "common");
        }

        const group = JSON.parse(fs.readFileSync(path, 'utf8'));

        group.tasks.forEach((task) => {
            if(task.id === this.appTask.id) {
                task[this.appKey] = utils.safeTrim(this.cacheTask[this.cacheKey]);
            }
        });

        fs.writeFileSync(path, JSON.stringify(group, null, 4));
    }

    writeNewData() {
        const fullTask = this.content.mapAppTask(this.cacheTask, this.lang);
        const [langTask, commonTask] = splitCommonAndLangKeys(this.content, fullTask);

        if(langTask) write(langTask, this.appPath, this.cacheIndex);
        if(commonTask && this.lang === "en") {
            write(commonTask, this.appPath.replace(this.lang, "common"), this.cacheIndex);
        }

        function write(task, path, cacheIndex) {
            let group = {};

            if(fs.existsSync(path)) {
                group = JSON.parse(fs.readFileSync(path, 'utf8'));

                // Attempt to insert the task into the right sort order
                if(group.tasks.length > cacheIndex) {
                    group.tasks.splice(cacheIndex, 0, task);
                }
                else {
                    group.tasks.push(task);
                }
            }
            else {
                group = {
                    groupName: "PLACEHOLDER",
                    tasks: [task]
                };
            }

            fs.writeFileSync(path, JSON.stringify(group, null, 4));
        }
    }
}

module.exports = ChangeData;
