import { Task } from '@model/Task';

export type ChainIssue = ChainConstraint & {
    description: string;
};

export type ChainConstraint = {
    type: ChainConstraintType;
    task: Task;
    chainedTasks: Task[];

    // Chain type causing the issue
    relation: ChainRelation;

    // context for At chains
    taskThreshold?: number;
    chainThreshold?: number;
};

type ChainConstraintType =
    | 'REQUIRES'
    | 'REQUIRES_ANY'
    | 'MATCH'
    | 'EXCLUDES';

type ChainRelation =
    | 'cPrev'
    | 'cPrevAt'
    | 'cPrevAny'
    | 'cNext'
    | 'cUnlock'
    | 'cUnlocks'
    | 'cSiblings'
    | 'cSiblingsAt'
    | 'cCombo'
    | 'cComboAt'
    | 'cExclude'
    | 'cExclusive';
