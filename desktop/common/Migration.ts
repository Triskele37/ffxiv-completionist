export type Migration = {
    targetVersion: string;
    resultVersion: string;
    actionGroups?: Record<string, MigrationActions[]>;
};

export type ID = number | string;

export type Range = {
    start: ID;
    end: ID;
};

export type MigrationActions = MultiAction | Action;

export type Action =
    | ChangeAndMoveTasks
    | ChangeKeyAction
    | ChangeKeysAction
    | DeleteGroupAction
    | DeleteTaskAction
    | DeleteTasksAction
    | MatchLeft
    | MergeTask
    | MoveAndChangeTasks
    | MoveGroupAction
    | MoveTaskAction
    | MoveTasksAction;

export type MultiAction = {
    type: 'MultiAction';
    withValues: string[];
    as: string;
    actions: Action[];
};

type ChangeAndMoveTasks = {
    type: 'changeAndMoveTasks';
    from: string;
    to: string;
    ids: [number, number][];
};

type ChangeKeyAction = {
    type: 'changeKey';
    group: string;
    from: ID;
    to: ID;
};

type ChangeKeysAction = {
    type: 'changeKeys';
    group: string;
    ids: [number, number][];
};

type DeleteGroupAction = {
    type: 'deleteGroup';
    group: string;
};

type DeleteTaskAction = {
    type: 'deleteTask';
    group: string;
    id: ID;
};

type DeleteTasksAction = {
    type: 'deleteTasks';
    group: string;
    ids: (ID | Range)[];
};

type MatchLeft = {
    type: 'matchLeft';
    leftGroup: string;
    rightGroup: string;
    ids: ID[][];
};

type MergeTask = {
    type: 'mergeTask';
    from: string;
    fromId: ID;
    to: string;
    toId: ID;
};

type MoveAndChangeTasks = {
    type: 'moveAndChangeTasks';
    from: string;
    to: string;
    ids: [number, number][];
};

type MoveGroupAction = {
    type: 'moveGroup';
    from: string;
    to: string;
};

type MoveTaskAction = {
    type: 'moveTask';
    from: string;
    to: string;
    id: ID;
};

type MoveTasksAction = {
    type: 'moveTasks';
    from: string;
    to: string;
    ids: (ID | Range)[];
};
