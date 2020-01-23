<template>
    <div id="item-container">
        <helper-error :selectedGroup="group" />

        <table
            class="task-table"
            v-if="showTable"
        >
            <task-table-header
                @filter-change="onFilterChange"
                :columns="group.columns"
                :uniqueValues="uniqueValues"
            />
            <task-table-data-row
                :selected-group="group"
                :tasks="filteredTasks"
            />
        </table>
    </div>
</template>

<script>
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
        props: {
            group: Object
        },
        data: () => ({
            filters: {}
        }),
        computed: {
            showTable: function() {
                // No group
                if(!this.group) return false;

                // No tasks
                if(!this.group.tasks) return false;
                if(this.group.tasks.length === 0) return false;

                // Assert column config
                return !!this.group.columns;
            },
            uniqueValues: function() {
                const uniqueValues = {};

                // Grab unique values from the filtered task list
                this.filteredTasks.forEach((task) => {
                    this.group.columns.forEach(({ key }) => {
                        if(!uniqueValues[key]) uniqueValues[key] = [];

                        if(uniqueValues[key].indexOf(task[key]) === -1) {
                            uniqueValues[key].push(task[key]);
                        }
                    });
                });

                // Sort the unique values for pretty filter dropdowns
                this.group.columns.forEach((column) => {
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
                let filtered = this.group.tasks.concat();

                if(this.filters.completed) {
                    filtered = filtered.filter((task) => {
                        const completed = this.$store.getters.getCompletionFlag(`${this.group.storageKey}.${task.name}`);
                        const filterCompleted = this.filters.completed.value;

                        if(!completed && filterCompleted === 'N') return true;
                        return completed === filterCompleted;
                    });
                }

                for(let i = 0; i < this.group.columns.length; i++) {
                    const key = this.group.columns[i].key;
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
