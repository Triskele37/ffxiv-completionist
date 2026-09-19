import type { CompletionFlag } from '@constant';
import type { Task } from '@model/Task';

// Each unique group containing chained tasks
export type ChainedGroup = {
    path: string;
    tasks: ChainedTask[];
    show?: boolean;
};

// Shared between ChainStart and ChainedTask
type TaskBase = {
    task: Task;
    fromFlag: string;
    toFlag?: string;
};

// The first task to start a chain
export type ChainStart = TaskBase & {
    path: string;
};

// Tasks that are affected by a chain
export type ChainedTask = TaskBase & {
    count?: number;
};

export type ChainContext = {
    task: Task;
    flag: CompletionFlag;

    // Override to ignore X when chaining for starting class
    force: boolean;
};

export type ChainHistory = {
    chainedTaskCount: number;
    chainStart: ChainStart;
    chainedGroups: ChainedGroup[];
};
