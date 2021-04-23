<template>
    <div id="item-container">
        <template v-if="tasks && tasks.length && !tasks[0].isNumericCompletion">
            <div class="action-dropdown-container" v-if="showTable">
                <div
                    class="action-dropdown-arrow"
                    @mouseenter="actionDropdownOpen = true"
                    @mouseleave="actionDropdownOpen = false"
                >
                    &#8230;
                </div>
                <div
                    v-if="actionDropdownOpen"
                    @mouseenter="actionDropdownOpen = true"
                    @mouseleave="actionDropdownOpen = false"
                    class="action-dropdown"
                >
                  <button class="action-dropdown-item" @click="changeTasks('N', 'Y')">
                      (<span class="incomplete">&#10008</span> &#8594; <span class="complete">&#10004</span>)
                      Mark Incomplete as Complete
                  </button>
                  <button class="action-dropdown-item" @click="changeTasks('N', 'X')">
                      (<span class="incomplete">&#10008</span> &#8594; <span class="exclude">&#10006</span>)
                      Mark Incomplete as Excluded
                  </button>
                  <button class="action-dropdown-item" @click="changeTasks('Y', 'N')">
                      (<span class="complete">&#10004</span> &#8594; <span class="incomplete">&#10008</span>)
                      Mark Complete as Incomplete
                  </button>
                  <button class="action-dropdown-item" @click="changeTasks('Y', 'X')">
                      (<span class="complete">&#10004</span> &#8594; <span class="exclude">&#10006</span>)
                      Mark Complete as Excluded
                  </button>
                  <button class="action-dropdown-item" @click="changeTasks('X', 'N')">
                      (<span class="exclude">&#10006</span> &#8594; <span class="incomplete">&#10008</span>)
                      Mark Excluded as Incomplete
                  </button>
                  <button class="action-dropdown-item" @click="changeTasks('X', 'Y')">
                      (<span class="exclude">&#10006</span> &#8594; <span class="complete">&#10004</span>)
                      Mark Excluded as Complete
                  </button>
                </div>
            </div>
        </template>

        <table
            class="task-table"
            v-if="showTable"
        >
            <task-table-header
                @filter-change="onFilterChange"
                :column-config="columnConfig"
                :uniqueValues="uniqueValues"
                :is-numeric-completion="tasks && tasks.length && tasks[0].isNumericCompletion"
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
    import { data } from "../../../data";
    import { applyDataToStore } from "../../../store/electronStore/applyDataToStore";

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
            actionDropdownOpen: false,
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
            changeTasks: function(from, to) {
              this.filteredTasks.forEach((task) => {
                if(task.completionFlag === from) task.changeCompletionFlag(to);
              });

              applyDataToStore(data);
            },
            selectAll: function() {
                this.filteredTasks.forEach((task) => {
                    if(task.completionFlag === 'N') task.changeCompletionFlag('Y');
                });

                applyDataToStore(data);
            },
            deselectAll: function() {
                this.filteredTasks.forEach((task) => {
                    if(task.completionFlag === 'Y') task.changeCompletionFlag('N');
                });

                applyDataToStore(data);
            },
            excludeAll: function() {
                this.filteredTasks.forEach((task) => {
                    if(task.completionFlag !== 'X') task.changeCompletionFlag('X');
                });

                applyDataToStore(data);
            },
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

    /*---------------------- TODO: temporarily duped from MainContent, make component ----------------------*/
    .action-dropdown-container .complete { color: #0f7538; }
    .action-dropdown-container .incomplete { color: #75190f; }
    .action-dropdown-container .exclude { color: #aaa; }

    .action-dropdown-arrow {
        background-color: #0F4C75;
        border-radius: 10px;
        border: 1px solid;
        color: #BBE1FA;
        height: 25px;
        width: 30px;
        text-align: center;
        user-select: none;

        margin: 5px;
        padding: 0 10px;
    }

    .action-dropdown {
        background-color: #3282B8;
        border-radius: 0 10px 10px 10px;
        border: 1px solid;
        color: #BBE1FA;
        position: absolute;
        margin: -12px 0 0 5px;
        z-index: 1;
    }

    .action-dropdown-item {
        background: none;
        border: none;
        border-bottom: 1px solid white;
        color: #BBE1FA;
        display: block;
        padding: 5px;
        text-align: left;
        width: 100%
    }

    .action-dropdown-item:last-child {
        border: none;
    }

    .action-dropdown-arrow:hover, .action-dropdown-item:hover {
        filter: brightness(125%);
        cursor: pointer;
    }

    .action-dropdown-arrow:active, .action-dropdown-item:active {
        filter: brightness(75%);
    }

</style>
