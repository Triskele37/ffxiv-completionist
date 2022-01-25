import logUpdate from 'log-update';

import { Lang, RESOURCES } from '../constants';
import { buildAPI, CacheGroup } from '../util/buildAPI';

import { ChangeData } from './ChangeData';
import { getCombinedAppGroup } from './getCombinedAppGroup';
import { mergeNewTasks } from './mergeNew';
import { mergeDiffTasks } from './mergeDiff';

//TODO: handle lang resource merges together
export function mergeAPI(content, rl, done) {
    const diffTasks = [];
    const newTasks = [];

    dive(buildAPI(content), '');

    // Kick off the recursion to merge all identified tasks
    mergeDiffTasks(rl, content, diffTasks, () => {
        mergeNewTasks(rl, content, newTasks, () => {
            //TODO: sort here or make it an action in the content menu
            logUpdate(`\n${content.Name} Merges Completed!!!`);
            done();
        });
    });

    //------------------------------------------------------------------ Look for things to merge
    function dive(cache: CacheGroup, path: string): void {
        // Recurse all groups within content type
        cache.keys?.forEach((key) => dive(cache[key], path ? `${path}/${key}` : key));

        // Initialize merge of cached & app tasks
        if(cache.tasks.length) {
            analyzeTasks(cache, path, Lang.EN);
            analyzeTasks(cache, path, Lang.FR);
        }
    }

    function analyzeTasks(cache: CacheGroup, path: string, lang: Lang): void {
        let appPath = `${RESOURCES}/${lang}/${content.APP_PATH}/${path}.json`;

        // Allow for self-named content paths e.g. contentType.json
        if(!path) appPath = appPath.replace('/.json', '.json');

        // Allow override of the appPath
        if(content.getAppPath) appPath = content.getAppPath(appPath);

        // Allow content to exclude some paths
        if(content.excludeAppPathMerge?.(appPath)) return;

        // Read the actual file content in
        const appGroup = getCombinedAppGroup(appPath, lang);

        // Loop over the cached version of the task list
        // TODO: this will miss removed tasks left in the app
        cache.tasks.forEach((cacheTask, cacheIndex) => {
            const changeData = new ChangeData({ content, lang, appPath, cacheTask, cacheIndex });

            if(appGroup) {
                changeData.setAppTaskInfo(appGroup.tasks);

                if(changeData.appTask) {
                    changeData.isNew = false;

                    content.MERGE_KEYS.forEach((appKey) => {
                        changeData.setTaskKeyInfo(appKey);

                        // Different value
                        if(changeData.tasksHaveDiff()) diffTasks.push(ChangeData.clone(changeData));
                    });
                }
            }

            // New Task
            if(changeData.isNew) newTasks.push(changeData);
        });
    }
}
