<template>
    <tbody>
        <tr
            v-for="task in tasks"
            :key="task.name"
        >
            <complete-cell
                :group-storage-key="selectedGroup.storageKey"
                :task="task"
            />

            <td
                class="data-cell"
                v-for="column in selectedGroup.columns"
                :class="{
                    centered: column.styles ? column.styles.centered : false
                }"
            >
                {{task[column.key]}}
            </td>

            <external-cell :taskName="task.name" />
        </tr>
    </tbody>
</template>

<script>
    import * as CellType from './cell-types';

    export default {
        name: 'task-table-data-row',
        props: {
            selectedGroup: Object,
            tasks: Array,
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

    /* Conditional Styling */
    .data-cell.centered {
        text-align: center;
    }
</style>
