import type { Task } from '@model/Task';
import { ChainKeys } from '@model/Chain/ChainLink';

export type ChainIssue = ChainConstraint & {
    description: string;
};

export type ChainConstraint = {
    type: ChainConstraintType;
    task: Task;
    chainedTasks: Task[];

    // Chain type causing the issue
    relation: ChainKeys;

    // context for At chains
    taskThreshold?: number;
    chainThreshold?: number;
};

type ChainConstraintType =
    | 'REQUIRES'
    | 'REQUIRES_ANY'
    | 'MATCH'
    | 'EXCLUDES';
