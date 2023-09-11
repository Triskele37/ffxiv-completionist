import { CompletionFlag } from '@constant';
import { Task } from '@model/Task';

import { Chainer } from './Chainer';

export function createChainer(
    task: Task,
    flag: CompletionFlag,
    force: boolean = false,
): Chainer {
    return { task, flag, force };
}
