<template>
    <tr>
        <th></th>

        <th v-for="column in columns">
            <select
                class="filter-select"
                v-if="!filters[column.key] && column.filterable"
                @change="addFilter($event, column)"
            >
                <option></option>
                <option v-for="uniqueValue in uniqueValues[column.key]">
                    {{uniqueValue}}
                </option>
            </select>

            <div
                class="applied-filter"
                v-if="!!filters[column.key] && column.filterable"
                @click="removeFilter(column.key)"
            >
                {{filters[column.key].value}}
            </div>
        </th>

        <th></th>
    </tr>
</template>

<script>
    export default {
        name: 'filter-header',
        data: () => ({
            filters: []
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
            }
        }
    };
</script>

<style>
    .task-table .applied-filter {
        cursor: pointer;
    }

    .task-table .applied-filter:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .task-table .filter-select {
        background-color: #3282B8;
        border-top: none;
        border-bottom: none;
        border-left: 1px solid black;
        border-right: 1px solid black;
        color: #BBE1FA;

        width: 100%;
        max-width: 25vw;

        cursor: pointer;
    }

    .task-table .filter-select:hover {
        filter: brightness(150%);
    }
</style>
