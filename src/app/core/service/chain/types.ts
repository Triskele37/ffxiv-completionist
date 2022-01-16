import { Task } from '@domain/Task';

// Tasks as used by the chain service
export type ChainTask = {
    task: Task;
    fromFlag: string;
    toFlag: string;
};

// The first task to start a chain
export type ChainStart = ChainTask & {
    path: string;
};

// All tasks affected by a chain grouped by their group path
export type ChainedTasks = {
    [key: string]: ChainedGroup;
};

// Necessary to allow index signature and known props
export type ChainedGroup = ChainedGroupTasks & ChainedGroupProps;

// Index signature for each task
interface ChainedGroupTasks {
    [key: string]: ChainedTask;
}

// Known props of a ChainedGroup
interface ChainedGroupProps {
    show?: boolean;
}

// Tasks that are affected by a chain
type ChainedTask = {
    task: Task;
    fromFlag: string;
    toFlag: string;

    count: number;
};
