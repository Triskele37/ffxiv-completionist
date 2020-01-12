<template>
    <div id="item-container">
        <div
            class="helper-error"
            v-if="selectedGroup && selectedGroup.tasks && !selectedGroup.tableConfig"
        >
            Error: Tasks exist with no table config for {{selectedGroup.name}}
        </div>

        <table
            class="task-table"
            v-if="showTable"
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
            }),
            showTable: function() {
                // No group
                if(!this.selectedGroup) return false;

                // No tasks
                if(!this.selectedGroup.tasks) return false;
                if(this.selectedGroup.tasks.length === 0) return false;

                // No tableConfig
                return !!this.selectedGroup.tableConfig;
            },
        }
    }
</script>

<style>
    .helper-error {
        background-color: red;
    }

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
        background-color: #3282B8;
        border-bottom: 1px solid black;
    }

    .task-table tr:nth-child(even) {
        background-color: #0F4C75;
    }

    .task-table th {
        background-color: #3282B8;
        position: sticky;
        top: 0;
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
