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
            group: Object,
            tasks: Object,
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
                return this.tasks && Object.keys(this.tasks).length > 0;
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
                let filtered = Object.assign({}, this.tasks);
                const hotwire = this.group.isNumericCompletion ? [] : [{ key: 'completion' }];
                hotwire.push(...this.columnConfig);

                for(const { key } of hotwire) {
                    const filter = this.filters[key];

                    if(filter) {
                        for(const id in filtered) {
                            let removeFromFiltered = false;

                            // Completion filters
                            if(key === 'completion') {
                                switch(this.tasks[id].completionFlag) {
                                    case "Y": removeFromFiltered = !filter.completed; break;
                                    case "N": removeFromFiltered = !filter.incomplete; break;
                                    case "X": removeFromFiltered = !filter.excluded; break;
                                    default: removeFromFiltered = !filter.incomplete; break;
                                }
                            }
                            // Column value fuzzy search filter
                            else if(filter.filterType === 'search') {
                                let safeValue = filtered[id][key];
                                if(safeValue === null || safeValue === undefined) safeValue = '';

                                const columnValue = safeValue.toString().toLowerCase();
                                removeFromFiltered = !columnValue.includes(filter.value.toLowerCase());
                            }
                            // Column value strict search filter
                            else {
                                removeFromFiltered = filtered[id][key] !== filter.value;
                            }

                            if(removeFromFiltered) {
                                delete filtered[id];
                            }
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
