<template>
    <tbody>
        <tr
            v-for="task in tasks"
            :key="task.name"
        >
            <completion-flag-cell :task="task" :flag="task.completionFlag" />

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
    import ExternalCell from './cell-types/ExternalCell';

    export default {
        name: 'task-table-data-row',
        props: {
            columnConfig: Array,
            tasks: Array,
        },
        components: {
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
