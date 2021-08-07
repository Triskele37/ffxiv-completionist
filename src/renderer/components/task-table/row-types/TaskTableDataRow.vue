<template>
    <tbody>
        <tr
            v-for="(task, id) in tasks"
            :key="`${task.name}-${id}`"
            :class="{
                selected: !!task.selected
            }"
            @click="onClick($event, task)"
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
    import CompleteCell from '../cell-types/CompleteCell';
    import EditCell from '../cell-types/EditCell';
    import NumericCompleteCell from '../cell-types/NumericCompleteCell';
    import ExternalCell from '../cell-types/ExternalCell';

    export default {
        name: 'task-table-data-row',
        props: {
            columnConfig: Array,
            tasks: Object,
        },
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
            parentHasClass: function(element, className) {
                if(typeof element.className === "string" && element.className.includes(className)) return true;
                return element.parentNode && this.parentHasClass(element.parentNode, className);
            }
        }
    };
</script>

<style lang="scss">
</style>
