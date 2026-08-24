import { Injectable, signal } from '@angular/core';

import type { Task } from '@model/Task';

@Injectable({
    providedIn: 'root'
})
export class ChainViewerService {
    originalTask: Task | undefined;
    task = signal<Task | undefined>(undefined);

    constructor() {
    }

    openChainViewer(task: Task) {
        this.originalTask = task;
        this.task.set(task);
    }

    changeTargetTask(task: Task) {
        this.task.set(task);
    }

    closeChainViewer() {
        this.task.set(undefined);
    }
}
