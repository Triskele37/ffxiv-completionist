<template>
    <tbody class="task-table-body">
        <tr
            v-for="(task, id) in tasks"
            :key="`${task.name}-${id}`"
            :draggable="enableDrag && !debounceDrag"
            :class="{
                selected: !!task.selected,
                dropTarget: !!task.dropTarget
            }"
            @click="onClick($event, task)"
            @dragstart="enableDrag && onRowDragStart(task)"
            @dragover="enableDrag && onRowDragOver($event, task)"
            @dragleave="enableDrag && onRowDragLeave($event, task)"
            @drop="enableDrag && onDragDrop(task)"
        >
            <template v-if="!task.isNumericCompletion">
                <completion-flag-cell :task="task" :flag="task.completionFlag" />
            </template>
            <template v-else>
                <completion-number-cell :task="task" :value="task.completionFlag"/>
            </template>

            <td
                class="data-cell"
                v-for="column in columnConfig"
                :class="{
                    centered: !!column.centered
                }"
            >
                <template v-if="column.editable && task.selected">
                    <edit-cell :taskKey="column.key" :task="task"/>
                </template>
                <template v-else>
                    {{task[column.key]}}
                </template>
            </td>

            <external-link-cell :taskName="task.name" />
        </tr>
    </tbody>
</template>

<script>
    import { getPlayerStore } from "../../../../store/electronStore";

    import CompleteCell from '../cell-types/CompleteCell';
    import EditCell from '../cell-types/EditCell';
    import NumericCompleteCell from '../cell-types/NumericCompleteCell';
    import ExternalCell from '../cell-types/ExternalCell';

    export default {
        name: 'task-table-data-row',
        props: {
            columnConfig: Array,
            tasks: Object,
            enableDrag: Boolean,
        },
        data: () => ({
            draggedId: null,
            debounceDrag: false
        }),
        components: {
            'completion-flag-cell': CompleteCell,
            'edit-cell': EditCell,
            'completion-number-cell': NumericCompleteCell,
            'external-link-cell': ExternalCell,
        },
        methods: {
            onClick: function($event, task) {
                if(!this.parentHasClass($event.target, 'noSelect')) {
                    task.selected = !task.selected;
                    this.$forceUpdate();
                }
            },
            onRowDragStart: function(task) {
                this.draggedId = task.id;
            },
            onRowDragOver: function($event, task) {
                $event.preventDefault();

                if(!task.dropTarget && task.id !== this.draggedId) {
                    task.dropTarget = true;
                    this.$forceUpdate();
                }
            },
            onRowDragLeave: function($event, task) {
                task.dropTarget = false;
                this.$forceUpdate();
            },
            onDragDrop: function(task) {
                if(task.id === this.draggedId) return;
                task.dropTarget = false;

                // Grab original data
                const draggedTask = this.tasks[`x${this.draggedId}`];
                const customFlags = getPlayerStore().get('overall.custom');
                const customMeta = getPlayerStore().get('custom');
                const taskKeys = Object.keys(customMeta);
                const draggedKey = `x${this.draggedId}`
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
                const firstId = Object.keys(this.tasks)[0]
                this.tasks[firstId]._parent.tasks = newTasks;
                getPlayerStore().set('overall.custom', newFlags);
                getPlayerStore().set('custom', newMeta);
                this.$forceUpdate();

                // Debounce dragging since its tied to file write
                this.debounceDrag = true;
                setTimeout(() => this.debounceDrag = false, 1000);
            },
            parentHasClass: function(element, className) {
                if(typeof element.className === "string" && element.className.includes(className)) return true;
                return element.parentNode && this.parentHasClass(element.parentNode, className);
            }
        }
    };
</script>

<style lang="scss">
.task-table-body {
    tr[draggable="true"] {
        &.dropTarget {
            filter: drop-shadow(0 0 5px #bec2cb);
        }

        &:active {
            cursor: pointer;
        }

        cursor: -webkit-grab;
    }
}
</style>
