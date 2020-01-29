<template>
    <div id="item-container">
        <table
            class="task-table"
            v-if="showTable"
        >
            <task-table-header
                @filter-change="onFilterChange"
                :column-config="columnConfig"
                :uniqueValues="uniqueValues"
            />
            <task-table-data-row
                :column-config="columnConfig"
                :tasks="filteredTasks"
            />
        </table>
    </div>
</template>

<script>
    // Components
    import TaskTableHeader from './row-types/TaskTableHeader';
    import TaskTableDataRow from './row-types/TaskTableDataRow';

    // Export component
    export default {
        name: 'task-table',
        components: {
            'task-table-header': TaskTableHeader,
            'task-table-data-row': TaskTableDataRow,
        },
        props: {
            columnConfig: Array,
            tasks: Array,
        },
        data: () => ({
            filters: {}
        }),
        computed: {
            showTable: function() {
                if(!this.columnConfig) return false;
                if(!this.tasks) return false;
                return this.tasks.length > 0;
            },
            uniqueValues: function() {
                const uniqueValues = {};

                // Grab unique values from the filtered task list
                this.filteredTasks.forEach((task) => {
                    this.columnConfig.forEach(({ key }) => {
                        if(!uniqueValues[key]) uniqueValues[key] = [];

                        if(uniqueValues[key].indexOf(task[key]) === -1) {
                            uniqueValues[key].push(task[key]);
                        }
                    });
                });

                // Sort the unique values for pretty filter dropdowns
                this.columnConfig.forEach((column) => {
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
                let filtered = this.tasks.concat();

                if(this.filters.completed) {
                    filtered = filtered.filter((task) => {
                        const completed = task.completionFlag;
                        const filterCompleted = this.filters.completed.value;

                        if(!completed && filterCompleted === 'N') return true;
                        return completed === filterCompleted;
                    });
                }

                for(let i = 0; i < this.columnConfig.length; i++) {
                    const key = this.columnConfig[i].key;
                    const filter = this.filters[key];

                    if(filter) {
                        if(filter.filterType === 'search') {
                            filtered = filtered.filter((task) =>
                                task[key].toLowerCase().includes(filter.value.toLowerCase())
                            );
                        }
                        else {
                            filtered = filtered.filter((task) =>
                                task[key] === filter.value
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
