<template>
    <div id="item-container">
        <table
            class="task-table"
            v-if="selectedGroup && selectedGroup.tasks && selectedGroup.tasks.length > 0"
        >
            <tr>
                <th>&#10004;</th>

                <th v-for="header in selectedGroup.tableConfig.headers">
                    {{header}}
                </th>

                <th>Links</th>
            </tr>
            <tr v-for="task in selectedGroup.tasks">
                <complete-cell :task="task" />

                <td v-for="columnKey in selectedGroup.tableConfig.columnKeys">
                    {{task[columnKey]}}
                </td>

                <external-cell :taskName="task.name" />
            </tr>
        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    // Cell Types
    import * as CellType from './cell-types';

    // Export component
    export default {
        name: 'task-table',
        components: {
            'complete-cell': CellType.CompleteCell,
            'external-cell': CellType.ExternalCell,
        },
        computed: {
            ...mapState('navigation', {
                selectedGroup: 'selectedGroup'
            })
        },
        methods: {

        }
    }
</script>

<style>
    /*---------------------- Item List ----------------------*/
    #item-container {
        height: calc(100% - 140px);
        margin: 0 20px 20px 20px;
        overflow-y: scroll;
    }

    .task-table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
    }

    .task-table tr {
        background-color: #75748D;
        border-bottom: 1px solid #aaa;
    }

    .task-table tr:nth-child(even) {
        background-color: #64639C;
    }

    .task-table th {

    }

    .task-table td {
        max-width: 25vw;
        padding: 0 10px;
        white-space: normal;
    }

    #tbl-name, #tbl-description {
        text-align: center;
    }
</style>
