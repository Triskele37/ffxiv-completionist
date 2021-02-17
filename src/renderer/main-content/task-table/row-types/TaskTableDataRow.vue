<template>
    <tbody>
        <tr
            v-for="task, index in tasks"
            :key="`${task.name}-${index}`"
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
                {{task[column.key]}}
            </td>

            <external-cell :taskName="task.name" />
        </tr>
    </tbody>
</template>

<script>
    import CompleteCell from './cell-types/CompleteCell';
    import NumericCompleteCell from './cell-types/NumericCompleteCell';
    import ExternalCell from './cell-types/ExternalCell';

    export default {
        name: 'task-table-data-row',
        props: {
            columnConfig: Array,
            tasks: Array,
        },
        components: {
            'completion-number-cell': NumericCompleteCell,
            'completion-flag-cell': CompleteCell,
            'external-cell': ExternalCell,
        }
    };
</script>

<style>
    .task-table td {
        max-width: 25vw;
        padding: 0 10px;
        white-space: normal;
    }

    /* Conditional Styling */
    .data-cell.centered {
        text-align: center;
    }
</style>
