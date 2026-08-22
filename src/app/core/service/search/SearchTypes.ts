import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';

export enum Status {
    Success = 'success',
    Failure = 'failure'
}

export type Match = {
    header: string;
    value: number | string;
    task: Task;
};

export type GroupMatch = {
    header: string;
    value: number | string;
    group: DataGroup;
};
