import type { JSONResource } from '@model/JSONResource';
import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

export type JSON_GROUP = JSONResource & {
    columns?: JSONResource;
    tasks?: Record<string, JSONResource & {
        hidden?: boolean;
    }>;
};

export type LinkData = {
    dataType?: 'LinkData';
} & (GroupLinkData | TaskLinkData | ValueLinkData);

type GroupLinkData = {
    type: 'Group';
    value: DataGroup;
};

type TaskLinkData = {
    type: 'Task';
    value: Task;
};

type ValueLinkData = {
    type: 'Value';
    value: string;
};
