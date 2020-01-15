<template>
    <div id="item-container">
        <div
            class="helper-error"
            v-if="selectedGroup && selectedGroup.tasks && !selectedGroup.columns"
        >
            Error: Tasks exist with no column config for {{selectedGroup.name}}
        </div>

        <table
            class="task-table"
            v-if="showTable"
        >
            <thead>
                <tr>
                    <th></th>

                    <th v-for="column in selectedGroup.columns">
                        <select
                            v-if="!filters[column.key] && column.filterable"
                            @change="addFilter($event, column)"
                        >
                            <option></option>
                            <option v-for="uniqueValue in uniqueValues[column.key]">
                                {{uniqueValue}}
                            </option>
                        </select>

                        <div
                            class="applied-filter"
                            v-if="!!filters[column.key] && column.filterable"
                            @click="removeFilter(column.key)"
                        >
                            {{filters[column.key].value}}
                        </div>
                    </th>

                    <th></th>
                </tr>
                <tr>
                    <th>&#10004;</th>

                    <th v-for="column in selectedGroup.columns">
                        {{column.header}}
                    </th>

                    <th>Links</th>
                </tr>
            </thead>
            <tr v-for="task in filteredTasks">
                <complete-cell :task="task" />

                <td v-for="column in selectedGroup.columns">
                    {{task[column.key]}}
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
        data: () => ({
            filters: {}
        }),
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

                // Assert column config
                return !!this.selectedGroup.columns;
            },
            filteredTasks: function() {
                let filtered = this.selectedGroup.tasks.concat();

                for(let i = 0; i < this.selectedGroup.columns.length; i++) {
                    const key = this.selectedGroup.columns[i].key;

                    if(this.filters[key]) {
                        filtered = filtered.filter((task) => {
                            return task[key] === this.filters[key].value;
                        });
                    }
                }

                return filtered;
            },
            uniqueValues: function() {
                const uniqueValues = {};

                this.filteredTasks.forEach((task) => {
                    this.selectedGroup.columns.forEach(({ key }) => {
                        if(!uniqueValues[key]) uniqueValues[key] = [];

                        if(uniqueValues[key].indexOf(task[key]) === -1) {
                            uniqueValues[key].push(task[key]);
                        }
                    });
                });

                Object.keys(uniqueValues).forEach((key) => {
                    uniqueValues[key].sort();
                });

                return uniqueValues;
            }
        },
        methods: {
            addFilter: function($event, column) {
                const value = $event.target.value;

                // New Filter
                this.filters[column.key] = {
                    key: column.key,
                    filterType: column.filterType,
                    value: column.filterType === 'number' ? parseInt(value) : value
                };

                this.filters = Object.assign({}, this.filters);
            },
            removeFilter: function(key) {
                this.filters[key] = null;

                this.filters = Object.assign({}, this.filters);
            }
        }
    }
</script>

<style>
    .helper-error {
        background-color: red;
    }

    /*---------------------- Container ----------------------*/
    #item-container {
        height: calc(100% - 150px);
        margin: 0 10px;
        overflow-y: auto;
    }

    .task-table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
    }

    /*---------------------- Row ----------------------*/
    .task-table tr {
        background-color: #3282B8;
        border-bottom: 1px solid black;
    }

    .task-table tr:nth-child(even) {
        background-color: #0F4C75;
    }

    /*---------------------- Header ----------------------*/
    .task-table th {
        background-color: #3282B8;
        max-width: 25vw;
        position: sticky;
        top: 0;

        user-select: none;
    }

    .task-table th:hover {
        /*background-color: rgba(0, 0, 0, 0.1);*/
    }

    .task-table .applied-filter {
        cursor: pointer;
    }

    .task-table .applied-filter:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    /*---------------------- Filter ----------------------*/
    .task-table th select {
        background-color: #3282B8;
        border-top: none;
        border-bottom: none;
        border-left: 1px solid black;
        border-right: 1px solid black;
        color: #BBE1FA;

        width: 100%;
        max-width: 25vw;

        cursor: pointer;
    }

    .task-table th select:hover {
        filter: brightness(150%);
    }

    /*---------------------- Data ----------------------*/
    .task-table td {
        max-width: 25vw;
        padding: 0 10px;
        white-space: normal;
    }
</style>
