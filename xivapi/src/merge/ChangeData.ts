import * as fs from 'fs';

import { Lang } from '../constants';
import { Content } from '../domain/Content';
import { mkDirTo } from '../util/mkDirTo';
import { safeTrim } from '../util/safeTrim';
import { splitCommonAndLangKeys } from '../util/splitCommonAndLangKeys';

type ConstructorParams = {
    content?: Content;
    lang?: Lang;
    appPath?: string;
    cacheTask?;
    cacheIndex?: number;
};

export class ChangeData {
    isNew = true;
    content: Content;
    lang: Lang;

    appPath: string;
    appTask; // undefined for new task
    appIndex: number; // undefined for new task
    appKey: string; // undefined for new task

    cacheTask;
    cacheIndex: number;
    cacheKey: string; // undefined for new task

    constructor({ content, lang, appPath, cacheTask, cacheIndex }: ConstructorParams) {
        this.content = content;
        this.lang = lang;
        this.appPath = appPath;
        this.cacheTask = cacheTask;
        this.cacheIndex = cacheIndex;
    }

    static clone(changeData: ChangeData): ChangeData {
        const cloned = new ChangeData({});
        Object.keys(changeData).forEach((key) => {
            cloned[key] = changeData[key];
        });
        return cloned;
    }

    setAppTaskInfo(tasks): void {
        this.appTask = tasks[`x${this.cacheTask.ID}`];
        this.appIndex = Object.keys(tasks).indexOf(`x${this.cacheTask.ID}`);
    }

    setTaskKeyInfo(appKey: string): void {
        this.appKey = appKey;
        this.cacheKey = this.content.getCacheKey(this.appKey, this.lang);

        if(!this.cacheKey) {
            console.error(`Invalid cacheKey for appKey: ${appKey}`);
        }
    }

    //TODO: Don't make app tasks have blank arrays as properties
    tasksHaveDiff(): boolean {
        const appValue = this.appTask[this.appKey];
        const cacheValue = this.cacheTask[this.cacheKey];

        // Bail if this is a known diff
        if(this.isKnownDiff(cacheValue)) return false;

        // Identify individual values in arrays
        if(Array.isArray(cacheValue)) {
            if(!appValue || appValue.length !== cacheValue.length) return true;

            for(let i = 0; i < cacheValue.length; i++) {
                if(appValue[i] !== safeTrim(cacheValue[i])) return true;
            }

            return false;
        }

        return (appValue !== safeTrim(cacheValue));
    }

    isKnownDiff(cacheValue: any): boolean {
        const knownDiffs = this.content.knownDiffs?.[this.cacheTask.ID.toString()];

        // If no specific keys are passed just skip the whole task
        if(knownDiffs?.length === 0) return true;

        return knownDiffs?.some((known) => {
            if(known.key !== this.appKey) return false;

            // Arrays are fun
            return JSON.stringify(known.value) === JSON.stringify(cacheValue);
        });
    }

    writeDiffMerge(): void {
        let path = this.appPath;
        if(this.content.hasCommonKeys && this.content.COMMON_KEYS.indexOf(this.appKey) !== -1) {
            path = path.replace(this.lang, 'common');
        }

        const group = JSON.parse(fs.readFileSync(path, 'utf8'));

        group.tasks[`x${this.cacheTask.ID}`][this.appKey] = safeTrim(this.cacheTask[this.cacheKey]);

        fs.writeFileSync(path, JSON.stringify(group, null, 4));
    }

    writeNewData(): void {
        const fullTask = this.content.mapAppTask(this.cacheTask, this.lang);
        const [langTask, commonTask] = splitCommonAndLangKeys(this.content, fullTask);

        if(langTask) this.write(langTask, this.appPath);
        if(commonTask && this.lang === 'en') {
            this.write(commonTask, this.appPath.replace(this.lang, 'common'));
        }
    }

    private write(task, path: string): void {
        const taskKey = `x${this.cacheTask.ID}`;
        let group: any;

        if(fs.existsSync(path)) {
            group = JSON.parse(fs.readFileSync(path, 'utf8'));
            group.tasks[taskKey] = task;
        }
        else {
            group = {
                groupName: 'PLACEHOLDER',
                tasks: { [taskKey]: task }
            };
        }

        mkDirTo(path);
        fs.writeFileSync(path, JSON.stringify(group, null, 4));
    }
}
