import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

export type LinkData = {
    dataType?: 'LinkData';
    pre?: string; // Text before the link
    post?: string; // Text after the link
} & (GroupLinkData | TaskLinkData | ValueLinkData);

type GroupLinkData = {
    value: DataGroup;
    type: 'Group';
};

type TaskLinkData = {
    value: Task;
    type: 'Task';
};

type ValueLinkData = {
    value: string;
    type: 'Value';
};
