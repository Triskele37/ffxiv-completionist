import type { Task } from '@model/Task';

export type IndexContainer = Map<string, IndexMeta>;

export type IndexMeta = {
    base: string;
    exclude?: string[];
    map: TaskIndex;
};

export type TaskIndex = Map<number, Task>;
