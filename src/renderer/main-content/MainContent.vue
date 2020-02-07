<template>
    <div id="main-content">
        <!----------- Top-Level Summary ----------->
        <div v-if="!selectedGroup">
            Hello World
        </div>
        <!----------- Selected Custom Component ----------->
        <template v-else-if="selectedGroup.component">
            <component v-bind:is="selectedGroup.component"></component>
        </template>
        <!----------- Summary & Task Table ----------->
        <template v-else>
            <div v-if="selectedGroup.groupKeys" class="group-summary-section">
                <summary-line
                    v-for="groupKey in selectedGroup.groupKeys"
                    :key="selectedGroup[groupKey].name"
                    :group="selectedGroup[groupKey]"
                />
            </div>

            <div class="section-actions">
                <button
                    class="action-button"
                    v-if="showShowAllButton"
                    @click="toggleShowAll"
                >
                    {{showAll ? 'Hide All Tasks' : 'Show All Tasks'}}
                </button>
            </div>

            <!----------- Task Tables (base & show all) ----------->
            <template v-if="showShowAllButton && showAll">
                <show-all-section :group="selectedGroup" />
            </template>
            <template v-else-if="selectedGroup.tasks">
                <task-table
                    :column-config="selectedGroup.columnConfig"
                    :tasks="selectedGroup.tasks"
                />
            </template>
        </template>
    </div>
</template>

<script>
    import { mapState } from "vuex";

    import { data } from '../../data';
    import SummaryLine from '../summary-line/SummaryLine';
    import ImportSheet from './import-sheet/ImportSheet';
    import ShowAllSection from "./show-all-section/ShowAllSection";
    import TaskTable from './task-table/TaskTable';

    export default {
        name: 'main-content',
        data: () => ({
            allData: data,
            showAll: false,
        }),
        components: {
            'summary-line': SummaryLine,
            'import-sheet': ImportSheet,
            'show-all-section': ShowAllSection,
            'task-table': TaskTable,
        },
        computed: {
            ...mapState('navigation', {
                selectedGroup: 'selectedGroup',
            }),
            showShowAllButton: function() {
                return (this.selectedGroup && this.selectedGroup.groupKeys && this.selectedGroup.columnConfig);
            },
        },
        methods: {
            toggleShowAll: function() {
                this.showAll = !this.showAll;
            }
        }
    };
</script>

<style>
    #main-content {
        height: calc(100% - 160px);
        margin: 10px;
        overflow-y: auto;
    }

    .group-summary-section {
        display: flex;
        flex-wrap: wrap;
    }

    .section-actions {
        text-align: center;
    }

    .action-button {
        background-color: #0F4C75;
        border-radius: 10px;
        border: 1px solid;
        color: #BBE1FA;
        text-align: center;
        user-select: none;

        margin: 5px;
        padding: 0 10px;
    }

    .action-button:hover {
        filter: brightness(125%);
        cursor: pointer;
    }

    .action-button:active {
        filter: brightness(75%);
    }
</style>
