<template>
    <div v-if="!!columnConfig" class="task-table-container">
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

            <span v-if="hasTasks">
                <chain-dropdown></chain-dropdown>
            </span>

            <span v-if="group.isCustomGroup">
                <custom-task-dropdown :filtered-tasks="filteredTasks"/>
            </span>

            <span v-if="hasTasks" class="row-count" :title="(totalTasks - displayedTasks) + ' Hidden'">
                {{displayedTasks}} Rows displayed
            </span>
        </div>

        <div class="task-table-scroll-container" ref="taskTable">
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
                    :enable-drag="group.draggable"
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
            displayedTasks: 0,
            totalTasks: 0,
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
                            // Blank value search
                            else if(filter.value === 'Blank') {
                                removeFromFiltered = !!filtered[id][key];
                            }
                            // Column value fuzzy search filter
                            else {
                                let safeValue = filtered[id][key];
                                if(safeValue === null || safeValue === undefined) safeValue = '';

                                const columnValue = safeValue.toString().toLowerCase();
                                removeFromFiltered = !columnValue.includes(filter.value.toLowerCase());
                            }

                            if(removeFromFiltered) {
                                delete filtered[id];
                            }
                        }
                    }
                }

                this.displayedTasks = Object.keys(filtered).length;
                this.totalTasks = Object.keys(this.tasks).length;

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
        },
        watch: {
            group: function(oldGroup, newGroup) {
                if(newGroup && oldGroup.name !== newGroup.name) {
                    this.$refs.taskTable.scrollTop = 0;
                }
            }
        }
    }
</script>

<style lang="scss">
.task-table-container {
    display: flex;
    flex-direction: column;
}

.task-table-toolbar {
    & > span {
        display: inline-block;
    }

    .row-count {
        margin-left: 5px;
        cursor: default;
    }
}

.task-table-scroll-container {
    display: inline-block;
    overflow-y: auto;

    height: 100%;
    width: 100%;
}
</style>
