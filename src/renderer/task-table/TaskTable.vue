<template>
    <div id="item-container">
        <helper-error
            :selectedGroup="selectedGroup"
        />

        <table
            class="task-table"
            v-if="showTable"
        >
            <task-table-header
                @filter-change="onFilterChange"
                :columns="selectedGroup.columns"
                :uniqueValues="uniqueValues"
            />
            <task-table-data-row
                :selected-group="selectedGroup"
                :tasks="filteredTasks"
            />
        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    // Components
    import HelperMessages from './HelperMessages';
    import TaskTableHeader from './row-types/TaskTableHeader';
    import TaskTableDataRow from './row-types/TaskTableDataRow';

    // Export component
    export default {
        name: 'task-table',
        components: {
            'helper-error': HelperMessages,
            'task-table-header': TaskTableHeader,
            'task-table-data-row': TaskTableDataRow,
        },
        data: () => ({
            filters: {}
        }),
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
            uniqueValues: function() {
                const uniqueValues = {};

                // Grab unique values from the filtered task list
                this.filteredTasks.forEach((task) => {
                    this.selectedGroup.columns.forEach(({ key }) => {
                        if(!uniqueValues[key]) uniqueValues[key] = [];

                        if(uniqueValues[key].indexOf(task[key]) === -1) {
                            uniqueValues[key].push(task[key]);
                        }
                    });
                });

                // Sort the unique values for pretty filter dropdowns
                this.selectedGroup.columns.forEach((column) => {
                    if(!uniqueValues[column.key]) return;
                    if(column.filterType === 'number') {
                        uniqueValues[column.key].sort((a, b) => parseInt(a) - parseInt(b));
                    }
                    else {
                        uniqueValues[column.key].sort();
                    }
                });

                return uniqueValues;
            },
            filteredTasks: function() {
                let filtered = this.selectedGroup.tasks.concat();

                for(let i = 0; i < this.selectedGroup.columns.length; i++) {
                    const key = this.selectedGroup.columns[i].key;

                    if(this.filters[key]) {
                        if(this.filters[key].filterType === 'search') {
                            filtered = filtered.filter(
                                (task) => task[key].toLowerCase()
                                    .includes(this.filters[key].value.toLowerCase())
                            );
                        }
                        else {
                            filtered = filtered.filter(
                                (task) => task[key] === this.filters[key].value
                            );
                        }
                    }
                }

                return filtered;
            }
        },
        methods: {
            onFilterChange: function(filters) {
                this.filters = filters;
            }
        }
    }
</script>

<style>
    /*---------------------- Container ----------------------*/
    #item-container {
        height: calc(100% - 150px);
        margin: 0 10px;
        overflow-y: auto;
    }

    .task-table {
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
</style>
