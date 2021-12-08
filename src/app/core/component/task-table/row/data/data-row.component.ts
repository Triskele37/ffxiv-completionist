import { Component, Input } from '@angular/core';

import { Task } from '@domain/Task';
import { StoreService } from '@service/store/store.service';

@Component({
    selector: 'xiv-data-row',
    templateUrl: './data-row.component.html',
    styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent {
    @Input() columnConfig: any[];
    @Input() tasks: { [key: string]: Task };
    @Input() enableDrag: boolean = false;

    draggedId = null;
    debounceDrag = false;

    constructor(private svcStore: StoreService) {
    }

    onClick($event, task) {
        if(!this.parentHasClass($event.target, 'noSelect')) {
            task.selected = !task.selected;
            //TODO this.$forceUpdate();
        }
    }

    parentHasClass(element, className) {
        if(typeof element.className === 'string' && element.className.includes(className)) return true;
        return element.parentNode && this.parentHasClass(element.parentNode, className);
    }

    onDeselectTask(task) {
        task.selected = false;
        //TODO this.$forceUpdate();
    }

    //#region----------------------------------------------------------- Drag
    onRowDragStart(task) {
        this.draggedId = task.id;
    }

    onRowDragOver($event, task) {
        $event.preventDefault();

        if(!task.dropTarget && task.id !== this.draggedId) {
            task.dropTarget = true;
            //TODO this.$forceUpdate();
        }
    }

    onRowDragLeave($event, task) {
        task.dropTarget = false;
        //TODO this.$forceUpdate();
    }

    onDragDrop(task) {
        if(task.id === this.draggedId) return;
        task.dropTarget = false;

        // Grab original data
        const draggedTask = this.tasks[`x${this.draggedId}`]; //TODO: ???
        const customFlags = this.svcStore.pStore.get('overall.custom');
        const customMeta = this.svcStore.pStore.get('custom');
        const taskKeys = Object.keys(customMeta);
        const draggedKey = `x${this.draggedId}`;
        const targetKey = `x${task.id}`;

        // Remove the dragged key
        const before = taskKeys.indexOf(draggedKey) > taskKeys.indexOf(`x${task.id}`);
        taskKeys.splice(taskKeys.indexOf(draggedKey), 1);

        const newTasks = {};
        const newFlags = {};
        const newMeta = {};
        taskKeys.forEach((key) => {
            if(key === targetKey && before) {
                newTasks[draggedKey] = this.tasks[draggedKey];
                newFlags[this.draggedId] = customFlags[this.draggedId];
                newMeta[draggedKey] = customMeta[draggedKey];
            }

            newTasks[key] = this.tasks[key];
            newFlags[key.substr(1)] = customFlags[key.substr(1)];
            newMeta[key] = customMeta[key];

            if(key === targetKey && !before) {
                newTasks[draggedKey] = this.tasks[draggedKey];
                newFlags[this.draggedId] = customFlags[this.draggedId];
                newMeta[draggedKey] = customMeta[draggedKey];
            }
        });

        // Write re-order back
        const firstId = Object.keys(this.tasks)[0];
        this.tasks[firstId]._parent.tasks = newTasks;
        this.svcStore.pStore.set('overall.custom', newFlags);
        this.svcStore.pStore.set('custom', newMeta);
        //TODO this.$forceUpdate();

        // Debounce dragging since its tied to file write
        this.debounceDrag = true;
        setTimeout(() => this.debounceDrag = false, 1000);
    }

    //#endregion
}
