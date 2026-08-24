import { Lang } from '@constant';
import type { Task } from '@model/Task';

import type { DataServiceContext } from '../types';

export function flattenLangKeys(
    this: DataServiceContext,
    task: Task
) {
    const lang = this.svcConfig.get('lang') ?? Lang.EN;
    const langEnd = `_${lang}`;

    Object.keys(task).forEach((key) => {
        if(key.endsWith(langEnd)) {
            const flatKey = key.replace(langEnd, '');

            if(task[flatKey]) {
                const curIsArr = Array.isArray(task[flatKey]);
                const langIsArr = Array.isArray(task[key]);

                if(curIsArr && langIsArr) task[flatKey] = [...task[flatKey], ...task[key]];
                else if(curIsArr && !langIsArr) task[flatKey].push(task[key]);
                else if(!curIsArr && langIsArr) task[flatKey] = [task[flatKey], ...task[key]];
                else task[flatKey] = [task[flatKey], task[key]];
            }
            else {
                task[flatKey] = task[key];
            }
        }
    });
}
