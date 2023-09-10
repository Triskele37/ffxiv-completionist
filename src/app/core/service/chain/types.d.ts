import { Task } from '@model/Task';

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
    historyDisabled: boolean;
    path: string;
};

// Tasks that are affected by a chain
export type ChainedTask = TaskBase & {
    count?: number;
};

export type ChainHistory = {
    chainedTaskCount: number;
    chainStart: ChainStart;
    chainedGroups: ChainedGroup[];
};
