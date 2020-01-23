<template>
    <div id="main-content">
        <!----------- Summary on no selected group ----------->
        <template v-if="!selectedGroup">
            <summary-line
                v-for="subGroup in allData.subGroups"
                :key="subGroup.name"
                :group="subGroup"
            />
        </template>

        <!----------- Summary when a group is selected ----------->
        <template v-if="selectedGroup && selectedGroup.subGroups && showSummary">
            <summary-line
                v-for="subGroup in selectedGroup.subGroups"
                :key="subGroup.name"
                :group="subGroup"
            />
        </template>

        <!----------- Selected Group Task Table ----------->
        <template v-if="selectedGroup && selectedGroup.tasks && showSummary">
            <task-table :group="selectedGroup" />
        </template>

        <!----------- Show All Task Table ----------->
        <template v-if="!showSummary">
            <show-all-section :group="selectedGroup" />
        </template>
    </div>
</template>

<script>
    import { mapState } from "vuex";

    import { data } from '../../data';
    import SummaryLine from '../summary-line/SummaryLine';
    import ShowAllSection from "./show-all-section/ShowAllSection";
    import TaskTable from './task-table/TaskTable';

    export default {
        name: 'main-content',
        data: () => ({
            allData: data,
        }),
        components: {
            'summary-line': SummaryLine,
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
