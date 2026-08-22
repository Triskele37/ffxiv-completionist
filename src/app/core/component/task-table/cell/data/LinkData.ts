import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';

export type LinkData = {
    dataType?: 'LinkData';
    value: DataGroup | Task | string;
    type: 'Group' | 'Task' | 'Value';
    pre?: string; // Text before the link
    post?: string; // Text after the link
};
