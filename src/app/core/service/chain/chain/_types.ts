import { CompletionFlag } from '@constant';
import { Task } from '@model/Task';

// Utility for consistent parameter passing
export type ChainContext = {
    task: Task;
    flag: CompletionFlag;

    // Override to ignore X when chaining for starting class
    force: boolean;
};
