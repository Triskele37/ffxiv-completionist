import { getIndexedTask } from '@data/taskIndexes';
import { DataGroup } from '@model/DataGroup';
import { getChildTask } from '@model/DataGroup/children/getChild';
import { Task } from '@model/Task';

import { Chainer } from './Chainer';
import { Link } from './ChainLink';
import { getLinkGroup } from './getLinkGroup';

export function getTaskFromLink(chainer: Chainer, link: Link): Task {
    let chainTask;

    // 'number' type links are within the same group
    if(typeof link === 'number') {
        chainTask = getChildTask(chainer.task._parent, link.toString());
    }
    // String path link
    else {
        const linkedPath = link.split('.');

        // Indexed link
        if(linkedPath.length === 2) {
            const [indexKey, taskId] = linkedPath;
            chainTask = getIndexedTask(indexKey, taskId);
        }
        // Standard full link
        else {
            const linkedID = linkedPath.pop();
            const linkedGroup: DataGroup = getLinkGroup(chainer, linkedPath, linkedID);

            chainTask = linkedGroup ? getChildTask(linkedGroup, linkedID) : undefined;
        }
    }

    if(!chainTask) {
        console.error(`Invalid link (${link}) from task: `, chainer.task);
    }

    return chainTask;
}
