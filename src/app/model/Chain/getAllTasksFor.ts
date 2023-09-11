import { Task } from '@model/Task';

import { Chainer } from './Chainer';
import { Links } from './ChainLink';
import { getLinkGroup } from './getLinkGroup';
import { getTaskFromLink } from './getTaskFromLink';

export function getAllTasksFor(chainer: Chainer, pLinkList: Links): Task[] {
    const list = Array.isArray(pLinkList) ? pLinkList : [pLinkList];

    return list.reduce((acc: Task[], pLink) => {
        const path = typeof pLink === 'string' ? pLink.split('.') : [pLink];
        const id = path.pop().toString();

        if(id === 'all' || id.includes('-')) {
            // Dealing with a range of tasks
            const group = getLinkGroup(chainer, path, id);
            const range = id === 'all' ? [-1, Infinity] :
                id.split('-').map((n) => parseInt(n, 10));

            // Include tasks that fall into 'range' (inclusive)
            group.tasks.forEach((task) => {
                if(task.id >= range[0] && task.id <= range[1]) {
                    acc.push(task);
                }
            });
        }
        else {
            // Dealing with a single task
            acc.push(getTaskFromLink(chainer, pLink));
        }

        return acc;
    }, []);
}
