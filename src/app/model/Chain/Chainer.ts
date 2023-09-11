import { CompletionFlag } from '@constant';
import { Task } from '@model/Task';

export type Chainer = {
    task: Task;
    flag: CompletionFlag;

    // Override to ignore X when chaining for starting class
    force: boolean;
};
