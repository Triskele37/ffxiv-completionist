<template>
    <div v-if="!!columnConfig">
        <div class="task-table-toolbar">
            <span v-if="hasTasks && !tasks[0].isNumericCompletion">
                <quick-mark-dropdown :filtered-tasks="filteredTasks"/>
            </span>

            <span v-if="hasTasks && !tasks[0].isNumericCompletion">
                <selection-action-dropdown :group="group" :filtered-tasks="filteredTasks" v-on:select-change="onSelectChange"/>
            </span>

            <span v-if="group.isCustomGroup">
                <custom-task-dropdown :filtered-tasks="filteredTasks"/>
            </span>

            <span class="row-count">
                {{filteredTasks.length}} Rows displayed
            </span>
        </div>

        <div class="task-table-scroll-container">
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
    </div>
</template>

<script>
    import { eStore } from "../../../store/electronStore";

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
            filters: {
                completion: {
                    completed: eStore.get("table-filters.completed"),
                    incomplete: eStore.get("table-filters.incomplete"),
                    excluded: eStore.get("table-filters.excluded"),
                }
            },
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

                        const value = !task[key] && task[key] !== 0 ? "" : task[key];
                        if(uniqueValues[key].indexOf(value) === -1) {
                            uniqueValues[key].push(value);
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

                // Completion filters
                if(this.hasTasks && !this.tasks[0].isNumericCompletion) {
                    filtered = filtered.filter(({ completionFlag }) => {
                        switch(completionFlag) {
                            case "Y": return this.filters.completion.completed;
                            case "N": return this.filters.completion.incomplete;
                            case "X": return this.filters.completion.excluded;
                            default: return this.filters.completion.incomplete;
                        }
                    });
                }

                // Column filters
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
.task-table-toolbar {
    & > span {
        display: inline-block;
    }

    .row-count {
        margin-left: 5px;
    }
}

.task-table-scroll-container {
    overflow-y: auto;
    display: inline-block;
    height: 83vh;
    width: 100%;
}
</style>
