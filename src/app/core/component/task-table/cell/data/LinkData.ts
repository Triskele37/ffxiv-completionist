import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

export type LinkData = {
    dataType?: 'LinkData';
    value: DataGroup | Task | string;
    type: 'Group' | 'Task' | 'Value';
    pre?: string; // Text before the link
    post?: string; // Text after the link
};
