<template>
    <tbody>
        <tr v-for="task in tasks">
            <complete-cell :task="task" />

            <td v-for="column in columns">
                {{task[column.key]}}
            </td>

            <external-cell :taskName="task.name" />
        </tr>
    </tbody>
</template>

<script>
    import * as CellType from './cell-types';

    export default {
        name: 'data-row',
        props: {
            tasks: Array,
            columns: Array,
        },
        components: {
            'complete-cell': CellType.CompleteCell,
            'external-cell': CellType.ExternalCell,
        }
    };
</script>

<style>
    .task-table td {
        max-width: 25vw;
        padding: 0 10px;
        white-space: normal;
    }
</style>
