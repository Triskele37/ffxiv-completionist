<template>
    <div id="main-content">
        <!----------- Top-Level Summary ----------->
        <template v-if="!selectedGroup">
            <summary-line
                v-for="subGroup in allData.subGroups"
                :key="subGroup.name"
                :group="subGroup"
            />
        </template>
        <!----------- Selected Custom Component ----------->
        <template v-else-if="selectedGroup.component">
            <component v-bind:is="selectedGroup.component"></component>
        </template>
        <!----------- Show All Mode - Task Table ----------->
        <template v-else-if="!showSummary">
            <show-all-section :group="selectedGroup" />
        </template>
        <!----------- Summary Mode - Summary & Task Table ----------->
        <template v-else>
            <template v-if="selectedGroup.subGroups">
                <summary-line
                    v-for="subGroup in selectedGroup.subGroups"
                    :key="subGroup.name"
                    :group="subGroup"
                />
            </template>

            <template v-if="selectedGroup.tasks">
                <task-table :group="selectedGroup" />
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
                showSummary: 'showSummary',
            }),
        },
    };
</script>

<style>
    #main-content {
        height: calc(100% - 160px);
        margin: 10px;
        overflow-y: auto;
    }
</style>
