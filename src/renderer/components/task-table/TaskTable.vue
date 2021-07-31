<template>
    <div v-if="!!columnConfig">
        <div class="task-table-toolbar">
            <span v-if="hasTasks && !group.isNumericCompletion">
                <quick-mark-dropdown :filtered-tasks="filteredTasks"/>
            </span>

            <span v-if="hasTasks && !group.isNumericCompletion">
                <selection-action-dropdown
                    :group="group"
                    :filtered-tasks="filteredTasks"
                    v-on:select-change="onSelectChange"
                />
            </span>

            <span v-if="hasTasks && !group.isCustomGroup">
                <chain-dropdown></chain-dropdown>
            </span>

            <span v-if="group.isCustomGroup">
                <custom-task-dropdown :filtered-tasks="filteredTasks"/>
            </span>

            <span v-if="hasTasks" class="row-count">
                {{Object.keys(filteredTasks).length}} Rows displayed
            </span>
        </div>

        <div class="task-table-scroll-container">
            <table class="xiv-table" v-if="hasTasks">
                <task-table-header
                    @filter-change="onFilterChange"
                    :column-config="columnConfig"
                    :uniqueValues="uniqueValues"
                    :is-numeric-completion="group.isNumericCompletion"
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
    import ChainDropdown from "./ChainDropdown";
    import CustomTaskDropdown from './CustomTaskDropdown';
    import TaskTableHeader from './row-types/TaskTableHeader';
    import TaskTableDataRow from './row-types/TaskTableDataRow';

    // Export component
    export default {
        name: 'task-table',
        components: {
            QuickMarkDropdown,
            SelectionActionDropdown,
            ChainDropdown,
            CustomTaskDropdown,
            TaskTableHeader,
            TaskTableDataRow,
        },
        props: {
            columnConfig: Array,
            group: Object
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
                return this.group.tasks && this.group.taskCount > 0;
            },
            uniqueValues: function() {
                const uniqueValues = {};

                // Grab unique values from the filtered task list
                for(const id in this.filteredTasks) {
                    const task = this.filteredTasks[id];

                    this.columnConfig.forEach(({ key }) => {
                        if(!uniqueValues[key]) uniqueValues[key] = [];

                        const value = !task[key] && task[key] !== 0 ? "" : task[key];
                        if(uniqueValues[key].indexOf(value) === -1) {
                            uniqueValues[key].push(value);
                        }
                    });
                }

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
                let filtered = Object.assign({}, this.group.tasks);

                // Completion filters
                if(!this.group.isNumericCompletion) {
                    for(const id in this.group.tasks) {
                        let filterOut = false;

                        switch(this.group.tasks[id].completionFlag) {
                            case "Y": filterOut = !this.filters.completion.completed; break;
                            case "N": filterOut = !this.filters.completion.incomplete; break;
                            case "X": filterOut = !this.filters.completion.excluded; break;
                            default: filterOut = !this.filters.completion.incomplete; break;
                        }

                        if(filterOut) delete filtered[id];
                    }
                }

                // Column filters
                for(let i = 0; i < this.columnConfig.length; i++) {
                    const key = this.columnConfig[i].key;
                    const filter = this.filters[key];

                    if(filter) {
                        for(const id in this.group.tasks) {
                            const task = this.group.tasks[id];
                            let filterOut = false;

                            if(filter.filterType === 'search') {
                                const val = task[key].toString().toLowerCase();
                                filterOut = val === filter.value.toLowerCase();
                            }
                            else {
                                filterOut = task[key] === filter.value;
                            }

                            if(filterOut) delete this.group.tasks[id];
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
