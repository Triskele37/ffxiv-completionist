<template>
    <div v-if="!!columnConfig">
        <span class="task-table-toolbar">
            <span v-if="hasTasks && !tasks[0].isNumericCompletion">
                <quick-mark-dropdown :filtered-tasks="filteredTasks"/>
            </span>

            <span v-if="hasTasks && !tasks[0].isNumericCompletion">
                <selection-action-dropdown :group="group" :filtered-tasks="filteredTasks" v-on:select-change="onSelectChange"/>
            </span>

            <span v-if="group.isCustomGroup">
                <custom-task-dropdown :filtered-tasks="filteredTasks"/>
            </span>
        </span>

        <table class="xiv-table" v-if="hasTasks">
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
    import SelectionActionDropdown from "./SelectionActionDropdown";
    import CustomTaskDropdown from './CustomTaskDropdown';
    import TaskTableHeader from './row-types/TaskTableHeader';
    import TaskTableDataRow from './row-types/TaskTableDataRow';

    // Export component
    export default {
        name: 'task-table',
        components: {
          SelectionActionDropdown,
            'quick-mark-dropdown': QuickMarkDropdown,
            'selection-action-dropdown': SelectionActionDropdown,
            'custom-task-dropdown': CustomTaskDropdown,
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
            }
        }
    }
</script>

<style lang="scss">
.task-table-toolbar > span {
    display: inline-block;
}
</style>
