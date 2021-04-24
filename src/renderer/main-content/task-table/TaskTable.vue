<template>
    <div id="item-container" v-if="!!columnConfig">
        <span v-if="hasTasks && !tasks[0].isNumericCompletion">
            <quick-mark-dropdown
                v-on:select-change="onSelectChange"
                :filtered-tasks="filteredTasks"
            />
        </span>

        <span v-if="group.isCustomGroup">
            <add-custom-task
                :filtered-tasks="filteredTasks"
            />
        </span>

        <table class="task-table" v-if="hasTasks">
            <task-table-header
                @filter-change="onFilterChange"
                :column-config="columnConfig"
                :uniqueValues="uniqueValues"
                :is-numeric-completion="tasks[0].isNumericCompletion"
            />
            <task-table-data-row
                :key="rerenderKey"
                :column-config="columnConfig"
                :tasks="filteredTasks"
            />
        </table>
    </div>
</template>

<script>
    // Components
    import QuickMarkDropdown from './QuickMarkDropdown';
    import AddCustomTask from './AddCustomTask';
    import TaskTableHeader from './row-types/TaskTableHeader';
    import TaskTableDataRow from './row-types/TaskTableDataRow';

    // Export component
    export default {
        name: 'task-table',
        components: {
            'quick-mark-dropdown': QuickMarkDropdown,
            'add-custom-task': AddCustomTask,
            'task-table-header': TaskTableHeader,
            'task-table-data-row': TaskTableDataRow,
        },
        props: {
            columnConfig: Array,
            group: Object,
            tasks: Array,
        },
        data: () => ({
            filters: {},
            rerenderKey: 0
        }),
        computed: {
            hasTasks: function() {
                return this.tasks && this.tasks.length > 0;
            },
            uniqueValues: function() {
                const uniqueValues = {};

                // Grab unique values from the filtered task list
                this.filteredTasks.forEach((task) => {
                    this.columnConfig.forEach(({ key }) => {
                        if(!uniqueValues[key]) uniqueValues[key] = [];

                        if(task[key] && uniqueValues[key].indexOf(task[key]) === -1) {
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
                                task[key].toString().toLowerCase().includes(filter.value.toLowerCase())
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
            },
            onSelectChange: function() {
                this.rerenderKey++;
            },
            addCustomTask: function() {

            }
        }
    }
</script>

<style>
    /*---------------------- Container ----------------------*/
    #item-container {

    }

    #item-container > span {
        display: inline-block;
    }

    .task-table {
        border-spacing: 0;
        width: 100%;
    }

    /*---------------------- Row ----------------------*/
    .task-table tr {
        background-color: #3282B8;
        border-bottom: 1px solid black;
        cursor: pointer;
    }

    .task-table tr:nth-child(even) {
        background-color: #0F4C75;
    }
</style>
