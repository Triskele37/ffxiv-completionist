<template>
    <tr class="task-table-header">
        <th class="completion-column">
            <template v-if="!isNumericCompletion">
                <span @click="onFilterCompletion('Y')"><icon name="complete"/></span>
                <span @click="onFilterCompletion('N')"><icon name="incomplete"/></span>
                <br/>
                <span @click="onFilterCompletion('X')"><icon name="exclude"/></span>
            </template>
            <template v-else>
                #
            </template>
        </th>

        <th v-for="column in columnConfig">
            <div>
                <span v-if="column.filterable" class="filter-column">
                    <select
                        class="xiv-select"
                        v-if="!filters[column.key]"
                        @change="addFilter($event, column)"
                    >
                        <option></option>
                        <option v-for="uniqueValue in uniqueValues[column.key]">
                            {{uniqueValue}}
                        </option>
                    </select>

                    <div
                        class="applied-filter"
                        v-if="!!filters[column.key]"
                        @click="removeFilter(column.key)"
                    >
                        {{filters[column.key].value}}
                    </div>
                </span>
                <span v-else class="search-column">
                    <input
                        class="xiv-input"
                        placeholder="..."
                        @keyup="modifySearch($event, column)"
                    />
                </span>
            </div>
            <div>
                {{column.header}}
            </div>
        </th>

        <th>Links</th>
    </tr>
</template>

<script>
    export default {
        name: 'task-table-header',
        data: () => ({
            filters: [],
        }),
        props: {
            isNumericCompletion: Boolean,
            columnConfig: Array,
            uniqueValues: Object,
        },
        mounted: function() {
            this.$emit('filter-change', this.filters);
        },
        methods: {
            onFilterCompletion: function(value) {
                if(!value || this.filters.completed && this.filters.completed.value === value) {
                    // Remove filter
                    this.filters.completed = null;
                }
                else {
                    // Add/Change filter
                    this.filters.completed = {
                        filterType: 'completed',
                        value
                    };
                }

                this.filters = Object.assign({}, this.filters);
                this.$emit('filter-change', this.filters);
            },
            addFilter: function($event, column) {
                const value = $event.target.value;

                // New Filter
                this.filters[column.key] = {
                    key: column.key,
                    filterType: column.filterType,
                    value
                };

                this.filters = Object.assign({}, this.filters);
                this.$emit('filter-change', this.filters);
            },
            removeFilter: function(key) {
                this.filters[key] = null;

                this.filters = Object.assign({}, this.filters);
                this.$emit('filter-change', this.filters);
            },
            modifySearch: function($event, column) {
                const value = $event.target.value;

                if(value) {
                    // Modify or Add Search Filter
                    this.filters[column.key] = {
                        key: column.key,
                        filterType: 'search',
                        value
                    };
                }
                else {
                    // Remove Filter
                    this.filters[column.key] = null;
                }

                this.filters = Object.assign({}, this.filters);
                this.$emit('filter-change', this.filters);
            }
        }
    };
</script>

<style lang="scss">
.task-table-header {
    .completion-column span {
        cursor: pointer;
    }

    .filter-column {
        .applied-filter {
            cursor: pointer;

            &:hover {
                background-color: rgba(0, 0, 0, 0.1);
            }
        }
    }

    .search-column .xiv-input {
        width: 95%;
    }
}
</style>
