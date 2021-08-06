<template>
    <tr class="task-table-header">
        <th class="completion-column">
            <template v-if="!isNumericCompletion">
                <span @click="onFilterCompletion('Y')">
                  <icon :class="{ enabledFilter: filters.completion.completed }" name="complete"/>
                </span>
                <span @click="onFilterCompletion('N')">
                  <icon :class="{ enabledFilter: filters.completion.incomplete }" name="incomplete"/>
                </span>
                <br/>
                <span @click="onFilterCompletion('X')">
                  <icon :class="{ enabledFilter: filters.completion.excluded }" name="exclude"/>
                </span>
            </template>
            <template v-else>
                #
            </template>
        </th>

        <th v-for="column in columnConfig">
            <div class="column-search">
                <input
                    @keyup="modifySearch($event, column)"
                    @search="modifySearch($event, column)"
                    @keydown="onDatalistClick($event)"
                    placeholder="..."
                    class="xiv-combo"
                    :list="column.key"
                    type="search"
                />
                <datalist :id="column.key" v-if="column.filterable">
                    <option>Blank</option>
                    <option v-for="uniqueValue in uniqueValues[column.key]"
                            @click="test($event)">
                        {{displayedFilterValue(uniqueValue)}}
                    </option>
                </datalist>
            </div>
            <div>
                {{column.header}}
            </div>
        </th>

        <th>Links</th>
    </tr>
</template>

<script>
    import { eStore } from "../../../../store/electronStore";

    export default {
        name: 'task-table-header',
        data: () => ({
            filters: {
                completion: {
                    completed: eStore.get("table-filters.completed"),
                    incomplete: eStore.get("table-filters.incomplete"),
                    excluded: eStore.get("table-filters.excluded"),
                }
            },
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
                const key = (value === "Y") ? "completed" : (value === "N") ? "incomplete" : "excluded";
                this.filters.completion[key] = !this.filters.completion[key];
                eStore.set(`table-filters.${key}`, this.filters.completion[key]);

                this.filters = Object.assign({}, this.filters);
                this.$emit('filter-change', this.filters);
            },
            displayedFilterValue: function(filterValue) {
                switch(filterValue) {
                    case null:
                    case undefined:
                    case "": return "Blank"
                    default: return filterValue;
                }
            },
            modifySearch: function($event, column) {
                const value = $event.target.value;

                // No keycode means the x was clicked
                if(!$event.which) {
                    $event.target.blur();
                    return;
                }

                // Don't run filter unnecessarily
                if(this.filters[column.key] && this.filters[column.key].value === value) {
                    return;
                }

                if(value) {
                    // Add/Modify Search Filter
                    this.filters[column.key] = {
                        key: column.key,
                        value
                    };
                }
                else {
                    // Remove Filter
                    this.filters[column.key] = null;
                }


                this.filters = Object.assign({}, this.filters);
                this.$emit('filter-change', this.filters);
            },
            onDatalistClick($event) {
                // Datalist clicks fire keydown on their parent input
                // if which is undefined, it was from datalist
                if(!$event.which) $event.target.blur();
            }
        }
    };
</script>

<style lang="scss">
.task-table-header {
    .completion-column span {
        cursor: pointer;

        .enabledFilter {
            filter: drop-shadow(2px 2px 0px black);
        }
    }

    .column-search {
        .xiv-combo {
            width: 95%;
        }

        .applied-filter {
            cursor: pointer;

            &:hover {
                background-color: rgba(0, 0, 0, 0.1);
            }
        }
    }
}
</style>
