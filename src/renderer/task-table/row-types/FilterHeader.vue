<template>
    <tr>
        <th></th>

        <th v-for="column in columns">
            <span
                class="column-container"
                v-if="column.filterable"
            >
                <select
                    class="filter-select"
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
            <span
                class="column-container"
                v-else
            >
                <input
                    class="search-input"
                    placeholder="..."
                    @keyup="modifySearch($event, column)"
                />
            </span>
        </th>

        <th></th>
    </tr>
</template>

<script>
    export default {
        name: 'filter-header',
        data: () => ({
            filters: [],
        }),
        props: {
            columns: Array,
            uniqueValues: Object,
        },
        mounted: function() {
            this.$emit('filter-change', this.filters);
        },
        methods: {
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

<style>
    .task-table .column-container {
        border: 1px solid black;
        border-top: none;
        border-bottom: none;
    }

    .task-table .applied-filter {
        cursor: pointer;
    }

    .task-table .applied-filter:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .task-table .filter-select {
        background-color: #3282B8;
        border: none;
        color: #BBE1FA;

        width: 100%;
        max-width: 25vw;

        cursor: pointer;
    }

    .task-table .filter-select:hover {
        filter: brightness(150%);
    }

    .task-table .search-input {
        background-color: #3282B8;
        border: none;
        color: #BBE1FA;
        margin: 0 2.5%;
        width: 95%;
    }

    .task-table .search-input::placeholder {
        color: #BBE1FA;
    }
</style>
